/* =====================================================================
   GOLD SAND AND GRAVY — INTERACTIONS
   (data lives in config.js, texts in i18n.js, map shapes in map-data.js)
   ===================================================================== */
(() => {
  'use strict';

  const S = window.SITE;
  const I18N = window.I18N;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const params = new URLSearchParams(location.search);
  const SHOT = params.has('shot');               // ?shot=1 → static mode for screenshots
  const root = document.documentElement;
  root.classList.remove('no-js');
  if (SHOT) root.classList.add('shot');

  const IMG = (id, w = 800, extra = '') => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72${extra}`;
  const svgIcon = (id, cls = 'ic') => `<svg class="${cls}"><use href="#${id}"/></svg>`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ------------------------------------------------------------------
     LANGUAGE
     ------------------------------------------------------------------ */
  const LANGS = ['uz', 'ru', 'en'];
  const pickLang = () => {
    const q = params.get('lang');
    if (LANGS.includes(q)) return q;
    try { const saved = localStorage.getItem('gsg-lang'); if (LANGS.includes(saved)) return saved; } catch (e) { /* storage blocked */ }
    const nav = (navigator.language || 'uz').slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : 'uz';
  };
  let lang = pickLang();
  const t = (key) => (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;

  const fmt = (n, dec = 0) => {
    const neg = n < 0;
    let [i, d] = Math.abs(n).toFixed(dec).split('.');
    i = i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    if (d && /^0+$/.test(d)) d = '';
    return (neg ? '-' : '') + i + (d ? (lang === 'en' ? '.' : ',') + d : '');
  };
  const money = (n) => `${fmt(Math.round(n / 1000) * 1000)} ${t('u.sum')}`;
  const matName = (id) => t(`p.${id}.name`);
  const fracLabel = (f) => f.label.replace('mm', t('u.mm'));
  const truckName = (tr) => (tr.id === 'mini' ? t('truck.mini') : (lang === 'ru' && tr.id === 'kamaz' ? 'КАМАЗ' : tr.name));

  function applyLang(next, persist = true) {
    lang = next;
    root.lang = lang;
    if (persist) { try { localStorage.setItem('gsg-lang', lang); } catch (e) { /* ignore */ } }

    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    $$('[data-i18n-ph]').forEach((el) => el.setAttribute('placeholder', t(el.dataset.i18nPh)));
    document.title = t('meta.title');
    const md = $('meta[name="description"]'); if (md) md.content = t('meta.desc');

    $$('.lang button').forEach((b) => b.classList.toggle('is-active', b.dataset.lang === lang));
    placeLangThumbs();

    // Google map language
    const gm = $('#gmap');
    if (gm) {
      const src = `https://maps.google.com/maps?q=${S.quarry.lat},${S.quarry.lng}&z=14&t=k&hl=${lang}&output=embed`;
      if (gm.src !== src) gm.src = src;
    }

    renderProducts();
    renderFooterProducts();
    renderFormMaterials();
    renderMapSelect();
    renderCalcStatic();
    calc();
    updateOpenStatus();
    if (gallery.open) gallery.show(gallery.i, false);
  }

  function placeLangThumbs() {
    $$('.lang').forEach((group) => {
      const btn = $('button.is-active', group), thumb = $('.lang-thumb', group);
      if (!btn || !thumb) return;
      thumb.style.left = btn.offsetLeft + 'px';
      thumb.style.width = btn.offsetWidth + 'px';
    });
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest('.lang button');
    if (b && b.dataset.lang !== lang) applyLang(b.dataset.lang);
  });

  /* ------------------------------------------------------------------
     CONTACT BINDINGS (from config)
     ------------------------------------------------------------------ */
  function bindContacts() {
    $$('[data-tel]').forEach((a) => { const p = S.phones[a.dataset.tel]; if (p) a.href = `tel:${p.tel}`; });
    $$('[data-tel-text]').forEach((el) => { const p = S.phones[el.dataset.telText]; if (p) el.textContent = p.display; });
    $$('[data-tg]').forEach((a) => { a.href = S.telegram.url; });
    $$('[data-tg-text]').forEach((el) => { el.textContent = '@' + S.telegram.user; });
    $$('[data-wa]').forEach((a) => { a.href = `https://wa.me/${S.whatsapp}`; });
    $$('[data-wa-text]').forEach((el) => { el.textContent = S.phones.sales.display; });
    $$('[data-mail]').forEach((a) => { a.href = `mailto:${S.email}`; });
    $$('[data-mail-text]').forEach((el) => { el.textContent = S.email; });
    $$('[data-insta]').forEach((a) => { a.href = S.instagram; });
    $$('[data-yt]').forEach((a) => { a.href = S.youtube; });
    const g = $('#dirGoogle'); if (g) g.href = S.quarry.googleMaps;
    const y = $('#dirYandex'); if (y) y.href = `https://yandex.uz/maps/?rtext=~${S.quarry.lat},${S.quarry.lng}&rtt=auto`;
  }

  /* Open / closed (Tashkent time, UTC+5) */
  function updateOpenStatus() {
    const now = new Date();
    const mins = ((now.getUTCHours() + 5) % 24) * 60 + now.getUTCMinutes();
    const [oh, om] = S.hours.open.split(':').map(Number);
    const [ch, cm] = S.hours.close.split(':').map(Number);
    const open = SHOT || (mins >= oh * 60 + om && mins < ch * 60 + cm);
    $$('[data-open-status]').forEach((el) => {
      el.textContent = t(open ? 'contact.open' : 'contact.closed');
      el.classList.toggle('is-closed', !open);
    });
    const hs = $('.hero-status'); if (hs) hs.classList.toggle('is-closed', !open);
  }

  /* ------------------------------------------------------------------
     TOAST / CLIPBOARD
     ------------------------------------------------------------------ */
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
  }
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    fallbackCopy(text); return Promise.resolve();
  }
  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    ta.remove();
  }

  /* ------------------------------------------------------------------
     NAVBAR / MOBILE MENU / SCROLL SPY
     ------------------------------------------------------------------ */
  const nav = $('#nav');
  const fab = $('#fab');
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    fab.classList.toggle('show', y > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  const mnav = $('#mnav'), burger = $('#burger');
  const setMenu = (open) => {
    mnav.classList.toggle('open', open);
    mnav.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    root.style.overflow = open ? 'hidden' : '';
    if (open) requestAnimationFrame(placeLangThumbs);
  };
  burger.addEventListener('click', () => setMenu(true));
  $('#mnavClose').addEventListener('click', () => setMenu(false));
  mnav.addEventListener('click', (e) => { if (e.target === mnav || e.target.closest('.mnav-links a, .mnav-head .brand')) setMenu(false); });

  const spyLinks = $$('.nav-links a');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      spyLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  if (!SHOT) ['top', 'products', 'operations', 'delivery', 'calculator', 'about', 'contact'].forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  $('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ------------------------------------------------------------------
     HERO SLIDER
     ------------------------------------------------------------------ */
  const hero = (() => {
    const slides = $$('.hero-slide'), contents = $$('.hero-content'), dots = $$('.hero-pager button');
    const DURATION = 7000;
    let i = 0, start = performance.now(), paused = false, raf;

    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
      contents.forEach((c, k) => { c.classList.toggle('is-active', k === i); c.setAttribute('aria-hidden', String(k !== i)); });
      dots.forEach((d, k) => { d.classList.toggle('is-active', k === i); d.style.setProperty('--p', '0%'); });
      start = performance.now();
    }
    function tick(now) {
      if (!paused && !document.hidden) {
        const p = Math.min(1, (now - start) / DURATION);
        dots[i].style.setProperty('--p', (p * 100).toFixed(1) + '%');
        if (p >= 1) go(i + 1);
      } else {
        start = now - (parseFloat(dots[i].style.getPropertyValue('--p')) || 0) / 100 * DURATION;
      }
      raf = requestAnimationFrame(tick);
    }
    dots.forEach((d, k) => d.addEventListener('click', () => go(k)));
    const heroEl = $('.hero');
    heroEl.addEventListener('mouseenter', () => { paused = true; });
    heroEl.addEventListener('mouseleave', () => { paused = false; });
    let tx = null;
    heroEl.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
    heroEl.addEventListener('touchend', (e) => {
      if (tx === null) return;
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
      tx = null;
    });
    if (!SHOT) raf = requestAnimationFrame(tick);
    return { go };
  })();

  /* ------------------------------------------------------------------
     PRODUCTS
     ------------------------------------------------------------------ */
  const track = $('#productsTrack');
  const minPrice = (m) => Math.min(...m.fractions.map((f) => f.price));
  const pricePerM3 = (p) => `${fmt(p)} ${t('u.sum')}/${t('u.m3')}`;

  function renderProducts() {
    track.innerHTML = S.materials.map((m) => `
      <button type="button" class="p-card" data-product="${m.id}">
        <div class="p-img"><img src="${IMG(m.img, 520)}" alt="${esc(matName(m.id))}" loading="lazy"></div>
        <div class="p-body">
          <div class="p-top"><h3>${esc(matName(m.id))}</h3><span class="p-arrow">${svgIcon('i-arrow')}</span></div>
          <p>${esc(t(`p.${m.id}.short`))}</p>
          <div class="p-price">${esc(t('products.priceFrom').replace('{p}', pricePerM3(minPrice(m))))}</div>
        </div>
      </button>`).join('');
    updateProdNav();
  }
  function renderFooterProducts() {
    const col = $('#footerProducts');
    $$('a', col).forEach((a) => a.remove());
    S.materials.forEach((m) => {
      const a = document.createElement('a');
      a.href = '#products'; a.dataset.product = m.id; a.textContent = matName(m.id);
      col.appendChild(a);
    });
  }
  const prodPrev = $('#prodPrev'), prodNext = $('#prodNext');
  function updateProdNav() {
    const max = track.scrollWidth - track.clientWidth - 4;
    prodPrev.disabled = track.scrollLeft <= 4;
    prodNext.disabled = track.scrollLeft >= max;
  }
  const step = () => { const c = $('.p-card', track); return c ? c.offsetWidth + 14 : 300; };
  prodPrev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  prodNext.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', updateProdNav, { passive: true });

  document.addEventListener('click', (e) => {
    const p = e.target.closest('[data-product]');
    if (p) { e.preventDefault(); openProduct(p.dataset.product); }
  });

  /* ------------------------------------------------------------------
     MODALS
     ------------------------------------------------------------------ */
  let lastFocus = null;
  function openModal(id) {
    const m = document.getElementById(id);
    lastFocus = document.activeElement;
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    root.style.overflow = 'hidden';
    setTimeout(() => { const f = $('[data-close].icon-btn, .btn', m); if (f) f.focus({ preventScroll: true }); }, 50);
  }
  function closeModal(m) {
    if (!m) return;
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
    if (!$('.modal.open')) root.style.overflow = '';
    if (m.id === 'galleryModal') gallery.stop();
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  document.addEventListener('click', (e) => {
    const c = e.target.closest('[data-close]');
    if (c) closeModal(c.closest('.modal'));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal($('.modal.open')); if (mnav.classList.contains('open')) setMenu(false); }
    if ($('#galleryModal.open')) {
      if (e.key === 'ArrowRight') gallery.next();
      if (e.key === 'ArrowLeft') gallery.prev();
    }
  });

  let modalProduct = null;
  function openProduct(id) {
    const m = S.materials.find((x) => x.id === id);
    if (!m) return;
    modalProduct = id;
    $('#pmImg').src = IMG(m.img, 900);
    $('#pmImg').alt = matName(id);
    $('#pmName').textContent = matName(id);
    $('#pmLong').textContent = t(`p.${id}.long`);
    $('#pmPrice').textContent = t('products.priceFrom').replace('{p}', pricePerM3(minPrice(m)));
    $('#pmDensity').textContent = `≈ ${fmt(m.density, 2)} ${t('u.t')}/${t('u.m3')}`;
    $('#pmFractions').innerHTML = m.fractions.map((f) => `<span class="chip">${esc(fracLabel(f))} · ${fmt(f.price)}</span>`).join('');
    $('#pmUses').innerHTML = t(`p.${id}.uses`).split('|').map((u) => `<li>${svgIcon('i-check')}<span>${esc(u)}</span></li>`).join('');
    openModal('productModal');
  }
  $('#pmCalc').addEventListener('click', () => {
    closeModal($('#productModal'));
    setMaterial(modalProduct);
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
  });

  /* ------------------------------------------------------------------
     GALLERY ("Watch our work")
     ------------------------------------------------------------------ */
  const gallery = (() => {
    const items = [
      { img: 'photo-1785791516517-aae4ca2fcfcb', cap: 'g.1' },
      { img: 'photo-1785791516569-07a837fb07b7', cap: 'g.2' },
      { img: 'photo-1760568787655-247d67618f37', cap: 'g.3' },
      { img: 'photo-1751054786365-4b02b690d301', cap: 'g.4' },
      { img: 'photo-1760045788252-d8d386ea1d12', cap: 'g.5' },
      { img: 'photo-1517089152318-42ec560349c0', cap: 'g.6' }
    ];
    const stage = $('#gStage'), thumbs = $('#gThumbs');
    let built = false, timer = null;
    const api = { i: 0, open: false };
    function build() {
      if (built) return;
      // low-res thumbnail as background placeholder while the large photo loads
      stage.innerHTML = items.map((it) => `<img src="${IMG(it.img, 1600)}" alt="" style="background:url('${IMG(it.img, 200)}') center/cover">`).join('');
      thumbs.innerHTML = items.map((it, k) => `<button type="button" data-g="${k}" aria-label="${k + 1}"><img src="${IMG(it.img, 200)}" alt=""></button>`).join('');
      thumbs.addEventListener('click', (e) => { const b = e.target.closest('[data-g]'); if (b) api.show(+b.dataset.g); });
      built = true;
    }
    api.show = (n, restart = true) => {
      api.i = (n + items.length) % items.length;
      $$('img', stage).forEach((im, k) => {
        if (k === api.i) { im.classList.remove('is-active'); void im.offsetWidth; im.classList.add('is-active'); }
        else im.classList.remove('is-active');
      });
      $$('button', thumbs).forEach((b, k) => b.classList.toggle('is-active', k === api.i));
      $('#gCap').textContent = t(items[api.i].cap);
      $('#gCount').textContent = `${api.i + 1} / ${items.length}`;
      if (restart) api.play();
    };
    api.play = () => { clearInterval(timer); timer = setInterval(() => api.show(api.i + 1, false), 5000); };
    api.stop = () => { clearInterval(timer); api.open = false; };
    api.next = () => api.show(api.i + 1);
    api.prev = () => api.show(api.i - 1);
    api.preload = build;
    api.openGallery = () => { build(); api.open = true; openModal('galleryModal'); api.show(0); };
    return api;
  })();
  $$('[data-open-gallery]').forEach((b) => {
    b.addEventListener('click', gallery.openGallery);
    b.addEventListener('pointerenter', gallery.preload, { once: true });
  });
  $('#gNext').addEventListener('click', gallery.next);
  $('#gPrev').addEventListener('click', gallery.prev);

  /* ------------------------------------------------------------------
     DELIVERY MAP
     ------------------------------------------------------------------ */
  const M = window.UZ_MAP;
  // Pin positions (some moved slightly so pins don't overlap the quarry marker)
  const PIN = Object.assign({}, M.pts, { TO: [820.7, 356.3], SI: [735.5, 370.2] });
  const Q = M.pts.Q;
  const svg = $('#uzMap'), tip = $('#mapTip'), mapWrap = $('#mapWrap');
  const etaKey = (km) => (km <= 60 ? 'eta.h' : km <= 150 ? 'eta.same' : km <= 400 ? 'eta.24' : km <= 700 ? 'eta.12' : 'eta.23');
  const regionsByDistance = () => Object.keys(S.regions).sort((a, b) => S.regions[a] - S.regions[b]);

  function buildMap() {
    const NS = 'http://www.w3.org/2000/svg';
    let html = '<g class="regions">';
    Object.entries(M.paths).forEach(([k, d]) => { html += `<path class="rg${k === 'TK' ? ' rg-tk' : ''}" data-r="${k}" d="${d}"/>`; });
    html += '</g><g class="routes">';
    Object.keys(S.regions).forEach((k) => {
      const [x, y] = PIN[k];
      const dx = x - Q[0], dy = y - Q[1], len = Math.hypot(dx, dy) || 1;
      let nx = -dy / len, ny = dx / len;
      if (ny > 0) { nx = -nx; ny = -ny; }            // bend upwards
      const bend = Math.min(140, len * 0.22);
      const cx = (x + Q[0]) / 2 + nx * bend, cy = (y + Q[1]) / 2 + ny * bend;
      html += `<path class="route" data-r="${k}" d="M${Q[0]},${Q[1]} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x},${y}"/>`;
    });
    html += '</g><g class="pins">';
    Object.keys(S.regions).forEach((k) => {
      const [x, y] = PIN[k];
      html += `<g class="pin" data-r="${k}" transform="translate(${x},${y})"><path class="pin-shape" d="M0 0C-3-8-11-12-11-21a11 11 0 1 1 22 0c0 9-8 13-11 21Z"/><circle class="pin-dot" cx="0" cy="-21" r="4"/></g>`;
    });
    html += `</g><g class="quarry" transform="translate(${Q[0]},${Q[1]})"><circle class="quarry-ring" r="12"/><circle class="quarry-core" r="9"/></g>`;
    html += `<text class="quarry-label" x="${Q[0]}" y="${Q[1] + 44}" text-anchor="middle" id="quarryLabel"></text>`;
    svg.innerHTML = html;
    void NS;
  }

  let selectedRegion = null;
  function hot(k, on) {
    $$(`[data-r="${k}"]`, svg).forEach((el) => el.classList.toggle('is-hot', on));
  }
  function showTip(k) {
    const km = S.regions[k];
    const howo = S.trucks.find((x) => x.id === 'howo') || S.trucks[0];
    const box = svg.getBoundingClientRect(), wbox = mapWrap.getBoundingClientRect();
    const sx = box.width / 1000, sy = box.height / 660;
    const [x, y] = PIN[k];
    let left = box.left - wbox.left + x * sx;
    const top = box.top - wbox.top + (y - 30) * sy;
    const half = 125;
    left = Math.max(half - 10, Math.min(wbox.width - half + 10, left));
    tip.style.left = left + 'px';
    tip.innerHTML = `<b>${esc(t('r.' + k))}</b>
      <div class="km">≈ ${fmt(km)} ${t('u.km')} <small>${esc(t('tip.km'))}</small></div>
      <div class="row"><span>${esc(t('tip.eta'))}</span><span>${esc(t(etaKey(km)))}</span></div>
      <div class="row"><span>${esc(t('tip.trip'))}</span><span>${money(howo.base + howo.perKm * km)}</span></div>
      <span class="tip-cta">${esc(t('tip.click'))}</span>`;
    // flip below the pin when there is no room above (under the fixed header)
    const below = wbox.top + top - tip.offsetHeight - 16 < 80;
    tip.classList.toggle('below', below);
    tip.style.top = (below ? box.top - wbox.top + (y + 6) * sy : top) + 'px';
    tip.classList.add('show');
  }
  function hideTip() { tip.classList.remove('show'); }
  function selectRegion(k, { scroll = false } = {}) {
    if (selectedRegion) $$(`.rg[data-r="${selectedRegion}"]`, svg).forEach((el) => el.classList.remove('is-sel'));
    selectedRegion = k;
    $$(`.rg[data-r="${k}"]`, svg).forEach((el) => el.classList.add('is-sel'));
    state.ful = 'delivery'; state.dest = k; state.km = S.regions[k];
    renderCalcStatic(); calc();
    const ms = $('#mapSelect'); if (ms) ms.value = k;
    if (scroll) {
      document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
      const sum = $('#calcSum'); sum.classList.remove('flash'); void sum.offsetWidth; sum.classList.add('flash');
    }
  }
  function bindMap() {
    let current = null;
    const enter = (k) => { if (current && current !== k) hot(current, false); current = k; hot(k, true); showTip(k); };
    const leave = () => { if (current) hot(current, false); current = null; hideTip(); };
    svg.addEventListener('pointerover', (e) => {
      const el = e.target.closest('[data-r]');
      if (el && S.regions[el.dataset.r] !== undefined) enter(el.dataset.r);
    });
    svg.addEventListener('pointerleave', leave);
    svg.addEventListener('click', (e) => {
      const el = e.target.closest('[data-r]');
      if (!el) return;
      const k = el.dataset.r;
      const touch = matchMedia('(hover: none)').matches;
      if (touch) { enter(k); selectRegion(k); }
      else selectRegion(k, { scroll: true });
    });
    $('#mapSelect').addEventListener('change', (e) => {
      const k = e.target.value; if (!k) return;
      enter(k); selectRegion(k);
    });
    window.addEventListener('resize', () => { if (current) showTip(current); });
  }
  function renderMapSelect() {
    const sel = $('#mapSelect');
    sel.innerHTML = `<option value="">${esc(t('del.select'))}</option>` +
      regionsByDistance().map((k) => `<option value="${k}">${esc(t('r.' + k))} — ${fmt(S.regions[k])} ${t('u.km')}</option>`).join('');
    if (selectedRegion) sel.value = selectedRegion;
    const ql = $('#quarryLabel'); if (ql) ql.textContent = t('del.quarry');
  }

  /* ------------------------------------------------------------------
     CALCULATOR
     ------------------------------------------------------------------ */
  const state = {
    mat: 'sand', frac: 1, mode: 'm3', qty: 32,
    area: { l: 20, w: 10, d: 15, compact: true },
    ful: 'delivery', dest: 'TK', km: S.regions.TK, truck: 'auto'
  };
  const RANGE = { m3: [1, 500], t: [1, 800], trucks: [1, 40] };
  const getMat = () => S.materials.find((m) => m.id === state.mat);

  function setMaterial(id) {
    if (!S.materials.some((m) => m.id === id)) return;
    state.mat = id;
    const m = getMat();
    state.frac = Math.min(state.frac, m.fractions.length - 1);
    if (id !== 'sand') state.frac = 0;
    renderCalcStatic(); calc();
  }

  function renderCalcStatic() {
    const m = getMat();
    // materials
    $('#matGrid').innerHTML = S.materials.map((x) => `
      <button type="button" class="mat${x.id === state.mat ? ' is-active' : ''}" data-mat="${x.id}" aria-pressed="${x.id === state.mat}">
        <img src="${IMG(x.img, 240)}" alt="" loading="lazy"><span>${esc(matName(x.id))}</span><i class="tick">${svgIcon('i-check')}</i>
      </button>`).join('');
    // fractions
    $('#fracChips').innerHTML = m.fractions.map((f, k) => `<button type="button" class="chip${k === state.frac ? ' is-active' : ''}" data-frac="${k}">${esc(fracLabel(f))}</button>`).join('');
    // mode
    $$('#modeSeg button').forEach((b) => b.classList.toggle('is-active', b.dataset.mode === state.mode));
    $('#qtyRow').hidden = state.mode === 'area';
    $('#areaRow').hidden = state.mode !== 'area';
    $('#qtyUnit').textContent = state.mode === 'm3' ? t('u.m3') : state.mode === 't' ? t('u.t') : '×';
    const [mn, mx] = RANGE[state.mode] || [1, 500];
    const range = $('#qtyRange'); range.min = mn; range.max = mx;
    // fulfilment
    $$('#fulfilSeg button').forEach((b) => b.classList.toggle('is-active', b.dataset.ful === state.ful));
    $('#deliveryFields').hidden = state.ful !== 'delivery';
    $('#pickupNote').hidden = state.ful !== 'pickup';
    // destinations
    $('#dest').innerHTML = regionsByDistance().map((k) => `<option value="${k}">${esc(t('r.' + k))} — ${fmt(S.regions[k])} ${t('u.km')}</option>`).join('') +
      `<option value="custom">${esc(t('calc.custom'))}</option>`;
    $('#dest').value = state.dest;
    syncInputs();
  }

  function syncInputs() {
    $('#qty').value = state.qty;
    const range = $('#qtyRange');
    range.value = Math.min(+range.max, state.qty);
    range.style.setProperty('--p', ((Math.min(+range.max, state.qty) - range.min) / (range.max - range.min) * 100).toFixed(1) + '%');
    $('#aLen').value = state.area.l; $('#aWid').value = state.area.w; $('#aDep').value = state.area.d; $('#aCompact').checked = state.area.compact;
    if (document.activeElement !== $('#km')) $('#km').value = state.km;
  }

  function compute() {
    const m = getMat(), fr = m.fractions[state.frac], dens = m.density;
    const fixedTruck = S.trucks.find((x) => x.id === state.truck);
    let vol, tons;
    if (state.mode === 'm3') { vol = state.qty; tons = vol * dens; }
    else if (state.mode === 't') { tons = state.qty; vol = tons / dens; }
    else if (state.mode === 'area') {
      const a = state.area;
      vol = Math.max(0, a.l) * Math.max(0, a.w) * Math.max(0, a.d) / 100 * (a.compact ? 1.15 : 1);
      tons = vol * dens;
    } else {
      const tr = fixedTruck || S.trucks.find((x) => x.id === 'howo') || S.trucks[0];
      const per = Math.min(tr.m3, tr.tons / dens);
      vol = state.qty * per; tons = vol * dens;
    }
    const materialCost = vol * fr.price;
    const km = Math.max(0, state.km || 0);
    const options = S.trucks.map((tr) => {
      const trips = Math.max(1, Math.ceil(Math.max(tons / tr.tons, vol / tr.m3) - 1e-9));
      return { tr, trips, cost: trips * (tr.base + tr.perKm * km) };
    });
    const best = options.reduce((a, b) => (b.cost < a.cost || (b.cost === a.cost && b.trips < a.trips) ? b : a));
    const chosen = state.truck === 'auto' ? best : options.find((o) => o.tr.id === state.truck);
    const delivery = state.ful === 'delivery' && vol > 0;
    const deliveryCost = delivery ? chosen.cost : 0;
    return { m, fr, vol, tons, materialCost, options, best, chosen, delivery, deliveryCost, km, total: materialCost + deliveryCost };
  }

  let shownTotal = 0, totalAnim, totalFallback;
  function animateTotal(to) {
    const el = $('#sumTotal'), from = shownTotal, t0 = performance.now(), dur = SHOT ? 0 : 550;
    cancelAnimationFrame(totalAnim);
    clearTimeout(totalFallback);
    // guarantees the final value even when animation frames are paused (background tab)
    totalFallback = setTimeout(() => { cancelAnimationFrame(totalAnim); shownTotal = to; el.textContent = fmt(Math.round(to / 1000) * 1000); }, dur + 80);
    const stepFn = (now) => {
      const p = dur ? Math.min(1, (now - t0) / dur) : 1;
      const e = 1 - Math.pow(1 - p, 3);
      shownTotal = from + (to - from) * e;
      el.textContent = fmt(Math.round(shownTotal / 1000) * 1000);
      if (p < 1) totalAnim = requestAnimationFrame(stepFn);
    };
    totalAnim = requestAnimationFrame(stepFn);
  }

  let lastCalc = null;
  function calc() {
    const r = compute();
    lastCalc = r;
    // truck chips (needs computed options for the "recommended" badge)
    $('#truckChips').innerHTML =
      `<button type="button" class="truck-chip${state.truck === 'auto' ? ' is-active' : ''}" data-truck="auto"><b>${esc(t('calc.auto'))}</b><small>${esc(truckName(r.best.tr))} × ${r.best.trips}</small></button>` +
      r.options.map((o) => `<button type="button" class="truck-chip${state.truck === o.tr.id ? ' is-active' : ''}" data-truck="${o.tr.id}">
        ${o === r.best ? `<span class="reco">${esc(t('calc.recommended'))}</span>` : ''}
        <b>${esc(truckName(o.tr))}</b><small>${o.tr.tons} ${t('u.t')} · ${fmt(o.tr.m3, 1)} ${t('u.m3')}</small></button>`).join('');

    // area result
    if (state.mode === 'area') $('#areaOut').textContent = `${fmt(r.vol, 1)} ${t('u.m3')}`;

    // summary
    $('#sumMat').textContent = `${matName(r.m.id)} · ${fracLabel(r.fr)}`;
    $('#sumCur').textContent = t('u.sum');
    animateTotal(r.total);
    $('#sumUsd').textContent = `≈ $${fmt(r.total / S.usdRate)}`;
    $('#sumVol').textContent = `${fmt(r.vol, 1)} ${t('u.m3')}`;
    $('#sumW').textContent = `${fmt(r.tons, 1)} ${t('u.t')}`;
    $('#sumMatCost').textContent = money(r.materialCost);
    $('#sumDelRow').hidden = !r.delivery;
    $('#sumDel').textContent = money(r.deliveryCost);
    $('#sumTrips').textContent = r.delivery ? `${r.chosen.trips} × ${truckName(r.chosen.tr)}` : '—';
    $('#sumEta').textContent = t(r.delivery ? etaKey(r.km) : 'eta.pickup');

    const trucksEl = $('#sumTrucks');
    if (r.delivery) {
      const n = r.chosen.trips, shown = Math.min(n, 12);
      trucksEl.innerHTML = Array.from({ length: shown }, (_, k) => `<svg class="ic" style="animation-delay:${k * 40}ms"><use href="#i-truck"/></svg>`).join('') +
        `<em>${n > shown ? '+' + (n - shown) + ' · ' : ''}${n} ${t(n === 1 ? 'u.trip' : 'u.trips')} · ${esc(truckName(r.chosen.tr))}</em>`;
    } else {
      trucksEl.innerHTML = `<svg class="ic"><use href="#i-loader"/></svg><em>${esc(t('sum.pickupAt'))}</em>`;
    }
    $('#sendWa').href = `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(orderMessage(r))}`;
  }

  function orderMessage(r = lastCalc) {
    const lines = [
      t('msg.hello'),
      `• ${t('msg.material')}: ${matName(r.m.id)} ${fracLabel(r.fr)}`,
      `• ${t('msg.volume')}: ${fmt(r.vol, 1)} ${t('u.m3')} (~${fmt(r.tons, 1)} ${t('u.t')})`
    ];
    if (r.delivery) {
      const dest = state.dest === 'custom' ? '' : t('r.' + state.dest) + ', ';
      lines.push(`• ${t('msg.delivery')}: ${dest}${fmt(r.km)} ${t('u.km')}`);
      lines.push(`• ${t('msg.trucks')}: ${r.chosen.trips} × ${truckName(r.chosen.tr)}`);
    } else {
      lines.push(`• ${t('msg.pickup')}`);
    }
    lines.push(`• ${t('msg.total')}: ≈ ${money(r.total)}`);
    return lines.join('\n');
  }

  function bindCalc() {
    $('#matGrid').addEventListener('click', (e) => { const b = e.target.closest('[data-mat]'); if (b) setMaterial(b.dataset.mat); });
    $('#fracChips').addEventListener('click', (e) => {
      const b = e.target.closest('[data-frac]'); if (!b) return;
      state.frac = +b.dataset.frac;
      $$('#fracChips .chip').forEach((c) => c.classList.toggle('is-active', c === b));
      calc();
    });
    $('#modeSeg').addEventListener('click', (e) => {
      const b = e.target.closest('[data-mode]'); if (!b || b.dataset.mode === state.mode) return;
      const r = compute(), next = b.dataset.mode, dens = getMat().density;
      // convert current quantity so the order stays the same
      if (next === 'm3') state.qty = Math.max(1, Math.round(r.vol));
      else if (next === 't') state.qty = Math.max(1, Math.round(r.tons));
      else if (next === 'trucks') {
        const tr = S.trucks.find((x) => x.id === state.truck) || S.trucks.find((x) => x.id === 'howo');
        state.qty = Math.max(1, Math.round(r.vol / Math.min(tr.m3, tr.tons / dens)));
      } else if (next === 'area') {
        state.area.d = state.area.d || 15;
        const side = Math.sqrt(Math.max(1, r.vol) / (state.area.d / 100) / (state.area.compact ? 1.15 : 1));
        state.area.l = Math.round(side * 1.4); state.area.w = Math.max(1, Math.round(side / 1.4));
      }
      state.mode = next;
      renderCalcStatic(); calc();
    });
    const qty = $('#qty'), range = $('#qtyRange');
    const setQty = (v) => { state.qty = Math.max(1, Math.min(100000, Math.round(+v || 1))); syncInputs(); calc(); };
    qty.addEventListener('input', () => { if (qty.value !== '') { state.qty = Math.max(1, +qty.value || 1); range.value = Math.min(+range.max, state.qty); range.style.setProperty('--p', ((Math.min(+range.max, state.qty) - range.min) / (range.max - range.min) * 100) + '%'); calc(); } });
    qty.addEventListener('change', () => setQty(qty.value));
    range.addEventListener('input', () => setQty(range.value));
    $$('#qtyRow [data-step]').forEach((b) => b.addEventListener('click', () => {
      const big = state.mode === 'trucks' ? 1 : state.qty >= 100 ? 10 : state.qty >= 20 ? 5 : 1;
      setQty(state.qty + (+b.dataset.step) * big);
    }));
    const areaInputs = { aLen: 'l', aWid: 'w', aDep: 'd' };
    Object.entries(areaInputs).forEach(([id, key]) => $('#' + id).addEventListener('input', (e) => { state.area[key] = Math.max(0, +e.target.value || 0); calc(); }));
    $('#aCompact').addEventListener('change', (e) => { state.area.compact = e.target.checked; calc(); });
    $('#fulfilSeg').addEventListener('click', (e) => {
      const b = e.target.closest('[data-ful]'); if (!b) return;
      state.ful = b.dataset.ful; renderCalcStatic(); calc();
    });
    $('#dest').addEventListener('change', (e) => {
      state.dest = e.target.value;
      if (state.dest !== 'custom') { state.km = S.regions[state.dest]; $('#km').value = state.km; selectRegionOnMap(state.dest); }
      else $('#km').focus();
      calc();
    });
    $('#km').addEventListener('input', (e) => {
      state.km = Math.max(0, +e.target.value || 0);
      if (state.dest !== 'custom' && state.km !== S.regions[state.dest]) { state.dest = 'custom'; $('#dest').value = 'custom'; }
      calc();
    });
    $('#truckChips').addEventListener('click', (e) => { const b = e.target.closest('[data-truck]'); if (!b) return; state.truck = b.dataset.truck; calc(); });

    $('#sendTg').addEventListener('click', () => {
      const msg = orderMessage();
      copy(msg);
      window.open(S.telegram.url, '_blank', 'noopener');
      toast(t('toast.copied'));
    });
    $('#copyEst').addEventListener('click', () => { copy(orderMessage()); toast(t('toast.copiedPlain')); });
  }
  function selectRegionOnMap(k) {
    if (selectedRegion) $$(`.rg[data-r="${selectedRegion}"]`, svg).forEach((el) => el.classList.remove('is-sel'));
    selectedRegion = k;
    $$(`.rg[data-r="${k}"]`, svg).forEach((el) => el.classList.add('is-sel'));
  }

  /* ------------------------------------------------------------------
     CONTACT FORM
     ------------------------------------------------------------------ */
  function renderFormMaterials() {
    const sel = $('#formMaterial'); const v = sel.value;
    sel.innerHTML = S.materials.map((m) => `<option value="${m.id}">${esc(matName(m.id))}</option>`).join('');
    if (v) sel.value = v;
  }
  const phone = $('#phoneInput');
  function maskPhone(v) {
    let d = v.replace(/\D/g, '');
    if (!d.startsWith('998')) d = '998' + d.replace(/^998?/, '');
    d = d.slice(0, 12);
    const p = d.slice(3);
    let out = '+998';
    if (p.length) out += ' (' + p.slice(0, 2);
    if (p.length >= 2) out += ')';
    if (p.length > 2) out += ' ' + p.slice(2, 5);
    if (p.length > 5) out += '-' + p.slice(5, 7);
    if (p.length > 7) out += '-' + p.slice(7, 9);
    return out;
  }
  phone.addEventListener('focus', () => { if (!phone.value) phone.value = '+998 '; });
  phone.addEventListener('blur', () => { if (phone.value.replace(/\D/g, '') === '998') phone.value = ''; });
  phone.addEventListener('input', () => { phone.value = maskPhone(phone.value); phone.closest('.field').classList.remove('invalid'); });
  $('#leadForm [name="name"]').addEventListener('input', (e) => e.target.closest('.field').classList.remove('invalid'));

  /**
   * Sends the request. Connect this to your backend or a Telegram bot:
   *   return fetch('/api/lead', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
   * (Never put a Telegram bot token in front-end code — call it from a server.)
   */
  function sendLead(data) { return new Promise((res) => setTimeout(() => res(data), 600)); }

  $('#leadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = e.target;
    const name = f.name.value.trim();
    const digits = f.phone.value.replace(/\D/g, '');
    let ok = true;
    if (name.length < 2) { f.name.closest('.field').classList.add('invalid'); ok = false; }
    if (digits.length !== 12) { f.phone.closest('.field').classList.add('invalid'); ok = false; }
    if (!ok) return;
    const btn = $('button[type=submit]', f); btn.disabled = true; btn.style.opacity = '.7';
    await sendLead({ name, phone: '+' + digits, material: f.material.value, volume: f.volume.value, msg: f.msg.value, lang });
    btn.disabled = false; btn.style.opacity = '';
    f.reset();
    openModal('successModal');
  });

  $('#copyCoords').addEventListener('click', () => { copy(`${S.quarry.lat}, ${S.quarry.lng}`); toast(t('toast.copiedPlain')); });

  /* ------------------------------------------------------------------
     REVEAL + COUNTERS
     ------------------------------------------------------------------ */
  function countUp(el) {
    const to = +el.dataset.to, t0 = performance.now(), dur = 1400;
    const f = (now) => { const p = Math.min(1, (now - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }
  if (SHOT) {
    $$('.reveal').forEach((el) => el.classList.add('in'));
    $$('.count').forEach((el) => { el.textContent = el.dataset.to; });
  } else {
    // stagger siblings
    const groups = new Map();
    $$('.reveal').forEach((el) => { const p = el.parentElement; groups.set(p, (groups.get(p) || 0) + 1); el.style.transitionDelay = Math.min(groups.get(p) - 1, 5) * 80 + 'ms'; });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        $$('.count', en.target).forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((el) => io.observe(el));
  }

  /* FAQ: keep one open at a time */
  $$('#faqList details').forEach((d) => d.addEventListener('toggle', () => {
    if (d.open) $$('#faqList details').forEach((o) => { if (o !== d) o.open = false; });
  }));

  /* ------------------------------------------------------------------
     INIT
     ------------------------------------------------------------------ */
  bindContacts();
  buildMap();
  bindMap();
  bindCalc();
  applyLang(lang, false);
  selectRegionOnMap(state.dest);
  onScroll();
  setInterval(updateOpenStatus, 60000);
  window.addEventListener('resize', () => { placeLangThumbs(); updateProdNav(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeLangThumbs);
  window.addEventListener('load', placeLangThumbs);
  void hero;
})();
