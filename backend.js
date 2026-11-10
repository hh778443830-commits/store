<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>متجر شُعيبيّه | للتسوق والتفصيل</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #e11d48;
            --primary-light: #ffe4e6;
            --primary-grad: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);
            --whatsapp: #22c55e;
            --dark: #0f172a;
            --bg-body: #f1f5f9;
            --bg-white: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --gold: #f59e0b;
            --blue: #2563eb;
            --purple: #7c3aed;
            --shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Tajawal', sans-serif;
            -webkit-tap-highlight-color: transparent;
            outline: none;
        }

        body {
            background-color: var(--bg-body);
            color: var(--text-main);
            padding-bottom: 75px;
            overflow-x: hidden;
        }

        .svg-icon {
            width: 20px;
            height: 20px;
            stroke: currentColor;
            stroke-width: 1.8;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
            flex-shrink: 0;
        }

        .container {
            max-width: 550px;
            margin: 0 auto;
            background-color: var(--bg-white);
            min-height: 100vh;
            box-shadow: 0 0 30px rgba(0,0,0,0.06);
        }

        @media (min-width: 768px) {
            .container { max-width: 1240px; }
        }

        /* شريط الإعلان العلوي */
        .top-announcement {
            background-color: var(--dark);
            color: #ffffff;
            font-size: 0.82rem;
            font-weight: 700;
            padding: 9px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .top-announcement .svg-icon {
            width: 16px;
            height: 16px;
            stroke: var(--gold);
            fill: var(--gold);
        }

        /* الهيدر وخانة البحث الموحدة */
        .main-header {
            background: var(--bg-white);
            padding: 14px 16px 12px;
            position: sticky;
            top: 0;
            z-index: 90;
            border-bottom: 1px solid var(--border);
        }
        .header-top-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }
        .brand-logo {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 1.6rem;
            font-weight: 900;
            color: var(--primary);
            cursor: pointer;
        }
        .brand-logo-icon {
            width: 36px;
            height: 36px;
            background: var(--primary-light);
            color: var(--primary);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .header-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .icon-btn {
            position: relative;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--border);
            background: var(--bg-white);
            color: var(--text-main);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.2s;
        }
        .icon-btn:hover {
            border-color: var(--primary);
            color: var(--primary);
        }
        .badge-count {
            position: absolute;
            top: -4px;
            right: -4px;
            background: var(--primary);
            color: #fff;
            font-size: 0.7rem;
            font-weight: 800;
            width: 19px;
            height: 19px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
        }

        .single-search-box {
            position: relative;
            width: 100%;
        }
        .single-search-box input {
            width: 100%;
            padding: 12px 42px 12px 16px;
            border-radius: 30px;
            border: 1.5px solid var(--border);
            background-color: #f8fafc;
            font-size: 0.9rem;
            color: var(--text-main);
            transition: 0.25s;
        }
        .single-search-box input:focus {
            background-color: #fff;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.1);
        }
        .single-search-box .search-svg {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
            pointer-events: none;
        }

        /* دوائر الأقسام مع ميزة القفل */
        .categories-wrapper {
            padding: 16px;
            border-bottom: 1px solid var(--border);
        }
        .categories-scroll {
            display: flex;
            gap: 16px;
            overflow-x: auto;
            padding-bottom: 4px;
            scrollbar-width: none;
        }
        .categories-scroll::-webkit-scrollbar { display: none; }
        .cat-circle-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;
            cursor: pointer;
            min-width: 70px;
            position: relative;
        }
        .cat-circle-icon {
            width: 62px;
            height: 62px;
            border-radius: 50%;
            background-color: #f1f5f9;
            color: #475569;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid transparent;
            transition: 0.25s;
            position: relative;
        }
        .cat-circle-item.active .cat-circle-icon {
            background-color: var(--primary-light);
            color: var(--primary);
            border-color: var(--primary);
            box-shadow: 0 6px 14px rgba(225, 29, 72, 0.15);
        }
        .cat-circle-item.locked .cat-circle-icon {
            background-color: #e2e8f0;
            color: #94a3b8;
            opacity: 0.75;
        }
        .lock-badge {
            position: absolute;
            bottom: -2px;
            left: -2px;
            background: var(--dark);
            color: #fff;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.65rem;
            border: 2px solid #fff;
        }
        .cat-circle-label {
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--text-muted);
            white-space: nowrap;
        }
        .cat-circle-item.active .cat-circle-label {
            color: var(--primary);
            font-weight: 800;
        }

        /* بانر التفصيل */
        .custom-tailor-banner {
            margin: 16px;
            background: var(--primary-grad);
            border-radius: 16px;
            padding: 18px 20px;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            box-shadow: 0 10px 25px rgba(225, 29, 72, 0.25);
        }
        .banner-text h2 {
            font-size: 1.1rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 4px;
        }
        .banner-text p { font-size: 0.8rem; opacity: 0.92; }
        .banner-btn {
            background-color: #ffffff;
            color: var(--primary);
            border: none;
            padding: 10px 18px;
            border-radius: 30px;
            font-weight: 800;
            font-size: 0.85rem;
            cursor: pointer;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* شبكة المنتجات بأسلوب SHEIN */
        .section-header { padding: 6px 16px 12px; }
        .section-title {
            font-size: 1.12rem;
            font-weight: 800;
            color: var(--dark);
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .products-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            padding: 0 16px 24px;
        }
        @media (min-width: 768px) {
            .products-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }
        .product-card {
            background: var(--bg-white);
            border-radius: 14px;
            border: 1px solid var(--border);
            overflow: hidden;
            box-shadow: var(--shadow);
            display: flex;
            flex-direction: column;
            cursor: pointer;
            transition: 0.2s;
            position: relative;
        }
        .product-card:hover { transform: translateY(-3px); }
        .card-img-box {
            position: relative;
            width: 100%;
            height: 200px;
            background: #f1f5f9;
            overflow: hidden;
            touch-action: pan-y;
        }
        .card-img-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.25s ease;
        }
        .video-indicator-badge {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background: rgba(15, 23, 42, 0.75);
            color: #fff;
            padding: 4px 8px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 4px;
            backdrop-filter: blur(4px);
        }
        .swipe-dots {
            position: absolute;
            bottom: 8px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 4px;
            background: rgba(0,0,0,0.3);
            padding: 3px 6px;
            border-radius: 10px;
        }
        .swipe-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: rgba(255,255,255,0.5);
        }
        .swipe-dot.active { background: #fff; width: 12px; border-radius: 4px; }

        .fav-btn {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(255,255,255,0.9);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #9ca3af;
            cursor: pointer;
            z-index: 5;
        }
        .fav-btn.active { color: var(--primary); }
        .fav-btn.active .svg-icon { fill: var(--primary); }

        .card-body {
            padding: 10px 12px 12px;
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        /* دوائر الألوان المصغرة تحت المنتج مثل شي إن */
        .shein-color-swatches {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 8px;
            overflow-x: auto;
            padding: 2px 0;
            scrollbar-width: none;
        }
        .shein-color-swatches::-webkit-scrollbar { display: none; }
        .swatch-thumb {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 2px solid #e2e8f0;
            overflow: hidden;
            flex-shrink: 0;
            cursor: pointer;
            transition: 0.2s;
        }
        .swatch-thumb.active {
            border-color: var(--primary);
            transform: scale(1.12);
            box-shadow: 0 0 0 2px var(--primary-light);
        }
        .swatch-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .card-title {
            font-size: 0.88rem;
            font-weight: 700;
            margin-bottom: 6px;
            color: var(--text-main);
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .card-price-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
        }
        .card-price {
            font-size: 1.05rem;
            font-weight: 900;
            color: var(--primary);
        }
        .old-price {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-decoration: line-through;
        }

        /* شاشة تفاصيل المنتج الفخمة (SHEIN Style) */
        .product-view-screen {
            position: fixed;
            inset: 0;
            background: var(--bg-white);
            z-index: 200;
            display: none;
            flex-direction: column;
            overflow-y: auto;
        }
        .product-view-screen.active { display: flex; }
        .pv-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(6px);
            z-index: 20;
        }
        .pv-back-btn {
            display: flex;
            align-items: center;
            gap: 4px;
            font-weight: 800;
            background: #f1f5f9;
            padding: 6px 12px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
        }
        .pv-media-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            height: 390px;
            background: #000;
            overflow: hidden;
        }
        .pv-media-container img, .pv-media-container video, .pv-media-container iframe {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border: none;
        }
        .pv-media-counter {
            position: absolute;
            bottom: 14px;
            left: 14px;
            background: rgba(0,0,0,0.6);
            color: #fff;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 20px;
        }
        .pv-video-toggle-btn {
            position: absolute;
            bottom: 14px;
            right: 14px;
            background: var(--primary);
            color: #fff;
            border: none;
            padding: 7px 14px;
            border-radius: 25px;
            font-weight: 800;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .pv-thumbs {
            display: flex;
            justify-content: center;
            gap: 10px;
            padding: 12px 16px;
            overflow-x: auto;
            background: #f8fafc;
        }
        .pv-thumb-item {
            width: 60px;
            height: 60px;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid transparent;
            cursor: pointer;
            opacity: 0.65;
            flex-shrink: 0;
            position: relative;
        }
        .pv-thumb-item.active {
            border-color: var(--primary);
            opacity: 1;
            transform: scale(1.05);
        }
        .pv-thumb-item img { width: 100%; height: 100%; object-fit: cover; }

        .pv-details-box {
            padding: 16px 20px 30px;
            max-width: 700px;
            margin: 0 auto;
            width: 100%;
            flex: 1;
        }
        .pv-price { font-size: 1.55rem; font-weight: 900; color: var(--primary); margin-bottom: 4px; }
        .pv-title { font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; }
        .pv-desc { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 14px; line-height: 1.6; }

        .pv-options { border-top: 1px solid var(--border); padding-top: 14px; margin-top: 10px; }
        .pv-option-label {
            font-size: 0.88rem;
            font-weight: 800;
            color: var(--text-main);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .pv-option-label span { color: var(--primary); }

        /* بطاقات الألوان بالصور داخل صفحة المنتج مثل شي إن */
        .shein-variant-cards {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 18px;
        }
        .variant-img-chip {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 5px 12px 5px 6px;
            border-radius: 30px;
            border: 2px solid var(--border);
            background: #fff;
            cursor: pointer;
            transition: 0.2s;
        }
        .variant-img-chip img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-fit: cover;
        }
        .variant-img-chip span {
            font-size: 0.82rem;
            font-weight: 800;
        }
        .variant-img-chip.selected {
            border-color: var(--primary);
            background: var(--primary-light);
            color: var(--primary);
        }

        .chips-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
        .option-chip {
            padding: 7px 16px;
            border-radius: 20px;
            border: 1.5px solid var(--border);
            background: #fff;
            font-size: 0.84rem;
            font-weight: 700;
            cursor: pointer;
        }
        .option-chip.selected {
            border-color: var(--primary);
            background: var(--primary-light);
            color: var(--primary);
        }

        .pv-bottom-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            padding: 14px 16px;
            background: #fff;
            border-top: 1px solid var(--border);
            position: sticky;
            bottom: 0;
            z-index: 20;
        }
        .btn-add-cart-dark {
            background: var(--dark);
            color: #fff;
            border: none;
            border-radius: 35px;
            padding: 13px;
            font-size: 0.92rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            cursor: pointer;
        }
        .btn-whatsapp-direct {
            background: var(--whatsapp);
            color: #fff;
            border: none;
            border-radius: 35px;
            padding: 13px;
            font-size: 0.92rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            cursor: pointer;
        }

        /* شريط التنقل السفلي */
        .bottom-nav {
            position: fixed;
            bottom: 0; left: 0; right: 0;
            background: var(--bg-white);
            border-top: 1px solid var(--border);
            display: flex;
            justify-content: space-around;
            padding: 8px 0 10px;
            z-index: 100;
        }
        .nav-tab {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            color: var(--text-muted);
            font-size: 0.75rem;
            font-weight: 700;
            background: none; border: none; cursor: pointer;
        }
        .nav-tab.active { color: var(--primary); }

        /* النوافذ المنبثقة */
        .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(4px);
            z-index: 300;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 14px;
        }
        .modal-overlay.active { display: flex; }
        .modal-card {
            background: #fff;
            border-radius: 20px;
            width: 100%;
            max-width: 540px;
            max-height: 92vh;
            overflow-y: auto;
            padding: 20px;
            box-shadow: 0 25px 60px rgba(0,0,0,0.3);
        }
        .modal-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 12px;
            margin-bottom: 16px;
            border-bottom: 1px solid var(--border);
        }
        .modal-head h3 { font-size: 1.12rem; font-weight: 900; color: var(--dark); display: flex; align-items: center; gap: 8px; }
        .close-btn {
            background: #f1f5f9;
            border: none;
            width: 34px;
            height: 34px;
            border-radius: 50%;
            font-weight: 800;
            cursor: pointer;
        }
        .form-field { margin-bottom: 12px; }
        .form-field label { display: block; font-size: 0.82rem; font-weight: 800; margin-bottom: 5px; color: var(--text-main); }
        .form-field input, .form-field select, .form-field textarea {
            width: 100%;
            padding: 11px 14px;
            border-radius: 10px;
            border: 1px solid var(--border);
            font-size: 0.9rem;
            background: #f8fafc;
        }
        .cart-row {
            display: flex; align-items: center; gap: 12px; padding: 12px; background: #f8fafc; border-radius: 12px; margin-bottom: 10px; border: 1px solid var(--border);
        }
        .cart-row img { width: 62px; height: 62px; border-radius: 10px; object-fit: cover; border: 1px solid var(--border); }
        .btn-primary-full {
            width: 100%; background: var(--primary); color: #fff; border: none; padding: 13px; border-radius: 12px; font-weight: 800; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .btn-del { background: #fee2e2; color: #dc2626; border: none; padding: 6px 12px; border-radius: 8px; font-weight: 800; font-size: 0.78rem; cursor: pointer; }
        .btn-act { background: #e0f2fe; color: #0284c7; border: none; padding: 6px 12px; border-radius: 8px; font-weight: 800; font-size: 0.78rem; cursor: pointer; }

        /* =========================================================
           نظام لوحة التحكم الذكية (وضع الجوال السريع vs وضع الكمبيوتر الشامل)
           ========================================================= */
        .erp-modal-card {
            max-width: 1220px !important;
            width: 100%;
            height: 92vh;
            padding: 0 !important;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        .erp-topbar {
            background: var(--dark);
            color: #fff;
            padding: 14px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
        }
        .erp-badge-mode {
            background: rgba(255,255,255,0.12);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.78rem;
            font-weight: 700;
            color: #38bdf8;
        }
        .erp-body {
            display: flex;
            flex: 1;
            overflow: hidden;
        }
        /* الشريط الجانبي للكمبيوتر */
        .erp-sidebar {
            width: 230px;
            background: #f8fafc;
            border-left: 1px solid var(--border);
            padding: 16px 12px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            overflow-y: auto;
        }
        .erp-nav-btn {
            padding: 11px 14px;
            border-radius: 10px;
            border: none;
            background: transparent;
            color: var(--text-main);
            font-weight: 800;
            font-size: 0.88rem;
            text-align: right;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: 0.2s;
        }
        .erp-nav-btn.active, .erp-nav-btn:hover {
            background: var(--primary);
            color: #fff;
        }
        .erp-main-content {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            background: #ffffff;
        }

        /* كروت الإحصائيات المتقدمة */
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
            gap: 14px;
            margin-bottom: 22px;
        }
        .kpi-card {
            background: #f8fafc;
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 15px;
            position: relative;
            overflow: hidden;
        }
        .kpi-card::before {
            content: "";
            position: absolute;
            right: 0; top: 0; bottom: 0;
            width: 5px;
            background: var(--primary);
        }
        .kpi-card.green::before { background: #10b981; }
        .kpi-card.blue::before { background: #3b82f6; }
        .kpi-card.gold::before { background: #f59e0b; }
        .kpi-card.purple::before { background: #8b5cf6; }
        .kpi-title { font-size: 0.78rem; font-weight: 800; color: var(--text-muted); margin-bottom: 6px; }
        .kpi-val { font-size: 1.3rem; font-weight: 900; color: var(--dark); }

        /* الرسوم البيانية الاحترافية */
        .charts-row {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 18px;
            margin-bottom: 24px;
        }
        @media (max-width: 900px) {
            .charts-row { grid-template-columns: 1fr; }
            .erp-body { flex-direction: column; }
            .erp-sidebar {
                width: 100%;
                flex-direction: row;
                overflow-x: auto;
                border-left: none;
                border-bottom: 1px solid var(--border);
                padding: 10px;
            }
            .erp-nav-btn { white-space: nowrap; padding: 8px 14px; }
        }
        .chart-card {
            background: #fff;
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 16px;
            box-shadow: var(--shadow);
        }
        .chart-card h4 { font-size: 0.95rem; font-weight: 800; margin-bottom: 14px; color: var(--dark); }

        /* أعمدة الرسم البياني */
        .bar-chart-box {
            display: flex;
            align-items: flex-end;
            justify-content: space-around;
            height: 180px;
            padding-top: 25px;
            border-bottom: 2px solid var(--border);
            gap: 12px;
        }
        .bar-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            height: 100%;
            justify-content: flex-end;
        }
        .bar-fill {
            width: 100%;
            max-width: 48px;
            border-radius: 8px 8px 0 0;
            transition: height 0.5s ease;
            position: relative;
            min-height: 6px;
        }
        .bar-val-top {
            font-size: 0.72rem;
            font-weight: 800;
            margin-bottom: 4px;
            color: var(--text-main);
        }
        .bar-label {
            font-size: 0.75rem;
            font-weight: 800;
            color: var(--text-muted);
            margin-top: 8px;
            text-align: center;
        }

        /* جداول الإدارة */
        .admin-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; margin-top: 10px; }
        .admin-table th { background: #f1f5f9; color: var(--text-main); padding: 11px 10px; font-weight: 800; border-bottom: 2px solid var(--border); text-align: right; white-space: nowrap; }
        .admin-table td { padding: 10px; border-bottom: 1px solid var(--border); text-align: right; vertical-align: middle; }

        .status-pill {
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.74rem;
            font-weight: 800;
            display: inline-block;
        }
        .status-pending { background: #fef3c7; color: #b45309; }
        .status-shipped { background: #dbeafe; color: #1d4ed8; }
        .status-completed { background: #d1fae5; color: #047857; }

        .admin-panel-section { display: none; }
        .admin-panel-section.active { display: block; }

        .variant-builder-row {
            display: grid;
            grid-template-columns: 1fr 1.6fr auto;
            gap: 8px;
            margin-bottom: 8px;
            align-items: center;
        }
    </style>
</head>
<body>

<div class="container">
    <!-- الشريط الإعلاني -->
    <div class="top-announcement">
        <svg class="svg-icon" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        <span>شحن سريع لجميع المحافظات وتفصيل حسب الطلب</span>
        <svg class="svg-icon" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    </div>

    <!-- الهيدر والبحث الموحد -->
    <header class="main-header">
        <div class="header-top-row">
            <div class="brand-logo" onclick="selectCategory('الكل')">
                <div class="brand-logo-icon">
                    <svg class="svg-icon" viewBox="0 0 24 24">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                </div>
                <span>شُعيبيّه</span>
            </div>

            <div class="header-actions">
                <button id="adminQuickBtn" class="icon-btn" style="display:none; border-color:var(--primary); color:var(--primary);" onclick="openAdminModal()" title="لوحة الإدارة">
                    <svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </button>

                <button class="icon-btn" onclick="openCartModal()">
                    <svg class="svg-icon" viewBox="0 0 24 24">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span class="badge-count" id="headerCartCount">0</span>
                </button>
            </div>
        </div>

        <!-- خانة البحث الموحدة (اكتب هارفكس هنا لتفتح الإدارة) -->
        <div class="single-search-box">
            <svg class="svg-icon search-svg" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="unifiedSearchInput" placeholder="ابحثي في الأقسام، المنتجات، أو اكتب هارفكس للإدارة...">
        </div>
    </header>

    <!-- دوائر الأقسام -->
    <section class="categories-wrapper">
        <div class="categories-scroll" id="categoriesContainer"></div>
    </section>

    <!-- بانر خدمة التفصيل -->
    <section class="custom-tailor-banner">
        <div class="banner-text">
            <h2>
                <svg class="svg-icon" style="stroke:#fde047;" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"></path>
                </svg>
                <span>خدمة التفصيل والطلب الخاص</span>
            </h2>
            <p>صممي طلبك على ذوقك وبالمقاسات والمواصفات المطلوبة</p>
        </div>
        <button class="banner-btn" onclick="openModal('tailorModal')">اطلبي الآن</button>
    </section>

    <!-- عرض المنتجات -->
    <div class="section-header">
        <h3 class="section-title">
            <svg class="svg-icon" viewBox="0 0 24 24">
                <path d="M12 2c1.5 3.5 4 6 4 10a4 4 0 1 1-8 0c0-4 2.5-6.5 4-10z"></path>
            </svg>
            <span id="currentSectionTitle">المنتجات الأكثر طلباً</span>
        </h3>
    </div>

    <section class="products-grid" id="productsGrid"></section>
</div>

<!-- شاشة تفاصيل المنتج الكاملة بأسلوب SHEIN -->
<div class="product-view-screen" id="productViewScreen">
    <div class="pv-header">
        <button class="pv-back-btn" onclick="closeProductView()">
            <svg class="svg-icon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>رجوع</span>
        </button>
        <strong id="pvHeaderCategory">تفاصيل المنتج</strong>
        <button class="icon-btn" onclick="openCartModal()">
            <svg class="svg-icon" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </button>
    </div>

    <!-- عارض الصور والفيديو مع دعم السحب باللمس -->
    <div class="pv-media-container" id="pvMediaBox">
        <img id="pvMainImage" src="" alt="">
        <div id="pvVideoHolder" style="display:none; width:100%; height:100%;"></div>
        <div class="pv-media-counter" id="pvMediaCounter">1 / 1</div>
        <button class="pv-video-toggle-btn" id="pvVideoBtn" style="display:none;" onclick="toggleProductVideo()">
            ▶ فيديو شرح المنتج
        </button>
    </div>

    <div class="pv-thumbs" id="pvThumbsContainer"></div>

    <div class="pv-details-box">
        <div class="pv-price" id="pvPrice">0 ريال</div>
        <h1 class="pv-title" id="pvTitle"></h1>
        <p class="pv-desc" id="pvDesc"></p>

        <div class="pv-options">
            <div class="pv-option-label">اللون / الشكل المختار: <span id="pvSelectedColorLabel"></span></div>
            <!-- شريط الألوان بالصور مثل شي إن -->
            <div class="shein-variant-cards" id="pvColorsRow"></div>

            <div class="pv-option-label">المقاس / الحجم: <span id="pvSelectedSizeLabel"></span></div>
            <div class="chips-row" id="pvSizesRow"></div>
        </div>
    </div>

    <div class="pv-bottom-actions">
        <button class="btn-add-cart-dark" onclick="addActiveProductToCart()">
            <svg class="svg-icon" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>إضافة للسلة</span>
        </button>
        <button class="btn-whatsapp-direct" onclick="orderActiveProductDirectWhatsApp()">
            <svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            <span>اطلبي هذا اللون واتساب</span>
        </button>
    </div>
</div>

<!-- شريط التنقل السفلي -->
<nav class="bottom-nav">
    <button class="nav-tab active" onclick="selectCategory('الكل')">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <span>الرئيسية</span>
    </button>
    <button class="nav-tab" onclick="selectCategory('المفروشات')">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
        <span>المفروشات</span>
    </button>
    <button class="nav-tab" onclick="selectCategory('ملابس')">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
        <span>ملابس</span>
    </button>
    <button class="nav-tab" onclick="showFavoritesOnly()">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <span>المفضلة</span>
    </button>
    <button class="nav-tab" onclick="openCartModal()">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <span>الحقيبة</span>
    </button>
</nav>

<!-- سلة المشتريات الفخمة -->
<div class="modal-overlay" id="cartModal">
    <div class="modal-card">
        <div class="modal-head">
            <h3>حقيبة التسوق وإتمام الطلب</h3>
            <button class="close-btn" onclick="closeModal('cartModal')">✕</button>
        </div>
        <div id="cartItemsList"></div>
        <div id="cartFormWrap">
            <div style="display:flex; justify-content:space-between; font-weight:900; font-size:1.1rem; padding:12px; background:#fff1f2; border-radius:10px; margin-bottom:14px;">
                <span>الإجمالي:</span>
                <span id="cartTotalVal" style="color:var(--primary);">0 ر.ي</span>
            </div>
            <div class="form-field"><label>الاسم الكامل *</label><input type="text" id="custName" placeholder="أدخلي اسمك الكامل"></div>
            <div class="form-field"><label>رقم الجوال *</label><input type="tel" id="custPhone" placeholder="777123456"></div>
            <div class="form-field"><label>العنوان بالتفصيل *</label><input type="text" id="custAddress" placeholder="المحافظة - المديرية - الحي"></div>
            <div class="form-field">
                <label>تحديد الموقع على الخريطة (GPS)</label>
                <div style="display:flex; gap:8px;">
                    <input type="text" id="custMapLink" placeholder="اضغطي زر تحديد الموقع..." readonly>
                    <button type="button" onclick="getGPSLocation()" style="padding:0 14px; border-radius:10px; border:1px solid var(--primary); background:var(--primary-light); color:var(--primary); font-weight:800; cursor:pointer;">موقعي</button>
                </div>
            </div>
            <button class="btn-primary-full" onclick="sendCartOrderWhatsApp()">تأكيد وإرسال الطلب بالصور عبر واتساب</button>
        </div>
    </div>
</div>

<!-- نافذة طلب التفصيل الخاص -->
<div class="modal-overlay" id="tailorModal">
    <div class="modal-card">
        <div class="modal-head">
            <h3>خدمة التفصيل والطلب الخاص</h3>
            <button class="close-btn" onclick="closeModal('tailorModal')">✕</button>
        </div>
        <div class="form-field"><label>نوع التفصيل المطلوب</label><input type="text" id="tailorType" placeholder="مثال: تفصيل طقم ستائر صالة أو فستان"></div>
        <div class="form-field"><label>المقاسات والمواصفات</label><textarea id="tailorDetails" rows="3" placeholder="اكتبي المقاسات والألوان المفضلة بالتفصيل..."></textarea></div>
        <button class="btn-primary-full" onclick="sendTailorWhatsApp()">إرسال طلب التفصيل عبر واتساب</button>
    </div>
</div>

<!-- نافذة تسجيل الدخول للإدارة -->
<div class="modal-overlay" id="loginModal">
    <div class="modal-card" style="max-width:390px;">
        <div class="modal-head">
            <h3>دخول منظومة الإدارة</h3>
            <button class="close-btn" onclick="closeModal('loginModal')">✕</button>
        </div>
        <div class="form-field"><label>اسم المستخدم</label><input type="text" id="loginUser" placeholder="admin"></div>
        <div class="form-field"><label>كلمة المرور</label><input type="password" id="loginPass" placeholder="123"></div>
        <button class="btn-primary-full" onclick="doLogin()">دخول لوحة التحكم</button>
    </div>
</div>

<!-- =========================================================================
     منظومة الإدارة الاحترافية الذكية (تتكيف للجوال وللكمبيوتر مع الصلاحيات)
     ========================================================================= -->
<div class="modal-overlay" id="adminModal">
    <div class="modal-card erp-modal-card">
        <!-- الشريط العلوي للوحة التحكم -->
        <div class="erp-topbar">
            <div style="display:flex; align-items:center; gap:10px;">
                <strong style="font-size:1.1rem;">إدارة متجر شُعيبيّه</strong>
                <span class="erp-badge-mode" id="adminRoleText">المدير العام</span>
                <span class="erp-badge-mode" id="deviceModeIndicator" style="color:#fde047;">وضع الجهاز</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
                <button onclick="toggleForceDesktopMode()" id="switchModeBtn" style="background:#334155; color:#fff; border:none; padding:6px 12px; border-radius:8px; font-size:0.78rem; font-weight:700; cursor:pointer;">تبديل وضع العرض (جوال/كمبيوتر)</button>
                <button class="btn-del" onclick="logoutUser()">تسجيل خروج</button>
                <button class="close-btn" style="background:#334155; color:#fff;" onclick="closeModal('adminModal')">✕</button>
            </div>
        </div>

        <div class="erp-body">
            <!-- القائمة الجانبية للتنقل بين أقسام الإدارة -->
            <div class="erp-sidebar" id="erpSidebarNav">
                <button class="erp-nav-btn" data-tab="tabQuickPos" onclick="switchAdminTab('tabQuickPos')">📱 إضافة طلب سريع (جوال)</button>
                <button class="erp-nav-btn" data-tab="tabDashboard" onclick="switchAdminTab('tabDashboard')">📊 الإحصائيات والرسوم البيانية</button>
                <button class="erp-nav-btn" data-tab="tabOrders" onclick="switchAdminTab('tabOrders')">📦 إدارة وتنفيذ الطلبات</button>
                <button class="erp-nav-btn" data-tab="tabProducts" onclick="switchAdminTab('tabProducts')">👗 المنتجات (نظام شي إن)</button>
                <button class="erp-nav-btn" data-tab="tabCategories" onclick="switchAdminTab('tabCategories')">🗂️ إدارة وقفل الأقسام</button>
                <button class="erp-nav-btn" data-tab="tabFinance" onclick="switchAdminTab('tabFinance')">💰 المحاسبة والمصاريف</button>
                <button class="erp-nav-btn" data-tab="tabStaff" onclick="switchAdminTab('tabStaff')">👥 الموظفون والصلاحيات</button>
            </div>

            <!-- محتوى لوحة التحكم -->
            <div class="erp-main-content">

                <!-- 1. قسم الجوال السريع: إضافة طلب مباشر + ملخص سريع -->
                <div class="admin-panel-section" id="tabQuickPos">
                    <div style="background:#fff1f2; border:1px solid #fecdd3; padding:14px; border-radius:14px; margin-bottom:16px;">
                        <h4 style="color:var(--primary); font-weight:900; margin-bottom:4px;">⚡ واجهة الجوال السريعة لإضافة ومتابعة الطلبات</h4>
                        <p style="font-size:0.8rem; color:var(--text-muted);">مخصصة لإدخال طلبات الزبائن السريعة من الجوال ومتابعة تجهيزها فوراً.</p>
                    </div>

                    <div style="background:#f8fafc; padding:16px; border-radius:14px; border:1px solid var(--border); margin-bottom:20px;">
                        <h4 style="margin-bottom:12px; font-weight:800;">+ تسجيل طلب جديد سريع للعميل</h4>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:10px; margin-bottom:12px;">
                            <input type="text" id="posCustName" placeholder="اسم العميل *" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <input type="tel" id="posCustPhone" placeholder="رقم الجوال *" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <input type="text" id="posCustAddr" placeholder="العنوان *" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <select id="posProdSelect" onchange="updatePosVariants()" style="padding:10px; border-radius:8px; border:1px solid var(--border);"></select>
                            <select id="posVariantSelect" style="padding:10px; border-radius:8px; border:1px solid var(--border);"></select>
                            <input type="number" id="posQty" value="1" min="1" placeholder="الكمية" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                        </div>
                        <button class="btn-primary-full" onclick="createQuickMobileOrder()">حفظ الطلب في النظام وتجهيزه</button>
                    </div>

                    <h4 style="font-weight:800; margin-bottom:8px;">أحدث الطلبات السريعة (تغيير الحالة بضغطة زر)</h4>
                    <div style="overflow-x:auto;">
                        <table class="admin-table">
                            <thead><tr><th>رقم الطلب</th><th>العميل</th><th>المنتجات</th><th>الإجمالي</th><th>الحالة</th><th>تحديث</th></tr></thead>
                            <tbody id="quickMobileOrdersBody"></tbody>
                        </table>
                    </div>
                </div>

                <!-- 2. قسم الكمبيوتر الشامل: الإحصائيات والرسوم البيانية الاحترافية -->
                <div class="admin-panel-section" id="tabDashboard">
                    <h3 style="margin-bottom:14px; font-weight:900;">التقرير الشامل لأداء المتجر والطلبات والأرباح</h3>
                    
                    <div class="kpi-grid">
                        <div class="kpi-card blue">
                            <div class="kpi-title">إجمالي الطلبات المستلمة</div>
                            <div class="kpi-val" id="kpiTotalOrders">0</div>
                        </div>
                        <div class="kpi-card gold">
                            <div class="kpi-title">طلبات قيد التجهيز</div>
                            <div class="kpi-val" id="kpiPendingOrders">0</div>
                        </div>
                        <div class="kpi-card purple">
                            <div class="kpi-title">طلبات تم شحنها</div>
                            <div class="kpi-val" id="kpiShippedOrders">0</div>
                        </div>
                        <div class="kpi-card green">
                            <div class="kpi-title">طلبات مكتملة (تمت)</div>
                            <div class="kpi-val" id="kpiCompletedOrders">0</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-title">عدد القطع المباعة</div>
                            <div class="kpi-val" id="kpiSoldItems">0 قطعة</div>
                        </div>
                        <div class="kpi-card blue">
                            <div class="kpi-title">إجمالي المبيعات</div>
                            <div class="kpi-val" id="kpiTotalSales">0 ر.ي</div>
                        </div>
                        <div class="kpi-card">
                            <div class="kpi-title">إجمالي المصاريف</div>
                            <div class="kpi-val" id="kpiTotalExpenses" style="color:#dc2626;">0 ر.ي</div>
                        </div>
                        <div class="kpi-card green">
                            <div class="kpi-title">صافي الأرباح الحقيقي</div>
                            <div class="kpi-val" id="kpiNetProfit" style="color:#059669;">0 ر.ي</div>
                        </div>
                    </div>

                    <!-- الرسوم البيانية الاحترافية -->
                    <div class="charts-row">
                        <div class="chart-card">
                            <h4>📈 الرسم البياني المالي (المبيعات مقابل التكلفة والمصاريف وصافي الربح)</h4>
                            <div class="bar-chart-box" id="financialBarChart"></div>
                        </div>
                        <div class="chart-card">
                            <h4>📦 تحليل حالات الطلبات (قيد التجهيز / مشحونة / مكتملة)</h4>
                            <div class="bar-chart-box" id="ordersStatusChart"></div>
                        </div>
                    </div>
                </div>

                <!-- 3. إدارة ومراجعة وتنفيذ الطلبات -->
                <div class="admin-panel-section" id="tabOrders">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:10px;">
                        <h3 style="font-weight:900;">سجل ومراجعة وتنفيذ الطلبات</h3>
                        <select id="filterOrderStatus" onchange="renderOrdersTable()" style="padding:8px 14px; border-radius:8px; border:1px solid var(--border); font-weight:700;">
                            <option value="الكل">جميع الطلبات</option>
                            <option value="قيد التجهيز">قيد التجهيز</option>
                            <option value="تم الشحن">تم الشحن</option>
                            <option value="مكتمل">مكتمل (تم التسليم)</option>
                        </select>
                    </div>
                    <div style="overflow-x:auto;">
                        <table class="admin-table">
                            <thead>
                                <tr>
                                    <th>رقم الطلب</th>
                                    <th>التاريخ</th>
                                    <th>العميل والجوال</th>
                                    <th>العنوان</th>
                                    <th>الأصناف والألوان المختارة</th>
                                    <th>الإجمالي</th>
                                    <th>الربح</th>
                                    <th>الحالة</th>
                                    <th>تغيير الحالة / إجراء</th>
                                </tr>
                            </thead>
                            <tbody id="fullOrdersTableBody"></tbody>
                        </table>
                    </div>
                </div>

                <!-- 4. إضافة وإدارة المنتجات بنظام SHEIN (تعدد ألوان بصورها + فيديو) -->
                <div class="admin-panel-section" id="tabProducts">
                    <div style="background:#f8fafc; padding:16px; border-radius:14px; margin-bottom:20px; border:1px solid var(--border);">
                        <h4 style="margin-bottom:12px; font-weight:900; color:var(--dark);">+ إضافة منتج احترافي (مع ألوان بصورها وفيديو مثل شي إن)</h4>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:10px; margin-bottom:10px;">
                            <input type="text" id="pName" placeholder="اسم المنتج *" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <select id="pCat" style="padding:10px; border-radius:8px; border:1px solid var(--border);"></select>
                            <input type="number" id="pBuyPrice" placeholder="سعر الشراء (التكلفة) *" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <input type="number" id="pSellPrice" placeholder="سعر البيع للعميل *" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                        </div>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:10px;">
                            <input type="url" id="pImg" placeholder="رابط الصورة الرئيسية للمنتج (URL) *" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <input type="url" id="pVideo" placeholder="رابط فيديو شرح المنتج (MP4 أو يوتيوب - اختياري)" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <input type="text" id="pSizes" placeholder="المقاسات مفصولة بفاصلة (مثال: S, M, L, XL)" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                        </div>
                        <textarea id="pDesc" rows="2" placeholder="وصف المنتج وخامته ومميزاته..." style="width:100%; padding:10px; border-radius:8px; border:1px solid var(--border); margin-bottom:12px;"></textarea>

                        <!-- بناء الألوان والأشكال مع صورة لكل لون -->
                        <div style="background:#fff; padding:12px; border-radius:10px; border:1px dashed var(--primary); margin-bottom:12px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                <strong style="font-size:0.85rem; color:var(--primary);">🎨 الألوان / الأشكال وصورة كل لون (تظهر تحت المنتج مثل شي إن):</strong>
                                <button type="button" onclick="addVariantInputRow()" class="btn-act">+ إضافة لون / شكل آخر</button>
                            </div>
                            <div id="variantsInputsContainer">
                                <div class="variant-builder-row">
                                    <input type="text" class="v-color-name" placeholder="اسم اللون/الشكل (مثال: أحمر ملكي)" style="padding:8px; border-radius:8px; border:1px solid var(--border);">
                                    <input type="url" class="v-color-img" placeholder="رابط صورة هذا اللون مباشرة (URL)" style="padding:8px; border-radius:8px; border:1px solid var(--border);">
                                    <button type="button" class="btn-del" onclick="this.parentElement.remove()">✕</button>
                                </div>
                            </div>
                        </div>

                        <button class="btn-primary-full" onclick="addProductFromAdmin()">+ حفظ ونشر المنتج في المتجر</button>
                    </div>

                    <h4 style="font-weight:800; margin-bottom:8px;">قائمة المنتجات المسجلة</h4>
                    <div style="overflow-x:auto;">
                        <table class="admin-table">
                            <thead><tr><th>الصورة</th><th>الاسم</th><th>القسم</th><th>الألوان المتوفرة</th><th>فيديو</th><th>الشراء</th><th>البيع</th><th>إجراء</th></tr></thead>
                            <tbody id="adminProductsList"></tbody>
                        </table>
                    </div>
                </div>

                <!-- 5. إدارة الأقسام (إضافة أقسام جديدة كالإلكترونيات + قفل وفتح الأقسام) -->
                <div class="admin-panel-section" id="tabCategories">
                    <div style="background:#f8fafc; padding:16px; border-radius:14px; margin-bottom:20px; border:1px solid var(--border);">
                        <h4 style="margin-bottom:12px; font-weight:800;">+ إضافة قسم جديد للمتجر (مثل: إلكترونيات، عطور، هدايا...)</h4>
                        <div style="display:flex; gap:10px; flex-wrap:wrap;">
                            <input type="text" id="newCatName" placeholder="اسم القسم الجديد (مثال: إلكترونيات)" style="flex:2; padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <select id="newCatIcon" style="flex:1; padding:10px; border-radius:8px; border:1px solid var(--border);">
                                <option value="electronics">📱 أيقونة إلكترونيات وأجهزة</option>
                                <option value="fashion">👗 أيقونة أزياء وملابس</option>
                                <option value="home">🏠 أيقونة مفروشات ومنزل</option>
                                <option value="beauty">✨ أيقونة تجميل وعناية</option>
                                <option value="spices">🌿 أيقونة بهارات وأغذية</option>
                                <option value="star">⭐ أيقونة عامة مميزة</option>
                            </select>
                            <button onclick="addNewCategoryAdmin()" style="padding:10px 22px; background:var(--primary); color:#fff; border:none; border-radius:8px; font-weight:800; cursor:pointer;">+ إضافة القسم</button>
                        </div>
                    </div>

                    <h4 style="font-weight:800; margin-bottom:8px;">الأقسام الحالية (يمكنك قفل أي قسم ليظهر للعميل "مقفل 🔒")</h4>
                    <table class="admin-table">
                        <thead><tr><th>اسم القسم</th><th>حالة القسم للعملاء</th><th>قفل / فتح القسم</th><th>حذف</th></tr></thead>
                        <tbody id="adminCategoriesTable"></tbody>
                    </table>
                </div>

                <!-- 6. المحاسبة والمصاريف التشغيلية -->
                <div class="admin-panel-section" id="tabFinance">
                    <div style="background:#f8fafc; padding:16px; border-radius:14px; margin-bottom:20px; border:1px solid var(--border);">
                        <h4 style="margin-bottom:12px; font-weight:800;">تسجيل مصروف تشغيلي جديد (إيجار، شحن، كهرباء، رواتب...)</h4>
                        <div style="display:flex; gap:10px; flex-wrap:wrap;">
                            <input type="text" id="expReason" placeholder="بيان المصروف بالتفصيل" style="flex:2; padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <input type="number" id="expAmount" placeholder="المبلغ (ر.ي)" style="flex:1; padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <button onclick="addExpenseRecord()" style="padding:10px 20px; background:var(--dark); color:#fff; border:none; border-radius:8px; font-weight:800; cursor:pointer;">+ تسجيل المصروف</button>
                        </div>
                    </div>

                    <h4 style="font-weight:800; margin-bottom:8px;">دفتر المصاريف المسجلة</h4>
                    <table class="admin-table">
                        <thead><tr><th>التاريخ</th><th>البيان / السبب</th><th>المبلغ</th><th>إجراء</th></tr></thead>
                        <tbody id="expensesTableBody"></tbody>
                    </table>
                </div>

                <!-- 7. إدارة الموظفين وتحديد الأدوار والصلاحيات -->
                <div class="admin-panel-section" id="tabStaff">
                    <div style="background:#f8fafc; padding:16px; border-radius:14px; margin-bottom:20px; border:1px solid var(--border);">
                        <h4 style="margin-bottom:12px; font-weight:800;">+ تعيين موظف جديد وتخصيص صلاحياته</h4>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap:10px; margin-bottom:12px;">
                            <input type="text" id="stUser" placeholder="اسم المستخدم للدخول" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <input type="text" id="stPass" placeholder="كلمة المرور" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                            <select id="stRole" onchange="toggleStaffCategorySelect()" style="padding:10px; border-radius:8px; border:1px solid var(--border);">
                                <option value="orders">📦 مراجع ومنفذ طلبات</option>
                                <option value="accountant">💰 محاسب مالي وتقارير</option>
                                <option value="category_staff">🏷️ مسؤول منتجات قسم محدد</option>
                                <option value="admin">👑 مدير شامل</option>
                            </select>
                            <select id="stCat" style="padding:10px; border-radius:8px; border:1px solid var(--border); display:none;"></select>
                        </div>
                        <button onclick="addStaffMember()" style="padding:10px 22px; background:var(--dark); color:#fff; border:none; border-radius:8px; font-weight:800; cursor:pointer;">+ حفظ وتعيين الموظف</button>
                    </div>

                    <h4 style="font-weight:800; margin-bottom:8px;">قائمة الموظفين وصلاحياتهم</h4>
                    <table class="admin-table">
                        <thead><tr><th>اسم المستخدم</th><th>كلمة المرور</th><th>الدور الوظيفي</th><th>القسم المخصص</th><th>إجراء</th></tr></thead>
                        <tbody id="staffTableBody"></tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</div>

<script>
    const WHATSAPP_NUMBER = "967776371235";

    const ICONS_LIBRARY = {
        star: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z"></path></svg>`,
        home: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>`,
        fashion: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>`,
        kitchen: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M3 6h18"></path><path d="M5 6v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6"></path><path d="M10 3h4"></path></svg>`,
        beauty: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
        spices: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        electronics: `<svg class="svg-icon" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`
    };

    const DEFAULT_CATEGORIES = [
        { name: "الكل", iconKey: "star", locked: false },
        { name: "المفروشات", iconKey: "home", locked: false },
        { name: "ملابس", iconKey: "fashion", locked: false },
        { name: "إلكترونيات", iconKey: "electronics", locked: false },
        { name: "أدوات منزلية", iconKey: "kitchen", locked: false },
        { name: "تجميل", iconKey: "beauty", locked: false },
        { name: "بهارات", iconKey: "spices", locked: false }
    ];

    const INITIAL_PRODUCTS = [
        {
            id: 1,
            name: "ستارة تركية فاخرة مطرزة ملكي",
            category: "المفروشات",
            buyPrice: 11000,
            price: 15000,
            oldPrice: 21000,
            desc: "خامة تركية أصلية ثقيلة مع تطريز بارز، متوفرة بعدة ألوان ملكية تناسب الصالات والمجالس.",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            variants: [
                { color: "بيج ملكي", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80" },
                { color: "رمادي مودرن", img: "https://images.unsplash.com/photo-1540518614846-7ede433c4efb?auto=format&fit=crop&w=700&q=80" },
                { color: "عنابي فخم", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80" }
            ],
            sizes: ["مترين × 2.5", "3 متر × 2.5"]
        },
        {
            id: 2,
            name: "طقم مفارش سرير فندقي قطن 100%",
            category: "المفروشات",
            buyPrice: 14000,
            price: 19500,
            oldPrice: 25000,
            desc: "طقم سرير مزدوج 6 قطع ناعم جداً ومريح للنوم مع ثبات عالي للألوان.",
            image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
            videoUrl: "",
            variants: [
                { color: "أبيض فندقي", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80" },
                { color: "وردي ناعم", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=700&q=80" }
            ],
            sizes: ["نفرين (كينج)", "نفرونص"]
        }
    ];

    let categories = JSON.parse(localStorage.getItem("sh_v3_cats")) || DEFAULT_CATEGORIES;
    let products = JSON.parse(localStorage.getItem("sh_v3_products")) || INITIAL_PRODUCTS;
    let cart = JSON.parse(localStorage.getItem("sh_v3_cart")) || [];
    let favorites = JSON.parse(localStorage.getItem("sh_v3_favs")) || [];
    let staffList = JSON.parse(localStorage.getItem("sh_v3_staff")) || [];
    let expensesList = JSON.parse(localStorage.getItem("sh_v3_expenses")) || [];
    let ordersList = JSON.parse(localStorage.getItem("sh_v3_orders")) || [];

    let activeCategory = "الكل";
    let searchQuery = "";
    let currentOpenedProduct = null;
    let selectedVariant = null;
    let selectedSize = "";
    let isShowingVideo = false;
    let loggedInUser = null;
    let forceDesktopAdmin = false;

    function saveState() {
        localStorage.setItem("sh_v3_cats", JSON.stringify(categories));
        localStorage.setItem("sh_v3_products", JSON.stringify(products));
        localStorage.setItem("sh_v3_cart", JSON.stringify(cart));
        localStorage.setItem("sh_v3_favs", JSON.stringify(favorites));
        localStorage.setItem("sh_v3_staff", JSON.stringify(staffList));
        localStorage.setItem("sh_v3_expenses", JSON.stringify(expensesList));
        localStorage.setItem("sh_v3_orders", JSON.stringify(ordersList));
        document.getElementById("headerCartCount").textContent = cart.reduce((s, i) => s + i.qty, 0);
    }

    window.addEventListener("DOMContentLoaded", () => {
        renderCategories();
        renderProducts();
        saveState();
        setupProductMediaSwipe();

        document.getElementById("unifiedSearchInput").addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (val === "هارفكس") {
                e.target.value = "";
                searchQuery = "";
                renderProducts();
                if (loggedInUser) openAdminModal();
                else openModal("loginModal");
                return;
            }
            searchQuery = val;
            renderProducts();
        });
    });

    /* =========================================================
       عرض الأقسام مع دعم القفل
       ========================================================= */
    function renderCategories() {
        const container = document.getElementById("categoriesContainer");
        container.innerHTML = categories.map(c => {
            const svg = ICONS_LIBRARY[c.iconKey] || ICONS_LIBRARY.star;
            return `
            <div class="cat-circle-item ${c.name === activeCategory ? 'active' : ''} ${c.locked ? 'locked' : ''}" onclick="selectCategory('${c.name}')">
                <div class="cat-circle-icon">
                    ${svg}
                    ${c.locked ? `<span class="lock-badge">🔒</span>` : ''}
                </div>
                <span class="cat-circle-label">${c.name} ${c.locked ? '(مقفل)' : ''}</span>
            </div>
            `;
        }).join("");
    }

    function selectCategory(catName) {
        const catObj = categories.find(c => c.name === catName);
        if (catObj && catObj.locked) {
            alert(`عذراً، قسم "${catName}" مقفل حالياً للصيانة أو تحديث البضاعة. سيتوفر قريباً!`);
            return;
        }
        activeCategory = catName;
        document.getElementById("currentSectionTitle").textContent = catName === "الكل" ? "المنتجات الأكثر طلباً" : `قسم ${catName}`;
        renderCategories();
        renderProducts();
    }

    function showFavoritesOnly() {
        activeCategory = "المفضلة";
        document.getElementById("currentSectionTitle").textContent = "منتجاتك المفضلة";
        renderCategories();
        renderProducts();
    }

    function toggleFav(e, prodId) {
        e.stopPropagation();
        if (favorites.includes(prodId)) favorites = favorites.filter(id => id !== prodId);
        else favorites.push(prodId);
        saveState();
        renderProducts();
    }

    /* =========================================================
       عرض المنتجات بأسلوب SHEIN (صور مصغرة للألوان تحت المنتج + السحب)
       ========================================================= */
    function renderProducts() {
        const grid = document.getElementById("productsGrid");
        const lockedCatNames = categories.filter(c => c.locked).map(c => c.name);

        const filtered = products.filter(p => {
            if (lockedCatNames.includes(p.category)) return false;
            if (activeCategory === "المفضلة") return favorites.includes(p.id);
            const matchCat = activeCategory === "الكل" || p.category === activeCategory;
            const matchSearch = p.name.includes(searchQuery) || p.category.includes(searchQuery);
            return matchCat && matchSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted); font-weight:700;">لا توجد منتجات متاحة في هذا القسم حالياً.</div>`;
            return;
        }

        grid.innerHTML = filtered.map(p => {
            const isFav = favorites.includes(p.id);
            const variants = p.variants?.length ? p.variants : [{ color: "الافتراضي", img: p.image }];

            const swatchesHtml = variants.map((v, vIdx) => `
                <div class="swatch-thumb ${vIdx === 0 ? 'active' : ''}" 
                     onclick="previewCardVariant(event, ${p.id}, '${v.img}', '${v.color}', this)" 
                     title="${v.color}">
                    <img src="${v.img}" alt="${v.color}">
                </div>
            `).join("");

            const dotsHtml = variants.length > 1 ? `
                <div class="swipe-dots" id="dots-${p.id}">
                    ${variants.map((_, idx) => `<span class="swipe-dot ${idx === 0 ? 'active' : ''}"></span>`).join("")}
                </div>
            ` : '';

            return `
            <div class="product-card" data-pid="${p.id}" data-vindex="0" onclick="openProductView(${p.id})">
                <div class="card-img-box" 
                     ontouchstart="handleCardTouchStart(event, ${p.id})" 
                     ontouchend="handleCardTouchEnd(event, ${p.id})">
                    <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(event, ${p.id})">
                        <svg class="svg-icon" style="width:18px;height:18px;" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    ${p.videoUrl ? `<div class="video-indicator-badge">▶ فيديو</div>` : ''}
                    <img id="card-img-${p.id}" src="${variants[0].img}" alt="${p.name}">
                    ${dotsHtml}
                </div>
                <div class="card-body">
                    <div class="shein-color-swatches" onclick="event.stopPropagation()">
                        ${swatchesHtml}
                    </div>
                    <div class="card-title">${p.name}</div>
                    <div class="card-price-row">
                        <span class="card-price">${p.price.toLocaleString()} ر.ي</span>
                        ${p.oldPrice ? `<span class="old-price">${p.oldPrice.toLocaleString()}</span>` : ''}
                    </div>
                </div>
            </div>
            `;
        }).join("");
    }

    // تغيير صورة المنتج مباشرة عند الضغط على دائرة اللون تحت المنتج (مثل شي إن)
    function previewCardVariant(e, prodId, imgUrl, colorName, thumbEl) {
        e.stopPropagation();
        const imgEl = document.getElementById(`card-img-${prodId}`);
        if (imgEl) imgEl.src = imgUrl;

        const card = thumbEl.closest(".product-card");
        const allThumbs = thumbEl.parentElement.querySelectorAll(".swatch-thumb");
        allThumbs.forEach((t, idx) => {
            t.classList.remove("active");
            if (t === thumbEl && card) card.setAttribute("data-vindex", idx);
        });
        thumbEl.classList.add("active");

        const dotsWrap = document.getElementById(`dots-${prodId}`);
        if (dotsWrap && card) {
            const activeIdx = parseInt(card.getAttribute("data-vindex") || "0");
            dotsWrap.querySelectorAll(".swipe-dot").forEach((d, i) => d.classList.toggle("active", i === activeIdx));
        }
    }

    // دعم السحب يميناً ويساراً على بطاقة المنتج من الخارج لتقليب صور الألوان مثل شي إن
    let touchStartX = 0;
    function handleCardTouchStart(e, prodId) {
        touchStartX = e.changedTouches[0].screenX;
    }
    function handleCardTouchEnd(e, prodId) {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) < 35) return; // لمسة عادية وليست سحب
        e.stopPropagation();
        const p = products.find(x => x.id === prodId);
        if (!p || !p.variants || p.variants.length <= 1) return;

        const card = document.querySelector(`.product-card[data-pid="${prodId}"]`);
        let curIdx = parseInt(card.getAttribute("data-vindex") || "0");
        if (diff > 0) curIdx = (curIdx + 1) % p.variants.length;
        else curIdx = (curIdx - 1 + p.variants.length) % p.variants.length;

        const thumbs = card.querySelectorAll(".swatch-thumb");
        if (thumbs[curIdx]) thumbs[curIdx].click();
    }

    /* =========================================================
       شاشة تفاصيل المنتج الكاملة (الفيديو + الألوان بصورها + السحب)
       ========================================================= */
    function openProductView(id) {
        const p = products.find(item => item.id === id);
        if (!p) return;
        currentOpenedProduct = p;
        isShowingVideo = false;

        const variants = p.variants?.length ? p.variants : [{ color: "الافتراضي", img: p.image }];
        // إذا كان العميل قد اختار لوناً في البطاقة الخارجية نفتح عليه مباشرة
        const card = document.querySelector(`.product-card[data-pid="${id}"]`);
        const preSelectedIdx = card ? parseInt(card.getAttribute("data-vindex") || "0") : 0;

        selectedVariant = variants[preSelectedIdx] || variants[0];
        selectedSize = p.sizes?.[0] || "قياس موحد";

        document.getElementById("pvHeaderCategory").textContent = p.category;
        document.getElementById("pvPrice").textContent = p.price.toLocaleString() + " ريال";
        document.getElementById("pvTitle").textContent = p.name;
        document.getElementById("pvDesc").textContent = p.desc || "";

        const videoBtn = document.getElementById("pvVideoBtn");
        if (p.videoUrl && p.videoUrl.trim() !== "") {
            videoBtn.style.display = "flex";
            videoBtn.innerHTML = "▶ فيديو شرح المنتج";
        } else {
            videoBtn.style.display = "none";
        }

        renderProductViewMediaAndVariants();
        renderSizeChips("pvSizesRow", p.sizes || ["قياس موحد"], selectedSize);

        document.getElementById("productViewScreen").classList.add("active");
    }

    function renderProductViewMediaAndVariants() {
        const p = currentOpenedProduct;
        const variants = p.variants?.length ? p.variants : [{ color: "الافتراضي", img: p.image }];
        const currentIdx = variants.findIndex(v => v.color === selectedVariant.color);

        const imgEl = document.getElementById("pvMainImage");
        const vidHolder = document.getElementById("pvVideoHolder");

        if (!isShowingVideo) {
            vidHolder.style.display = "none";
            vidHolder.innerHTML = "";
            imgEl.style.display = "block";
            imgEl.src = selectedVariant.img;
        }

        document.getElementById("pvMediaCounter").textContent = `${(currentIdx >= 0 ? currentIdx : 0) + 1} / ${variants.length}`;
        document.getElementById("pvSelectedColorLabel").textContent = selectedVariant.color;

        // الصور المصغرة تحت الصورة الكبيرة
        document.getElementById("pvThumbsContainer").innerHTML = variants.map((v, idx) => `
            <div class="pv-thumb-item ${v.color === selectedVariant.color ? 'active' : ''}" onclick="selectVariantByIndex(${idx})">
                <img src="${v.img}" alt="${v.color}">
            </div>
        `).join("");

        // أزرار اختيار اللون بالصورة والاسم مثل شي إن
        document.getElementById("pvColorsRow").innerHTML = variants.map((v, idx) => `
            <div class="variant-img-chip ${v.color === selectedVariant.color ? 'selected' : ''}" onclick="selectVariantByIndex(${idx})">
                <img src="${v.img}" alt="${v.color}">
                <span>${v.color}</span>
            </div>
        `).join("");
    }

    function selectVariantByIndex(idx) {
        const variants = currentOpenedProduct.variants?.length ? currentOpenedProduct.variants : [{ color: "الافتراضي", img: currentOpenedProduct.image }];
        selectedVariant = variants[idx] || variants[0];
        isShowingVideo = false;
        document.getElementById("pvVideoBtn").innerHTML = "▶ فيديو شرح المنتج";
        renderProductViewMediaAndVariants();
    }

    function toggleProductVideo() {
        if (!currentOpenedProduct || !currentOpenedProduct.videoUrl) return;
        const imgEl = document.getElementById("pvMainImage");
        const vidHolder = document.getElementById("pvVideoHolder");
        const btn = document.getElementById("pvVideoBtn");

        isShowingVideo = !isShowingVideo;
        if (isShowingVideo) {
            imgEl.style.display = "none";
            vidHolder.style.display = "block";
            const url = currentOpenedProduct.videoUrl.trim();
            if (url.includes("youtube.com") || url.includes("youtu.be")) {
                const vidId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
                vidHolder.innerHTML = `<iframe src="https://www.youtube.com/embed/${vidId}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
            } else {
                vidHolder.innerHTML = `<video src="${url}" controls autoplay playsinline></video>`;
            }
            btn.innerHTML = "🖼️ العودة لصور الألوان";
        } else {
            renderProductViewMediaAndVariants();
            btn.innerHTML = "▶ فيديو شرح المنتج";
        }
    }

    // السحب باللمس على الصورة الكبيرة في شاشة المنتج لتغيير اللون والصورة مثل شي إن
    function setupProductMediaSwipe() {
        const box = document.getElementById("pvMediaBox");
        let startX = 0;
        box.addEventListener("touchstart", e => { startX = e.changedTouches[0].screenX; }, { passive: true });
        box.addEventListener("touchend", e => {
            if (!currentOpenedProduct || isShowingVideo) return;
            const diff = e.changedTouches[0].screenX - startX;
            if (Math.abs(diff) < 40) return;
            const variants = currentOpenedProduct.variants?.length ? currentOpenedProduct.variants : [{ color: "الافتراضي", img: currentOpenedProduct.image }];
            let idx = variants.findIndex(v => v.color === selectedVariant.color);
            if (diff > 0) idx = (idx + 1) % variants.length;
            else idx = (idx - 1 + variants.length) % variants.length;
            selectVariantByIndex(idx);
        }, { passive: true });
    }

    function renderSizeChips(containerId, list, activeVal) {
        const wrap = document.getElementById(containerId);
        document.getElementById("pvSelectedSizeLabel").textContent = activeVal;
        wrap.innerHTML = "";
        list.forEach(val => {
            const btn = document.createElement("button");
            btn.className = "option-chip " + (val === activeVal ? "selected" : "");
            btn.textContent = val;
            btn.onclick = () => {
                selectedSize = val;
                renderSizeChips(containerId, list, val);
            };
            wrap.appendChild(btn);
        });
    }

    function closeProductView() {
        isShowingVideo = false;
        document.getElementById("pvVideoHolder").innerHTML = "";
        document.getElementById("productViewScreen").classList.remove("active");
    }

    /* =========================================================
       السلة والطلب عبر واتساب مع إرسال صورة اللون المختار بالضبط
       ========================================================= */
    function addActiveProductToCart() {
        if (!currentOpenedProduct || !selectedVariant) return;
        const exist = cart.find(i => i.id === currentOpenedProduct.id && i.color === selectedVariant.color && i.size === selectedSize);
        if (exist) {
            exist.qty += 1;
        } else {
            cart.push({
                id: currentOpenedProduct.id,
                name: currentOpenedProduct.name,
                price: currentOpenedProduct.price,
                buyPrice: currentOpenedProduct.buyPrice || Math.round(currentOpenedProduct.price * 0.7),
                color: selectedVariant.color,
                image: selectedVariant.img,
                size: selectedSize,
                qty: 1
            });
        }
        saveState();
        closeProductView();
        openCartModal();
    }

    function orderActiveProductDirectWhatsApp() {
        if (!currentOpenedProduct || !selectedVariant) return;
        const orderId = "ORD-" + Math.floor(10000 + Math.random() * 90000);

        // حفظ الطلب في النظام كـ "قيد التجهيز"
        ordersList.unshift({
            id: orderId,
            date: new Date().toLocaleDateString("ar-YE"),
            customerName: "طلب مباشر واتساب",
            phone: "عبر واتساب",
            address: "يحدد في المحادثة",
            status: "قيد التجهيز",
            items: [{
                name: currentOpenedProduct.name,
                color: selectedVariant.color,
                size: selectedSize,
                qty: 1,
                price: currentOpenedProduct.price,
                buyPrice: currentOpenedProduct.buyPrice || Math.round(currentOpenedProduct.price * 0.7),
                image: selectedVariant.img
            }],
            totalSell: currentOpenedProduct.price,
            totalBuy: currentOpenedProduct.buyPrice || Math.round(currentOpenedProduct.price * 0.7)
        });
        saveState();

        const msg = `*طلب مباشر - متجر شُعيبيّه* 🛍️\n` +
                    `*رقم الطلب:* ${orderId}\n` +
                    `*المنتج:* ${currentOpenedProduct.name}\n` +
                    `*اللون / الشكل المختار:* ${selectedVariant.color}\n` +
                    `*المقاس:* ${selectedSize}\n` +
                    `*السعر:* ${currentOpenedProduct.price.toLocaleString()} ر.ي\n` +
                    `*صورة اللون المختار:* ${selectedVariant.img}`;

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    }

    function openCartModal() {
        const listEl = document.getElementById("cartItemsList");
        const formWrap = document.getElementById("cartFormWrap");

        if (cart.length === 0) {
            listEl.innerHTML = `<p style="text-align:center; padding:30px; color:var(--text-muted); font-weight:700;">حقيبة التسوق فارغة حالياً.</p>`;
            formWrap.style.display = "none";
        } else {
            formWrap.style.display = "block";
            let total = 0;
            listEl.innerHTML = cart.map((item, idx) => {
                total += item.price * item.qty;
                return `
                <div class="cart-row">
                    <img src="${item.image}" alt="${item.color}">
                    <div style="flex:1;">
                        <div style="font-weight:800; font-size:0.9rem;">${item.name}</div>
                        <div style="font-size:0.78rem; color:var(--text-muted);">اللون: <strong>${item.color}</strong> | المقاس: ${item.size} × ${item.qty}</div>
                        <div style="color:var(--primary); font-weight:900;">${(item.price * item.qty).toLocaleString()} ر.ي</div>
                    </div>
                    <button class="btn-del" onclick="removeFromCart(${idx})">حذف</button>
                </div>
                `;
            }).join("");
            document.getElementById("cartTotalVal").textContent = total.toLocaleString() + " ر.ي";
        }
        openModal("cartModal");
    }

    function removeFromCart(idx) { cart.splice(idx, 1); saveState(); openCartModal(); }

    function getGPSLocation() {
        const input = document.getElementById("custMapLink");
        if (!navigator.geolocation) return alert("الجهاز لا يدعم تحديد الموقع.");
        input.value = "جاري تحديد الموقع...";
        navigator.geolocation.getCurrentPosition(
            pos => { input.value = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`; },
            () => { input.value = ""; alert("يرجى تفعيل GPS في جوالك."); }
        );
    }

    function sendCartOrderWhatsApp() {
        const name = document.getElementById("custName").value.trim();
        const phone = document.getElementById("custPhone").value.trim();
        const address = document.getElementById("custAddress").value.trim();
        const mapUrl = document.getElementById("custMapLink").value.trim();

        if (!name || !phone || !address) return alert("يرجى إدخال الاسم، الجوال، والعنوان.");

        const orderId = "ORD-" + Math.floor(10000 + Math.random() * 90000);
        const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
        const totalBuy = cart.reduce((s, i) => s + ((i.buyPrice || Math.round(i.price * 0.7)) * i.qty), 0);

        const itemsDetails = cart.map((item, idx) =>
            `${idx + 1}. *${item.name}*\n   - اللون/الشكل: ${item.color}\n   - المقاس: ${item.size} | الكمية: ${item.qty}\n   - السعر: ${(item.price * item.qty).toLocaleString()} ر.ي\n   - صورة اللون المختار: ${item.image}`
        ).join("\n\n");

        ordersList.unshift({
            id: orderId,
            date: new Date().toLocaleDateString("ar-YE"),
            customerName: name,
            phone: phone,
            address: address,
            mapUrl: mapUrl,
            status: "قيد التجهيز",
            items: [...cart],
            totalSell: total,
            totalBuy: totalBuy
        });

        cart = [];
        saveState();

        let msg = `*طلب جديد - متجر شُعيبيّه* 🛍️\n` +
                  `*رقم الطلب:* ${orderId}\n` +
                  `*العميل:* ${name}\n` +
                  `*الجوال:* ${phone}\n` +
                  `*العنوان:* ${address}\n`;
        if (mapUrl) msg += `*موقع GPS:* ${mapUrl}\n`;
        msg += `----------------\n*الأصناف المطلوبة:*\n${itemsDetails}\n----------------\n*الإجمالي الكلي:* ${total.toLocaleString()} ر.ي`;

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
        closeModal("cartModal");
    }

    function sendTailorWhatsApp() {
        const type = document.getElementById("tailorType").value.trim();
        const details = document.getElementById("tailorDetails").value.trim();
        if (!type || !details) return alert("يرجى كتابة تفاصيل التفصيل.");
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`*طلب تفصيل خاص - شُعيبيّه*\n*النوع:* ${type}\n*المواصفات والمقاسات:* ${details}`)}`, "_blank");
    }

    /* =========================================================
       منظومة الإدارة الذكية (جوال vs كمبيوتر + الصلاحيات)
       ========================================================= */
    function doLogin() {
        const u = document.getElementById("loginUser").value.trim();
        const p = document.getElementById("loginPass").value.trim();
        if (u === "admin" && p === "123") {
            loggedInUser = { username: "admin", role: "admin", category: "الكل" };
        } else {
            const st = staffList.find(s => s.username === u && s.password === p);
            if (!st) return alert("بيانات الدخول غير صحيحة");
            loggedInUser = { username: st.username, role: st.role, category: st.category || "الكل" };
        }
        closeModal("loginModal");
        openAdminModal();
    }

    function getRoleArabicName(role, cat) {
        if (role === "admin") return "المدير العام";
        if (role === "accountant") return "محاسب مالي";
        if (role === "orders") return "مراجع ومنفذ طلبات";
        if (role === "category_staff") return `مسؤول قسم (${cat})`;
        return "موظف";
    }

    function openAdminModal() {
        if (!loggedInUser) return openModal("loginModal");
        document.getElementById("adminQuickBtn").style.display = "flex";
        document.getElementById("adminRoleText").textContent = getRoleArabicName(loggedInUser.role, loggedInUser.category);

        const isMobileScreen = window.innerWidth < 768 && !forceDesktopAdmin;
        document.getElementById("deviceModeIndicator").textContent = isMobileScreen ? "📱 وضع الجوال السريع" : "💻 وضع الكمبيوتر الشامل";

        applyRolePermissionsOnTabs();
        populateAdminSelects();
        refreshAllAdminData();

        // إذا دخل من الجوال يفتح له تلقائياً واجهة إضافة الطلبات السريعة، وإذا دخل من الكمبيوتر يفتح الإحصائيات والرسوم البيانية
        if (loggedInUser.role === "accountant") {
            switchAdminTab("tabDashboard");
        } else if (loggedInUser.role === "category_staff") {
            switchAdminTab("tabProducts");
        } else if (isMobileScreen) {
            switchAdminTab("tabQuickPos");
        } else {
            switchAdminTab("tabDashboard");
        }

        openModal("adminModal");
    }

    function toggleForceDesktopMode() {
        forceDesktopAdmin = !forceDesktopAdmin;
        openAdminModal();
    }

    function applyRolePermissionsOnTabs() {
        const role = loggedInUser.role;
        const allowedTabs = {
            admin: ["tabQuickPos", "tabDashboard", "tabOrders", "tabProducts", "tabCategories", "tabFinance", "tabStaff"],
            accountant: ["tabDashboard", "tabFinance", "tabOrders"],
            orders: ["tabQuickPos", "tabOrders"],
            category_staff: ["tabProducts"]
        }[role] || ["tabQuickPos"];

        document.querySelectorAll("#erpSidebarNav .erp-nav-btn").forEach(btn => {
            const t = btn.getAttribute("data-tab");
            btn.style.display = allowedTabs.includes(t) ? "flex" : "none";
        });
    }

    function switchAdminTab(tabId) {
        document.querySelectorAll(".admin-panel-section").forEach(sec => sec.classList.remove("active"));
        document.querySelectorAll("#erpSidebarNav .erp-nav-btn").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
        });
        const target = document.getElementById(tabId);
        if (target) target.classList.add("active");
    }

    function populateAdminSelects() {
        const catSelect = document.getElementById("pCat");
        const stCatSelect = document.getElementById("stCat");
        const realCats = categories.filter(c => c.name !== "الكل");

        if (loggedInUser.role === "category_staff") {
            catSelect.innerHTML = `<option value="${loggedInUser.category}">${loggedInUser.category}</option>`;
            catSelect.disabled = true;
        } else {
            catSelect.innerHTML = realCats.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
            catSelect.disabled = false;
        }
        stCatSelect.innerHTML = realCats.map(c => `<option value="${c.name}">${c.name}</option>`).join("");

        // قائمة المنتجات في نافذة طلب الجوال السريع
        const posProd = document.getElementById("posProdSelect");
        posProd.innerHTML = products.map(p => `<option value="${p.id}">${p.name} (${p.price.toLocaleString()} ر.ي)</option>`).join("");
        updatePosVariants();
    }

    function updatePosVariants() {
        const prodId = parseInt(document.getElementById("posProdSelect").value);
        const p = products.find(x => x.id === prodId);
        const varSelect = document.getElementById("posVariantSelect");
        if (!p) { varSelect.innerHTML = ""; return; }
        const variants = p.variants?.length ? p.variants : [{ color: "الافتراضي", img: p.image }];
        varSelect.innerHTML = variants.map((v, i) => `<option value="${i}">اللون: ${v.color}</option>`).join("");
    }

    function createQuickMobileOrder() {
        const name = document.getElementById("posCustName").value.trim();
        const phone = document.getElementById("posCustPhone").value.trim();
        const addr = document.getElementById("posCustAddr").value.trim();
        const prodId = parseInt(document.getElementById("posProdSelect").value);
        const varIdx = parseInt(document.getElementById("posVariantSelect").value || "0");
        const qty = parseInt(document.getElementById("posQty").value || "1");

        if (!name || !phone || !prodId) return alert("يرجى إدخال اسم العميل، الجوال، واختيار المنتج.");
        const p = products.find(x => x.id === prodId);
        const v = (p.variants && p.variants[varIdx]) ? p.variants[varIdx] : { color: "الافتراضي", img: p.image };

        const orderId = "POS-" + Math.floor(10000 + Math.random() * 90000);
        ordersList.unshift({
            id: orderId,
            date: new Date().toLocaleDateString("ar-YE"),
            customerName: name,
            phone: phone,
            address: addr || "استلام مباشر",
            status: "قيد التجهيز",
            items: [{
                name: p.name,
                color: v.color,
                size: p.sizes?.[0] || "موحد",
                qty: qty,
                price: p.price,
                buyPrice: p.buyPrice || Math.round(p.price * 0.7),
                image: v.img
            }],
            totalSell: p.price * qty,
            totalBuy: (p.buyPrice || Math.round(p.price * 0.7)) * qty
        });

        saveState();
        document.getElementById("posCustName").value = "";
        document.getElementById("posCustPhone").value = "";
        document.getElementById("posCustAddr").value = "";
        refreshAllAdminData();
        alert(`تم تسجيل الطلب رقم ${orderId} بنجاح!`);
    }

    /* =========================================================
       تحديث كافة الجداول والإحصائيات والرسوم البيانية
       ========================================================= */
    function refreshAllAdminData() {
        renderDashboardKPIsAndCharts();
        renderOrdersTable();
        renderAdminProductsTable();
        renderAdminCategoriesTable();
        renderExpensesTable();
        renderStaffTable();
    }

    function renderDashboardKPIsAndCharts() {
        const totalOrders = ordersList.length;
        const pendingOrders = ordersList.filter(o => o.status === "قيد التجهيز").length;
        const shippedOrders = ordersList.filter(o => o.status === "تم الشحن").length;
        const completedOrders = ordersList.filter(o => o.status === "مكتمل").length;

        let soldItemsCount = 0;
        let totalSales = 0;
        let totalBuyCost = 0;

        ordersList.forEach(o => {
            totalSales += o.totalSell || 0;
            totalBuyCost += o.totalBuy || 0;
            (o.items || []).forEach(i => { soldItemsCount += (i.qty || 1); });
        });

        const totalExpenses = expensesList.reduce((s, e) => s + e.amount, 0);
        const netProfit = totalSales - totalBuyCost - totalExpenses;

        document.getElementById("kpiTotalOrders").textContent = totalOrders;
        document.getElementById("kpiPendingOrders").textContent = pendingOrders;
        document.getElementById("kpiShippedOrders").textContent = shippedOrders;
        document.getElementById("kpiCompletedOrders").textContent = completedOrders;
        document.getElementById("kpiSoldItems").textContent = soldItemsCount + " قطعة";
        document.getElementById("kpiTotalSales").textContent = totalSales.toLocaleString() + " ر.ي";
        document.getElementById("kpiTotalExpenses").textContent = totalExpenses.toLocaleString() + " ر.ي";
        document.getElementById("kpiNetProfit").textContent = netProfit.toLocaleString() + " ر.ي";

        // الرسم البياني المالي
        const maxFin = Math.max(totalSales, totalBuyCost, totalExpenses, Math.abs(netProfit), 1);
        const finData = [
            { label: "المبيعات", val: totalSales, color: "#2563eb" },
            { label: "تكلفة البضاعة", val: totalBuyCost, color: "#64748b" },
            { label: "المصاريف", val: totalExpenses, color: "#dc2626" },
            { label: "صافي الربح", val: Math.max(netProfit, 0), color: "#10b981" }
        ];
        document.getElementById("financialBarChart").innerHTML = finData.map(d => {
            const h = Math.round((d.val / maxFin) * 135) + 8;
            return `
            <div class="bar-col">
                <span class="bar-val-top">${d.val.toLocaleString()}</span>
                <div class="bar-fill" style="height:${h}px; background:${d.color};"></div>
                <span class="bar-label">${d.label}</span>
            </div>`;
        }).join("");

        // الرسم البياني لحالات الطلبات
        const maxOrd = Math.max(pendingOrders, shippedOrders, completedOrders, 1);
        const ordData = [
            { label: "قيد التجهيز", val: pendingOrders, color: "#f59e0b" },
            { label: "تم الشحن", val: shippedOrders, color: "#3b82f6" },
            { label: "مكتملة (تمت)", val: completedOrders, color: "#10b981" }
        ];
        document.getElementById("ordersStatusChart").innerHTML = ordData.map(d => {
            const h = Math.round((d.val / maxOrd) * 135) + 8;
            return `
            <div class="bar-col">
                <span class="bar-val-top">${d.val} طلب</span>
                <div class="bar-fill" style="height:${h}px; background:${d.color};"></div>
                <span class="bar-label">${d.label}</span>
            </div>`;
        }).join("");
    }

    function getStatusBadgeClass(status) {
        if (status === "قيد التجهيز") return "status-pill status-pending";
        if (status === "تم الشحن") return "status-pill status-shipped";
        return "status-pill status-completed";
    }

    function renderOrdersTable() {
        const filterVal = document.getElementById("filterOrderStatus")?.value || "الكل";
        const filtered = ordersList.filter(o => filterVal === "الكل" || o.status === filterVal);

        // جدول الكمبيوتر الكامل
        document.getElementById("fullOrdersTableBody").innerHTML = filtered.map((o, idx) => {
            const profit = (o.totalSell || 0) - (o.totalBuy || 0);
            const itemsSummary = (o.items || []).map(i => `
                <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                    <img src="${i.image}" style="width:28px;height:28px;border-radius:6px;object-fit:cover;">
                    <span>${i.name} (<strong>${i.color}</strong> | ${i.size}) × ${i.qty}</span>
                </div>
            `).join("");

            return `
            <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.date}</td>
                <td>${o.customerName}<br><small style="color:var(--text-muted);">${o.phone}</small></td>
                <td>${o.address}</td>
                <td>${itemsSummary}</td>
                <td><strong>${(o.totalSell || 0).toLocaleString()} ر.ي</strong></td>
                <td style="color:#059669; font-weight:800;">${profit.toLocaleString()} ر.ي</td>
                <td><span class="${getStatusBadgeClass(o.status)}">${o.status}</span></td>
                <td>
                    <select onchange="changeOrderStatus('${o.id}', this.value)" style="padding:5px; border-radius:6px; border:1px solid var(--border); font-weight:700;">
                        <option value="قيد التجهيز" ${o.status === 'قيد التجهيز' ? 'selected' : ''}>قيد التجهيز</option>
                        <option value="تم الشحن" ${o.status === 'تم الشحن' ? 'selected' : ''}>تم الشحن</option>
                        <option value="مكتمل" ${o.status === 'مكتمل' ? 'selected' : ''}>مكتمل (تم)</option>
                    </select>
                    <button class="btn-del" style="margin-right:4px;" onclick="deleteOrderRecord('${o.id}')">حذف</button>
                </td>
            </tr>`;
        }).join("");

        // جدول الجوال السريع
        document.getElementById("quickMobileOrdersBody").innerHTML = ordersList.slice(0, 12).map(o => `
            <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.customerName}<br><small>${o.phone}</small></td>
                <td>${(o.items || []).map(i => `${i.name} (${i.color})`).join("، ")}</td>
                <td>${(o.totalSell || 0).toLocaleString()} ر.ي</td>
                <td><span class="${getStatusBadgeClass(o.status)}">${o.status}</span></td>
                <td>
                    <select onchange="changeOrderStatus('${o.id}', this.value)" style="padding:4px; border-radius:6px; border:1px solid var(--border);">
                        <option value="قيد التجهيز" ${o.status === 'قيد التجهيز' ? 'selected' : ''}>تجهيز</option>
                        <option value="تم الشحن" ${o.status === 'تم الشحن' ? 'selected' : ''}>شحن</option>
                        <option value="مكتمل" ${o.status === 'مكتمل' ? 'selected' : ''}>مكتمل</option>
                    </select>
                </td>
            </tr>
        `).join("");
    }

    function changeOrderStatus(orderId, newStatus) {
        const ord = ordersList.find(o => o.id === orderId);
        if (ord) {
            ord.status = newStatus;
            saveState();
            refreshAllAdminData();
        }
    }

    function deleteOrderRecord(orderId) {
        ordersList = ordersList.filter(o => o.id !== orderId);
        saveState();
        refreshAllAdminData();
    }

    /* =========================================================
       إدارة المنتجات (تعدد الألوان بالصور + الفيديو)
       ========================================================= */
    function addVariantInputRow() {
        const container = document.getElementById("variantsInputsContainer");
        const div = document.createElement("div");
        div.className = "variant-builder-row";
        div.innerHTML = `
            <input type="text" class="v-color-name" placeholder="اسم اللون/الشكل (مثال: كحلي)" style="padding:8px; border-radius:8px; border:1px solid var(--border);">
            <input type="url" class="v-color-img" placeholder="رابط صورة هذا اللون مباشرة (URL)" style="padding:8px; border-radius:8px; border:1px solid var(--border);">
            <button type="button" class="btn-del" onclick="this.parentElement.remove()">✕</button>
        `;
        container.appendChild(div);
    }

    function addProductFromAdmin() {
        const name = document.getElementById("pName").value.trim();
        const category = document.getElementById("pCat").value;
        const buyPrice = parseFloat(document.getElementById("pBuyPrice").value);
        const price = parseFloat(document.getElementById("pSellPrice").value);
        const image = document.getElementById("pImg").value.trim();
        const videoUrl = document.getElementById("pVideo").value.trim();
        const sizesRaw = document.getElementById("pSizes").value.trim();
        const desc = document.getElementById("pDesc").value.trim();

        if (!name || isNaN(buyPrice) || isNaN(price) || !image) {
            return alert("يرجى إكمال اسم المنتج، سعر الشراء، سعر البيع، ورابط الصورة الرئيسية.");
        }

        const variants = [];
        document.querySelectorAll("#variantsInputsContainer .variant-builder-row").forEach(row => {
            const cName = row.querySelector(".v-color-name").value.trim();
            const cImg = row.querySelector(".v-color-img").value.trim();
            if (cName && cImg) variants.push({ color: cName, img: cImg });
        });
        if (variants.length === 0) {
            variants.push({ color: "اللون الأساسي", img: image });
        }

        const sizes = sizesRaw ? sizesRaw.split(",").map(s => s.trim()).filter(Boolean) : ["قياس موحد"];

        products.unshift({
            id: Date.now(),
            name,
            category,
            buyPrice,
            price,
            oldPrice: Math.round(price * 1.25),
            desc,
            image: variants[0].img || image,
            videoUrl,
            variants,
            sizes
        });

        saveState();
        renderProducts();
        populateAdminSelects();
        refreshAllAdminData();

        document.getElementById("pName").value = "";
        document.getElementById("pBuyPrice").value = "";
        document.getElementById("pSellPrice").value = "";
        document.getElementById("pImg").value = "";
        document.getElementById("pVideo").value = "";
        document.getElementById("pSizes").value = "";
        document.getElementById("pDesc").value = "";
        document.getElementById("variantsInputsContainer").innerHTML = `
            <div class="variant-builder-row">
                <input type="text" class="v-color-name" placeholder="اسم اللون/الشكل (مثال: أحمر ملكي)" style="padding:8px; border-radius:8px; border:1px solid var(--border);">
                <input type="url" class="v-color-img" placeholder="رابط صورة هذا اللون مباشرة (URL)" style="padding:8px; border-radius:8px; border:1px solid var(--border);">
                <button type="button" class="btn-del" onclick="this.parentElement.remove()">✕</button>
            </div>
        `;
        alert("تمت إضافة المنتج مع ألوانه وصوره بنجاح!");
    }

    function renderAdminProductsTable() {
        const list = loggedInUser.role === "category_staff"
            ? products.filter(p => p.category === loggedInUser.category)
            : products;

        document.getElementById("adminProductsList").innerHTML = list.map(p => {
            const vList = (p.variants || []).map(v => `
                <span style="display:inline-flex; align-items:center; gap:4px; background:#f1f5f9; padding:2px 8px; border-radius:12px; font-size:0.75rem; margin:2px;">
                    <img src="${v.img}" style="width:16px;height:16px;border-radius:50%;object-fit:cover;"> ${v.color}
                </span>
            `).join("");
            return `
            <tr>
                <td><img src="${p.image}" style="width:42px;height:42px;border-radius:8px;object-fit:cover;"></td>
                <td><strong>${p.name}</strong></td>
                <td>${p.category}</td>
                <td>${vList}</td>
                <td>${p.videoUrl ? '✅ يوجد' : '—'}</td>
                <td>${(p.buyPrice || 0).toLocaleString()} ر.ي</td>
                <td><strong>${p.price.toLocaleString()} ر.ي</strong></td>
                <td><button class="btn-del" onclick="deleteProd(${p.id})">حذف</button></td>
            </tr>`;
        }).join("");
    }

    function deleteProd(id) {
        products = products.filter(p => p.id !== id);
        saveState();
        renderProducts();
        refreshAllAdminData();
    }

    /* =========================================================
       إدارة الأقسام (إضافة قسم كالإلكترونيات + قفل وفتح القسم)
       ========================================================= */
    function addNewCategoryAdmin() {
        const name = document.getElementById("newCatName").value.trim();
        const iconKey = document.getElementById("newCatIcon").value;
        if (!name) return alert("يرجى كتابة اسم القسم الجديد.");
        if (categories.some(c => c.name === name)) return alert("هذا القسم موجود مسبقاً.");

        categories.push({ name, iconKey, locked: false });
        saveState();
        renderCategories();
        populateAdminSelects();
        renderAdminCategoriesTable();
        document.getElementById("newCatName").value = "";
    }

    function toggleCategoryLock(catName) {
        const c = categories.find(x => x.name === catName);
        if (!c || c.name === "الكل") return;
        c.locked = !c.locked;
        if (c.locked && activeCategory === catName) activeCategory = "الكل";
        saveState();
        renderCategories();
        renderProducts();
        renderAdminCategoriesTable();
    }

    function deleteCategoryAdmin(catName) {
        if (catName === "الكل") return;
        categories = categories.filter(c => c.name !== catName);
        saveState();
        renderCategories();
        populateAdminSelects();
        renderAdminCategoriesTable();
    }

    function renderAdminCategoriesTable() {
        document.getElementById("adminCategoriesTable").innerHTML = categories.filter(c => c.name !== "الكل").map(c => `
            <tr>
                <td><strong>${c.name}</strong></td>
                <td>
                    ${c.locked
                        ? `<span class="status-pill" style="background:#fee2e2; color:#dc2626;">🔒 مقفل للعميل</span>`
                        : `<span class="status-pill status-completed">🟢 مفتوح ومتاح</span>`}
                </td>
                <td>
                    <button class="btn-act" onclick="toggleCategoryLock('${c.name}')">
                        ${c.locked ? '🔓 فتح القسم للعملاء' : '🔒 قفل القسم مؤقتاً'}
                    </button>
                </td>
                <td><button class="btn-del" onclick="deleteCategoryAdmin('${c.name}')">حذف</button></td>
            </tr>
        `).join("");
    }

    /* =========================================================
       المحاسبة والمصاريف وإدارة الموظفين
       ========================================================= */
    function addExpenseRecord() {
        const reason = document.getElementById("expReason").value.trim();
        const amount = parseFloat(document.getElementById("expAmount").value);
        if (!reason || isNaN(amount)) return alert("يرجى إدخال بيان المصروف والمبلغ.");
        expensesList.unshift({ id: Date.now(), reason, amount, date: new Date().toLocaleDateString("ar-YE") });
        saveState();
        document.getElementById("expReason").value = "";
        document.getElementById("expAmount").value = "";
        refreshAllAdminData();
    }

    function deleteExpense(id) {
        expensesList = expensesList.filter(e => e.id !== id);
        saveState();
        refreshAllAdminData();
    }

    function renderExpensesTable() {
        document.getElementById("expensesTableBody").innerHTML = expensesList.map(e => `
            <tr>
                <td>${e.date}</td>
                <td>${e.reason}</td>
                <td style="color:#dc2626; font-weight:800;">${e.amount.toLocaleString()} ر.ي</td>
                <td><button class="btn-del" onclick="deleteExpense(${e.id})">حذف</button></td>
            </tr>
        `).join("");
    }

    function toggleStaffCategorySelect() {
        const role = document.getElementById("stRole").value;
        document.getElementById("stCat").style.display = role === "category_staff" ? "block" : "none";
    }

    function addStaffMember() {
        const username = document.getElementById("stUser").value.trim();
        const password = document.getElementById("stPass").value.trim();
        const role = document.getElementById("stRole").value;
        const category = role === "category_staff" ? document.getElementById("stCat").value : "الكل";

        if (!username || !password) return alert("يرجى إدخال اسم المستخدم وكلمة المرور للموظف.");
        staffList.push({ username, password, role, category });
        saveState();
        renderStaffTable();
        document.getElementById("stUser").value = "";
        document.getElementById("stPass").value = "";
    }

    function removeStaff(i) {
        staffList.splice(i, 1);
        saveState();
        renderStaffTable();
    }

    function renderStaffTable() {
        document.getElementById("staffTableBody").innerHTML = staffList.map((s, i) => `
            <tr>
                <td><strong>${s.username}</strong></td>
                <td>${s.password}</td>
                <td>${getRoleArabicName(s.role, s.category)}</td>
                <td>${s.category || 'الكل'}</td>
                <td><button class="btn-del" onclick="removeStaff(${i})">إلغاء الصلاحية</button></td>
            </tr>
        `).join("");
    }

    function logoutUser() {
        loggedInUser = null;
        document.getElementById("adminQuickBtn").style.display = "none";
        closeModal("adminModal");
    }

    function openModal(id) { document.getElementById(id).classList.add("active"); }
    function closeModal(id) { document.getElementById(id).classList.remove("active"); }
</script>

</body>
</html>
