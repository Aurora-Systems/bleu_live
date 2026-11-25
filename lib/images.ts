// Web assets served from the Bleu CDN (Cloudflare R2).
const CDN = 'https://bleu.clipond.com/web_assets'

/** Photography — African business / SME scenes, used full-bleed (object-cover). */
export const photos = {
  storeOwners: `${CDN}/104031.jpg`, // two owners handing over produce in an eco-store
  businesswoman: `${CDN}/10869.jpg`, // professional in a black blazer, smiling
  thriftEntrepreneur: `${CDN}/2150627964.jpg`, // young owner in a second-hand clothing shop
  suitedFounder: `${CDN}/9410.jpg`, // suited founder holding a phone
}

/** App mockups — phone frames on transparent background, shown with object-contain. */
export const mockups = {
  splash: `${CDN}/mockup_1.png`, // Bleu Finance logo splash
  borders: `${CDN}/mockup_2.png`, // "Banking Without Borders" splash
  home: `${CDN}/mockup_3.png`, // home dashboard: virtual card, balance, history
  loan: `${CDN}/mockup_4.png`, // loan screen: amount slider, terms, disbursement
}
