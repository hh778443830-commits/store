/* الشعيبية — مخزن ربط بقاعدة بيانات Supabase */
(() => {
  const cfg = window.SHUAIBIYA_CONFIG || {};
  const ready = Boolean(
    cfg.SUPABASE_URL &&
    cfg.SUPABASE_ANON_KEY &&
    !String(cfg.SUPABASE_URL).includes('YOUR_PROJECT') &&
    !String(cfg.SUPABASE_ANON_KEY).includes('YOUR_')
  );

  const banner = (message) => {
    let el = document.getElementById('backendNotice');
    إذا لم يكن العنصر {
      el = document.createElement('div');
      el.id = 'backendNotice';
      el.className = 'notice';
      document.querySelector('main')?.prepend(el);
    }
    el.textContent = message;
  };

  إذا لم يكن التطبيق جاهزًا أو لم يكن يستخدم قاعدة بيانات افتراضية (window.supabase)،
    banner('تعذر الاتصال بقاعدة البيانات. تأكد من ملفي config.js ومكتبة Supabase.');
    يعود؛
  }

  const db = window.supabase.createClient(
    cfg.SUPABASE_URL,
    cfg.SUPABASE_ANON_KEY
  );
  window.shuaibiyaDB = db;

  let categoriesMap = {};
  let categoriesNameMap = {};

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&',
    '<': '<',
    '>': '>',
    '"': '"',
    "'": '''
  }[char]));

  const getCart = () => window.cart || cart;

  async function loadCategories() {
    const { data, error } = await db
      .from('categories')
      .يختار('*')؛

    إذا حدث خطأ {
      console.error('التصنيفات:', error.message);
      يعود؛
    }

    categoriesMap = {};
    categoriesNameMap = {};

    (البيانات || []).forEach((العنصر) => {
      categoriesMap[item.id] = item.name;
      categoriesNameMap[item.name] = item.id;
    });
  }

  دالة asProduct(row) {
    يعود {
      المعرّف: row.id،
      الاسم: اسم الصف || "منتج بدون اسم"،
      cat: categoriesMap[row.category_id] || row.description || 'عام',
      السعر: رقم(سعر الصف || 0)،
      قديم: رقم(سعر الصف || 0)،
      العلامة: Row.stock !== null && Number(row.stock) <= 0 ? 'ليس في الأوراق المالية' : 'متوفر',
      الألوان: ['م'],
      الأحجام: ['ابتعد موحد'],
      image_url: row.image_url || '',
      المخزون: صف.المخزون ?? 0,
      الوصف: row.description || ''
    };
  }

  async function loadProducts() {
    انتظر تحميل الفئات();

    const { data, error } = await db
      .from('products')
      .يختار('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    إذا حدث خطأ {
      banner('تعذر تحميل المنتجات:' + error.message);
      console.error(error);
      يعود؛
    }

    //التخزين المعروض بقاعدة بيانات المنتجات فقط، حتى لو كانت القائمة فارغة.
    products = (البيانات || []).map(asProduct);
    إذا كان نوع الدالة render هو 'function'، فسيتم استدعاء الدالة render().
  }

  window.loadShuaibiyaProducts = LoadProducts;
  loadProducts();

  إذا كان نوع بطاقة المنتج دالة {
    const originalProductCard = productCard;

    productCard = function (product, related = false) {
      إذا لم يكن رابط صورة المنتج موجودًا، فسيتم إرجاع بطاقة المنتج الأصلية (المنتج، المرتبط).

      const id = escapeHtml(product.id);
      const name = escapeHtml(product.name);
      const image = escapeHtml(product.image_url);

      إذا (كان مرتبطًا) {
        return `<article class="related-card" onclick="openProduct('${id}')">
          <div class="rel-img"><img src="${image}" alt="${name}" style="width:100%;height:100%;object-fit:cover"></div>
          <p>${name}</p><b>${money(product.price)}</b>
        </article>`;
      }

      return `<article class="product-card" onclick="openProduct('${id}')">
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
      </article>`;
    };
  }

  async function getStaffProfile() {
    const { data: sessionData, error: sessionError } = await db.auth.getSession();
    إذا حدث خطأ في الجلسة، فقم برمي استثناء خطأ الجلسة.

    const session = sessionData?.session;
    إذا لم تكن هناك جلسة، فسيتم إرجاع { session: null, profile: null };

    const { data: profile, error } = await db
      .from('staff_profiles')
      .يختار('*')
      .eq('user_id', session.user.id)
      .maybeSingle();

    إذا حدث خطأ، فقم برمي الخطأ.
    return { session, profile };
  }

  window.openAdmin = async function () {
    يحاول {
      const { session, profile } = await getStaffProfile();

      إذا لم تكن هناك جلسة {
        إذا كان نوع showAdminLogin هو 'function'، فسيتم استدعاء showAdminLogin().
        يعود؛
      }

      const allowed = profile &&
        (profile.is_owner === true || profile.is_active === true);

      إذا لم يكن مسموحًا به {
        تنبيه('هذا الحساب غير مخوّل والابتكار. تأكد من الهاتف في جدول ملفات تعريف الموظفين.');
        await db.auth.signOut();
        يعود؛
      }

      document.querySelector('.hero').style.display = 'none';
      document.getElementById('quick').style.display = 'none';
      document.querySelector('#store>.section-title').style.display = 'none';
      document.getElementById('products').style.display = 'none';
      document.getElementById('admin').classList.add('show');

      const permissions = Array.isArray(profile.permissions)
        ? profile.permissions.join(', ')
        : '';
      const roleLabel = Profile.is_owner ? 'المالك — صلاحية كاملة' : (permissions || 'موظف');
      document.querySelector('#admin .notice').textContent =
        'متصل بقاعدة البيانات الفعالة — النجاح: ' + roleLabel;

      إذا لم يكن العنصر الذي يحمل المعرّف 'newImageUrl' موجودًا في المستند {
        const priceField = document.getElementById('newPrice')?.parentElement;
        إذا كان (حقل السعر) {
          const imageField = document.createElement('div');
          imageField.className = 'field';
          imageField.innerHTML = '<label>رابط صورة المنتج (اختياري)</label><input id="newImageUrl" type="url" placeholder="https://example.com/image.jpg">';
          priceField.after(imageField);
        }
      }

      انتظر تحديث لوحة التحكم ();
    } catch (error) {
      تنبيه('تعذر فتح لوحة الإدارة: ' + error.message);
    }
  };

  window.shuaibiyaLogin = async function () {
    const email = document.getElementById('adminEmail')?.value.trim();
    const password = document.getElementById('adminPassword')?.value;
    إذا لم يكن البريد الإلكتروني أو كلمة المرور موجودين {
      تنبيه('أدخل البريد الإلكتروني وكلمة المرور.');
      يعود؛
    }

    const { error } = await db.auth.signInWithPassword({ email, password });
    إذا حدث خطأ {
      تنبيه('فشل تسجيل الدخول:' + error.message);
      يعود؛
    }

    إخفاء النافذة المنبثقة();
    انتظر حتى يتم فتح نافذة الإدارة.
  };

  async function refreshAdmin() {
    const productsResult = await db
      .from('products')
      .يختار('*')
      .order('created_at', { ascending: false });

    const ordersResult = await db
      .from('orders')
      .select('*, order_items(*)')
      .order('created_at', { ascending: false })
      .limit(100);

    const allProducts = productsResult.data || [];
    const allOrders = ordersResult.data || [];

    document.getElementById('statProducts').textContent =
      productsResult.error ? '—' : allProducts.length;
    document.getElementById('statOrders').textContent =
      ordersResult.error ? '—' : allOrders.length;

    document.getElementById('ordersList').innerHTML = ordersResult.error
      ؟ 'تعذر تحميل الطلبات: ' + escapeHtml(ordersResult.error.message)
      : allOrders.map((order) => `
        <div class="cart-row" style="align-items:flex-start;gap:10px;flex-wrap:wrap;">
          <span style="flex:1;min-width:220px;">
            طلب #${escapeHtml(order.id)} — ${escapeHtml(order.customer_name)}</b>
            · <a href="tel:${escapeHtml(order.phone)}">${escapeHtml(order.phone)}</a><br>
            <small>العنوان / الموقع: ${escapeHtml(order.address || 'غير محدد')}</small><br>
            <small>الحالة: <b>${escapeHtml(order.status || 'جديد')}</b> · ${order.created_at ? new Date(order.created_at).toLocaleString('ar-YE') : ''}</small><br>
            <div style="margin:6px 0;font-size:.9em;color:#444;">
              ${(order.order_items || []).map((item) =>
                `• ${escapeHtml(item.product_name)} × ${escapeHtml(item.quantity)} (${money(item.price)})`
              ).join('<br>')}
            </div>
            <button class="smallbtn" onclick="window.shuaibiyaWhatsApp('${escapeHtml(order.phone)}','${escapeHtml(order.customer_name)}','${escapeHtml(order.id)}')"> واتساب</button>
            <button class="smallbtn" onclick="window.updateOrderStatus('${escapeHtml(order.id)}','تم تسليم')">تم تسليم ✓</button>
          </span>
          <b>${money(order.total)}</b>
        </div>
      `).الانضمام('') || 'لا يوجد طلبات حتى الآن.';

    Let ManageBox = document.getElementById('adminProductsManage');
    إذا لم يكن بالإمكان إدارة الصندوق {
      manageBox = document.createElement('div');
      manageBox.id = 'adminProductsManage';
      manageBox.style.marginTop = '24px';
      document.getElementById('ordersList').after(manageBox);
    }

    manageBox.innerHTML = productsResult.error
      ؟ 'تعذر تحميل المنتجات: ' + escapeHtml(productsResult.error.message)
      : `<h3>إدارة المنتجات الحالية (${allProducts.length})</h3>
        ${allProducts.map((product) => `
          <div class="cart-row" style="align-items:center;">
            <span>
              <b>${escapeHtml(product.name)}</b><br>
              <small>السعر: ${money(product.price)} | الحالة: ${product.is_active ؟ 'ظاهر' : 'مخفي'}</small>
            </span>
            <div>
              <button class="smallbtn" onclick="window.toggleProductActive('${escapeHtml(product.id)}',${!product.is_active})">${product.is_active ? 'غير نشط' : 'غير نشط'}</button>
              <button class="smallbtn" style="color:#b00;" onclick="window.deleteProduct('${escapeHtml(product.id)}')"> حذف</button>
            </div>
          </div>
        `).الانضمام('') || '<p class="muted">لا توجد منتجات مضافة بعد.</p>'}`;

    إذا لم يكن العنصر الذي يحمل المعرّف 'adminLogoutBtn' موجودًا في المستند {
      const logout = document.createElement('button');
      logout.id = 'adminLogoutBtn';
      logout.className = 'iconbtn';
      logout.textContent = 'تسجيل الخروج';
      logout.onclick = async () => {
        await db.auth.signOut();
        location.reload();
      };
      document.querySelector('#admin .section-title').append(logout);
    }
  }

  window.updateOrderStatus = async (orderId, status) => {
    const { error } = await db.from('orders').update({ status }).eq('id', orderId);
    إذا حدث خطأ {
      تنبيه ("تعذر تحديث حالة الطلب:" + error.message)؛
      يعود؛
    }
    انتظر تحديث لوحة التحكم ();
  };

  window.toggleProductActive = async (productId, newState) => {
    const { error } = await db
      .from('products')
      .update({ is_active: newState })
      .eq('id', productId);

    إذا حدث خطأ {
      تنبيه('تعذر تحديث المنتج:' + error.message);
      يعود؛
    }

    انتظر تحميل المنتجات();
    انتظر تحديث لوحة التحكم ();
  };

  window.deleteProduct = async (productId) => {
    if (!confirm('هل تريد حذف هذا المنتج نهائياً؟')) return;

    const { error } = await db.from('products').delete().eq('id', productId);
    إذا حدث خطأ {
      تنبيه("تعذر حذف المنتج:" + error.message);
      يعود؛
    }

    انتظر تحميل المنتجات();
    انتظر تحديث لوحة التحكم ();
  };

  window.shuaibiyaWhatsApp = (phone, name, id) => {
    const message = encodeURIComponent(
      `مرحباً ${name}، نتواصل معك من متجر شعيبيه الخاص بك رقم #${id}.`
    );
    let number = String(phone || '').replace(/\D/g, '');
    إذا كان (الرقم يبدأ بـ '7') وكان طول الرقم يساوي 9) الرقم = '967' + الرقم؛
    إذا لم يكن هناك رقم {
      تنبيه('لا يوجد رقم هاتف صالح لهذا الطلب.');
      يعود؛
    }
    window.open(`https://wa.me/${number}?text=${message}`, '_blank', 'noopener');
  };

  window.submitOrder = async function () {
    const name = document.getElementById('custName')?.value.trim();
    const phone = document.getElementById('custPhone')?.value.trim();
    const addressInput = document.getElementById('custAddress')?.value.trim();

    إذا لم يكن هناك اسم أو رقم هاتف {
      تنبيه('يرجى إدخال الاسم ورقم الجوال.');
      يعود؛
    }
    إذا لم يكن عنوان URL الخاص بالعميل موجودًا ولم يكن حقل العنوان موجودًا، {
      تنبيه('يرجى تحديد موقعك أو كتابة عنوان التوصيل.');
      يعود؛
    }
    إذا لم تكن هناك سلة تسوق أو لم يكن طولها غير محدد، فقم بالخروج.

    const fullAddress = [addressInput, window.customerMapUrl].filter(Boolean).join(' — ');
    const total = cart.reduce((sum, item) =>
      المجموع + عدد (سعر الصنف || 0) * عدد (كمية الصنف || 1)، 0
    );

    const { data: orderData، error: orderError } = انتظار db
      .from('orders')
      .insert({
        اسم_العميل: الاسم،
        هاتف،
        العنوان: العنوان الكامل،
        المجموع،
        الحالة: جديد
      })
      .يختار()
      .أعزب()؛

    إذا حدث خطأ في الطلب {
      تنبيه('لم يتم حفظ الطلب: ' + orderError.message);
      يعود؛
    }

    const rows = cart.map((item) => {
      const numericId = Number(item.id);
      يعود {
        order_id: orderData.id,
        product_id: Number.isFinite(numericId) ? numericId : null,
        اسم_المنتج: `${item.name} (${item.color || 'متوفر'} / ${item.size || 'موحد'})`,
        السعر: رقم(سعر العنصر || 0)،
        الكمية: رقم (الكمية في العنصر || 1)
      };
    });

    const { error: itemsError } = await db.from('order_items').insert(rows);
    إذا (حدث خطأ في العناصر) {
      تنبيه('تم تسجيل الطلب رقم #' + orderData.id +
        ' لكن تعذر حفظ تفاصيل المنتجات: ' + itemsError.message);
      يعود؛
    }

    const whatsapp = String(cfg.STORE_WHATSAPP || '').replace(/\D/g, '');
    const summary = cart.map((item) =>
      `• ${item.name} × ${item.qty} (${item.color || 'متوفر'}/${item.size || 'موحد'})`
    ).join('\n');
    const message = encodeURIComponent(
      `طلب جديد من متجر شعيبيه\nرقم الطلب: #${orderData.id}\nالاسم: ${name}\nالهاتف: ${phone}\nالعنوان: ${fullAddress}\n\nالمنتجات:\n${summary}\n\nالإجمالي: ${money(total)}\nالدفع: عند الاستلام`
    );

    سلة التسوق = [];
    window.customerMapUrl = '';
    إذا كان نوع الدالة render هو 'function'، فسيتم استدعاء الدالة render().

    document.getElementById('modalContent').innerHTML = `
      <h2>تم استلام الأسئلة الفعالة ✅</h2>
      <p class="muted">رقم الطلب: <b>#${escapeHtml(orderData.id)}</b>. تم حفظه وتفاصيله في قاعدة البيانات.</p>
    `;

    إذا كان (واتساب) {
      window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank', 'noopener');
    }
    انتظر تحديث لوحة التحكم إذا كانت مفتوحة.
  };

  async function refreshAdminIfOpen() {
    إذا كان عنصر `admin` يحتوي على فئة `show`، فسيتم تنفيذ ما يلي:
      انتظر تحديث لوحة التحكم ();
    }
  }

  window.addProduct = async function () {
    const name = document.getElementById('newName')?.value.trim();
    const categoryName = document.getElementById('newCat')?.value;
    const price = Number(document.getElementById('newPrice')?.value);
    const imageUrl = document.getElementById('newImageUrl')?.value.trim() || null;

    إذا لم يكن هناك اسم أو لم يكن السعر عددًا محدودًا أو كان السعر أقل من أو يساوي صفرًا،
      تنبيه('يرجى كتابة اسم المنتج والسعر أكبر من صفر.');
      يعود؛
    }

    let categoryId = categoriesNameMap[categoryName] || null;

    إذا لم يكن (categoryId && categoryName) {
      const { data: newCategory, error: categoryError } = await db
        .from('categories')
        .insert({ name: categoryName })
        .يختار()
        .أعزب()؛

      إذا كان هناك خطأ في الفئة {
        تنبيه('تعذر إضافة القسم:' +categorError.message);
        يعود؛
      }

      categoryId = newCategory.id;
      categoriesMap[categoryId] = categoryName;
      categoriesNameMap[categoryName] = categoryId;
    }

    const { error } = await db.from('products').insert({
      اسم،
      الوصف: اسم الفئة || '',
      category_id: categoryId,
      سعر،
      image_url: imageUrl,
      المخزون: 50
      نشط: صحيح
    });

    إذا حدث خطأ {
      تنبيه('تعذرت إضافة المنتج:' + error.message);
      يعود؛
    }

    document.getElementById('newName').value = '';
    document.getElementById('newPrice').value = '';
    إذا كان العنصر الذي يحمل المعرّف 'newImageUrl' موجودًا في المستند {
      document.getElementById('newImageUrl').value = '';
    }

    انتظر تحميل المنتجات();
    انتظر تحديث لوحة التحكم ();
    تنبيه('تم حفظ المنتج الفعال.');
  };
})();
