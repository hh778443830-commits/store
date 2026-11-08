/* SHUAIBIYA - Supabase Store Backend */
(() => {
  'use strict';

  const cfg = window.SHUAIBIYA_CONFIG || {};

  if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY || !window.supabase) {
    console.error('Supabase configuration or library is missing.');
    return;
  }

  const db = window.supabase.createClient(
    cfg.SUPABASE_URL,
    cfg.SUPABASE_ANON_KEY
  );

  window.shuaibiyaDB = db;

  let categoriesMap = {};
  let categoriesNameMap = {};

  const escapeHtml = (value) =>
    String(value ?? '').replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));

  function showError(message) {
    console.error(message);
    alert(message);
  }

  async function loadCategories() {
    const { data, error } = await db
      .from('categories')
      .select('*');

    if (error) {
      console.error('Categories error:', error.message);
      return;
    }

    categoriesMap = {};
    categoriesNameMap = {};

    (data || []).forEach((item) => {
      categoriesMap[item.id] = item.name;
      categoriesNameMap[item.name] = item.id;
    });
  }

  function convertProduct(row) {
    return {
      id: row.id,
      name: row.name || 'منتج بدون اسم',
      cat: categoriesMap[row.category_id] || row.description || 'عام',
      price: Number(row.price || 0),
      old: Number(row.price || 0),
      tag: Number(row.stock) <= 0 ? 'نفد المخزون' : 'متوفر',
      colors: ['متوفر'],
      sizes: ['مقاس موحد'],
      image_url: row.image_url || '',
      stock: row.stock ?? 0,
      description: row.description || ''
    };
  }

  async function loadProducts() {
    await loadCategories();

    const { data, error } = await db
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Products error:', error.message);
      return;
    }

    products = (data || []).map(convertProduct);

    if (typeof render === 'function') {
      render();
    }
  }

  window.loadShuaibiyaProducts = loadProducts;
  loadProducts();

  if (typeof productCard === 'function') {
    const originalProductCard = productCard;

    productCard = function (product, related = false) {
      if (!product.image_url) {
        return originalProductCard(product, related);
      }

      const id = escapeHtml(product.id);
      const name = escapeHtml(product.name);
      const image = escapeHtml(product.image_url);

      if (related) {
        return `
          <article class="related-card" onclick="openProduct('${id}')">
            <div class="rel-img">
              <img src="${image}" alt="${name}"
                style="width:100%;height:100%;object-fit:cover">
            </div>
            <p>${name}</p>
            <b>${money(product.price)}</b>
          </article>
        `;
      }

      return `
        <article class="product-card" onclick="openProduct('${id}')">
          <div class="product-image">
            <img src="${image}" alt="${name}">
            <span class="tag">${escapeHtml(product.tag || 'اختيار شعيبيه')}</span>
          </div>
          <div class="product-info">
            <h3>${name}</h3>
            <span class="price">${money(product.price)}</span>
            <div class="product-meta">
              <small>${escapeHtml(product.cat)}</small>
              <button class="smallbtn" type="button">عرض التفاصيل</button>
            </div>
          </div>
        </article>
      `;
    };
  }

  async function getStaffProfile() {
    const { data: sessionData, error: sessionError } =
      await db.auth.getSession();

    if (sessionError) throw sessionError;

    const session = sessionData?.session;

    if (!session) {
      return { session: null, profile: null };
    }

    const { data: profile, error } = await db
      .from('staff_profiles')
      .select('*')
      .eq('user_id', session.user.id)
      .maybeSingle();

    if (error) throw error;

    return { session, profile };
  }

  window.openAdmin = async function () {
    try {
      const { session, profile } = await getStaffProfile();

      if (!session) {
        if (typeof showAdminLogin === 'function') {
          showAdminLogin();
        }
        return;
      }

      const allowed = profile &&
        (profile.is_owner === true || profile.is_active === true);

      if (!allowed) {
        alert('هذا الحساب غير مخوّل لإدارة المتجر.');
        await db.auth.signOut();
        return;
      }

      document.querySelector('.hero').style.display = 'none';
      document.getElementById('quick').style.display = 'none';
      document.querySelector('#store>.section-title').style.display = 'none';
      document.getElementById('products').style.display = 'none';
      document.getElementById('admin').classList.add('show');

      const permissions = Array.isArray(profile.permissions)
        ? profile.permissions.join('، ')
        : '';

      const roleLabel = profile.is_owner
        ? 'المالك - صلاحية كاملة'
        : (permissions || 'موظف');

      const notice = document.querySelector('#admin .notice');

      if (notice) {
        notice.textContent =
          'متصل بقاعدة البيانات بنجاح - الصلاحية: ' + roleLabel;
      }

      if (!document.getElementById('newImageUrl')) {
        const priceField =
          document.getElementById('newPrice')?.parentElement;

        if (priceField) {
          const imageField = document.createElement('div');
          imageField.className = 'field';
          imageField.innerHTML = `
            <label>رابط صورة المنتج (اختياري)</label>
            <input id="newImageUrl" type="url"
              placeholder="https://example.com/image.jpg">
          `;
          priceField.after(imageField);
        }
      }

      await refreshAdmin();

    } catch (error) {
      alert('تعذر فتح لوحة الإدارة: ' + error.message);
    }
  };

  window.shuaibiyaLogin = async function () {
    const email =
      document.getElementById('adminEmail')?.value.trim();

    const password =
      document.getElementById('adminPassword')?.value;

    if (!email || !password) {
      alert('أدخل البريد الإلكتروني وكلمة المرور.');
      return;
    }

    const { error } = await db.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert('فشل تسجيل الدخول: ' + error.message);
      return;
    }

    if (typeof hideModal === 'function') {
      hideModal();
    }

    await window.openAdmin();
  };

  async function refreshAdmin() {
    const productsResult = await db
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    const ordersResult = await db
      .from('orders')
      .select('*, order_items(*)')
      .order('created_at', { ascending: false })
      .limit(100);

    const allProducts = productsResult.data || [];
    const allOrders = ordersResult.data || [];

    const statProducts = document.getElementById('statProducts');
    const statOrders = document.getElementById('statOrders');
    const ordersList = document.getElementById('ordersList');

    if (statProducts) {
      statProducts.textContent =
        productsResult.error ? '—' : allProducts.length;
    }

    if (statOrders) {
      statOrders.textContent =
        ordersResult.error ? '—' : allOrders.length;
    }

    if (ordersList) {
      ordersList.innerHTML = ordersResult.error
        ? 'تعذر تحميل الطلبات: ' +
          escapeHtml(ordersResult.error.message)
        : allOrders.map((order) => `
          <div class="cart-row"
            style="align-items:flex-start;gap:10px;flex-wrap:wrap;">
            <span style="flex:1;min-width:220px;">
              <b>طلب #${escapeHtml(order.id)} -
                ${escapeHtml(order.customer_name)}</b>
              <br>
              <a href="tel:${escapeHtml(order.phone)}">
                ${escapeHtml(order.phone)}
              </a>
              <br>
              <small>
                العنوان: ${escapeHtml(order.address || 'غير محدد')}
              </small>
              <br>
              <small>
                الحالة: ${escapeHtml(order.status || 'جديد')}
              </small>
              <div style="margin:6px 0;font-size:.9em;">
                ${(order.order_items || []).map((item) =>
                  `• ${escapeHtml(item.product_name)} ×
                  ${escapeHtml(item.quantity)}`
                ).join('<br>')}
              </div>
              <button class="smallbtn"
                onclick="window.shuaibiyaWhatsApp(
                  '${escapeHtml(order.phone)}',
                  '${escapeHtml(order.customer_name)}',
                  '${escapeHtml(order.id)}'
                )">
                واتساب
              </button>
              <button class="smallbtn"
                onclick="window.updateOrderStatus(
                  '${escapeHtml(order.id)}',
                  'تم التسليم'
                )">
                تم التسليم
              </button>
            </span>
            <b>${money(order.total)}</b>
          </div>
        `).join('') || 'لا توجد طلبات حتى الآن.';
    }

    let manageBox =
      document.getElementById('adminProductsManage');

    if (!manageBox && ordersList) {
      manageBox = document.createElement('div');
      manageBox.id = 'adminProductsManage';
      manageBox.style.marginTop = '24px';
      ordersList.after(manageBox);
    }

    if (manageBox) {
      manageBox.innerHTML = productsResult.error
        ? 'تعذر تحميل المنتجات: ' +
          escapeHtml(productsResult.error.message)
        : `
          <h3>إدارة المنتجات الحالية (${allProducts.length})</h3>
          ${allProducts.map((product) => `
            <div class="cart-row" style="align-items:center;">
              <span>
                <b>${escapeHtml(product.name)}</b><br>
                <small>
                  السعر: ${money(product.price)} |
                  الحالة: ${product.is_active ? 'ظاهر' : 'مخفي'}
                </small>
              </span>
              <div>
                <button class="smallbtn"
                  onclick="window.toggleProductActive(
                    '${escapeHtml(product.id)}',
                    ${!product.is_active}
                  )">
                  ${product.is_active ? 'إخفاء' : 'إظهار'}
                </button>
                <button class="smallbtn"
                  style="color:#b00;"
                  onclick="window.deleteProduct('${escapeHtml(product.id)}')">
                  حذف
                </button>
              </div>
            </div>
          `).join('') ||
          '<p class="muted">لا توجد منتجات مضافة بعد.</p>'
        `;
    }

    if (!document.getElementById('adminLogoutBtn')) {
      const logout = document.createElement('button');
      logout.id = 'adminLogoutBtn';
      logout.className = 'iconbtn';
      logout.textContent = 'تسجيل الخروج';

      logout.onclick = async () => {
        await db.auth.signOut();
        location.reload();
      };

      document.querySelector('#admin .section-title')?.append(logout);
    }
  }

  window.updateOrderStatus = async (orderId, status) => {
    const { error } = await db
      .from('orders')
      .update({ status })
      .eq('id', orderId);

    if (error) {
      alert('تعذر تحديث حالة الطلب: ' + error.message);
      return;
    }

    await refreshAdmin();
  };

  window.toggleProductActive = async (productId, newState) => {
    const { error } = await db
      .from('products')
      .update({ is_active: newState })
      .eq('id', productId);

    if (error) {
      alert('تعذر تحديث المنتج: ' + error.message);
      return;
    }

    await loadProducts();
    await refreshAdmin();
  };

  window.deleteProduct = async (productId) => {
    if (!confirm('هل تريد حذف هذا المنتج نهائياً؟')) return;

    const { error } = await db
      .from('products')
      .delete()
      .eq('id', productId);

    if (error) {
      alert('تعذر حذف المنتج: ' + error.message);
      return;
    }

    await loadProducts();
    await refreshAdmin();
  };

  window.shuaibiyaWhatsApp = (phone, name, id) => {
    const message = encodeURIComponent(
      `مرحباً ${name}، نتواصل معك من متجر شعيبيه بخصوص طلبك رقم #${id}.`
    );

    let number = String(phone || '').replace(/\D/g, '');

    if (number.startsWith('7') && number.length === 9) {
      number = '967' + number;
    }

    if (!number) {
      alert('لا يوجد رقم هاتف صالح لهذا الطلب.');
      return;
    }

    window.open(
      `https://wa.me/${number}?text=${message}`,
      '_blank',
      'noopener'
    );
  };

  window.submitOrder = async function () {
    const name =
      document.getElementById('custName')?.value.trim();

    const phone =
      document.getElementById('custPhone')?.value.trim();

    const addressInput =
      document.getElementById('custAddress')?.value.trim();

    if (!name || !phone) {
      alert('يرجى إدخال الاسم ورقم الجوال.');
      return;
    }

    if (!window.customerMapUrl && !addressInput) {
      alert('يرجى تحديد موقعك أو كتابة عنوان التوصيل.');
      return;
    }

    if (!cart || !cart.length) {
      alert('السلة فارغة.');
      return;
    }

    const fullAddress = [
      addressInput,
      window.customerMapUrl
    ].filter(Boolean).join(' — ');

    const total = cart.reduce((sum, item) =>
      sum + Number(item.price || 0) * Number(item.qty || 1), 0
    );

    const { data: orderData, error: orderError } = await db
      .from('orders')
      .insert({
        customer_name: name,
        phone,
        address: fullAddress,
        total,
        status: 'جديد'
      })
      .select()
      .single();

    if (orderError) {
      alert('لم يتم حفظ الطلب: ' + orderError.message);
      return;
    }

    const rows = cart.map((item) => ({
      order_id: orderData.id,
      product_id: item.id,
      product_name: `${item.name} (${item.color || 'متوفر'} / ${item.size || 'موحد'})`,
      price: Number(item.price || 0),
      quantity: Number(item.qty || 1)
    }));

    const { error: itemsError } = await db
      .from('order_items')
      .insert(rows);

    if (itemsError) {
      alert(
        'تم تسجيل الطلب رقم #' + orderData.id +
        ' لكن تعذر حفظ تفاصيل المنتجات: ' + itemsError.message
      );
      return;
    }

    const whatsapp =
      String(cfg.STORE_WHATSAPP || '').replace(/\D/g, '');

    const summary = cart.map((item) =>
      `• ${item.name} × ${item.qty}`
    ).join('\n');

    const message = encodeURIComponent(
      `طلب جديد من متجر شعيبيه\n` +
      `رقم الطلب: #${orderData.id}\n` +
      `الاسم: ${name}\n` +
      `الهاتف: ${phone}\n` +
      `العنوان: ${fullAddress}\n\n` +
      `المنتجات:\n${summary}\n\n` +
      `الإجمالي: ${money(total)}\n` +
      `الدفع: عند الاستلام`
    );

    cart = [];
    window.customerMapUrl = '';

    if (typeof render === 'function') {
      render();
    }

    const modalContent = document.getElementById('modalContent');

    if (modalContent) {
      modalContent.innerHTML = `
        <h2>تم استلام طلبك بنجاح</h2>
        <p class="muted">
          رقم الطلب:
          <b>#${escapeHtml(orderData.id)}</b>
        </p>
      `;
    }

    if (whatsapp) {
      window.open(
        `https://wa.me/${whatsapp}?text=${message}`,
        '_blank',
        'noopener'
      );
    }

    await refreshAdminIfOpen();
  };

  async function refreshAdminIfOpen() {
    if (document.getElementById('admin')?.classList.contains('show')) {
      await refreshAdmin();
    }
  }

  window.addProduct = async function () {
    const name =
      document.getElementById('newName')?.value.trim();

    const categoryName =
      document.getElementById('newCat')?.value;

    const price =
      Number(document.getElementById('newPrice')?.value);

    const imageUrl =
      document.getElementById('newImageUrl')?.value.trim() || null;

    if (!name || !Number.isFinite(price) || price <= 0) {
      alert('يرجى إدخال اسم المنتج وسعر صحيح أكبر من صفر.');
      return;
    }

    let categoryId = categoriesNameMap[categoryName] || null;

    if (!categoryId && categoryName) {
      const { data: newCategory, error: categoryError } = await db
        .from('categories')
        .insert({ name: categoryName })
        .select()
        .single();

      if (categoryError) {
        alert('تعذر إضافة القسم: ' + categoryError.message);
        return;
      }

      categoryId = newCategory.id;
      categoriesMap[categoryId] = categoryName;
      categoriesNameMap[categoryName] = categoryId;
    }

    const { error } = await db
      .from('products')
      .insert({
        name,
        description: categoryName || '',
        category_id: categoryId,
        price,
        image_url: imageUrl,
        stock: 50,
        is_active: true
      });

    if (error) {
      alert('تعذرت إضافة المنتج: ' + error.message);
      return;
    }

    document.getElementById('newName').value = '';
    document.getElementById('newPrice').value = '';

    if (document.getElementById('newImageUrl')) {
      document.getElementById('newImageUrl').value = '';
    }

    await loadProducts();
    await refreshAdmin();

    alert('تم حفظ المنتج بنجاح.');
  };

})();
