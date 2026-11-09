/* =====================================================================
   GOLD SAND AND GRAVY — SITE CONFIGURATION
   ---------------------------------------------------------------------
   Edit this file to change phone numbers, links, prices, trucks and
   delivery distances. Everything on the website updates automatically.
   Values marked  // TODO  are placeholders — replace them with real data.
   ===================================================================== */

window.SITE = {
  company: 'Gold Sand and Gravy',

  /* ---------- Contacts ---------- */
  phones: {
    sales:    { display: '+998 90 123 45 67', tel: '+998901234567' },   // TODO real number
    dispatch: { display: '+998 91 765 43 21', tel: '+998917654321' }    // TODO real number
  },
  telegram:  { user: 'goldsandgravy', url: 'https://t.me/goldsandgravy' },   // TODO
  whatsapp:  '998901234567',                                               // TODO digits only
  instagram: 'https://instagram.com/goldsandgravy',                        // TODO
  youtube:   'https://youtube.com/@goldsandgravy',                         // TODO
  email:     'info@goldsandgravy.uz',                                      // TODO
  hours:     { open: '07:00', close: '20:00' },

  /* ---------- Quarry location (from your Google Maps link) ---------- */
  quarry: {
    lat: 40.505614,
    lng: 69.101147,
    googleMaps: 'https://maps.app.goo.gl/iEEmPR3RcGJawMTAA'
  },

  /* ---------- Currency ---------- */
  usdRate: 12700, // UZS per 1 USD, used for the "≈ $" hint in the calculator

  /* ---------- Materials & prices (UZS per m³, loading included) ---------- */
  // TODO: replace with your real prices. density = tons per m³ (bulk).
  materials: [
    { id: 'sand',    img: 'photo-1744211937358-cf9036895c77', density: 1.50,
      fractions: [ { label: '0–2 mm', price: 65000 }, { label: '0–5 mm', price: 75000 } ] },
    { id: 'gravel',  img: 'photo-1781516273234-fbf243627ca0', density: 1.60,
      fractions: [ { label: '5–20 mm', price: 115000 }, { label: '20–40 mm', price: 105000 }, { label: '40–70 mm', price: 95000 } ] },
    { id: 'crushed', img: 'photo-1774284982500-8445b02b667c', density: 1.45,
      fractions: [ { label: '5–10 mm', price: 175000 }, { label: '5–20 mm', price: 165000 }, { label: '20–40 mm', price: 150000 } ] },
    { id: 'rocks',   img: 'photo-1620914695139-9507be60a425', density: 1.60,
      fractions: [ { label: '100–300 mm', price: 120000 }, { label: '300+ mm', price: 130000 } ] },
    { id: 'pgs',     img: 'photo-1604178449672-3e7d72d5a09a', density: 1.65,
      fractions: [ { label: '0–70 mm', price: 60000 } ] },
    { id: 'pebbles', img: 'photo-1783814112785-1d47d1e5d3b9', density: 1.60,
      fractions: [ { label: '20–40 mm', price: 140000 }, { label: '40–70 mm', price: 150000 } ] }
  ],

  /* ---------- Trucks ----------
     cost of one trip = base + perKm × distance (km, one way)          */
  trucks: [
    { id: 'howo',    name: 'HOWO',    tons: 25, m3: 16,  base: 300000, perKm: 11000 },
    { id: 'shacman', name: 'Shacman', tons: 30, m3: 20,  base: 350000, perKm: 13000 },
    { id: 'kamaz',   name: 'KAMAZ',   tons: 15, m3: 10,  base: 220000, perKm: 8500 },
    { id: 'mini',    name: 'Mini',    tons: 5,  m3: 3.5, base: 150000, perKm: 5000 }
  ],

  /* ---------- Delivery regions: approx. road distance from the quarry (km) ---------- */
  regions: {
    SI: 35,   // Sirdaryo region (Gulistan)
    TO: 80,   // Tashkent region (Nurafshon)
    TK: 110,  // Tashkent city
    JI: 145,  // Jizzakh
    SA: 245,  // Samarkand
    NG: 320,  // Namangan
    FA: 330,  // Fergana
    AN: 400,  // Andijan
    QA: 410,  // Kashkadarya (Karshi)
    NW: 415,  // Navoiy
    BU: 515,  // Bukhara
    SU: 620,  // Surkhandarya (Termez)
    XO: 960,  // Khorezm (Urgench)
    QR: 1110  // Karakalpakstan (Nukus)
  }
};
