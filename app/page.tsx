import { Layout } from "@/components/layout"
import { HeroBanner } from "@/components/hero-banner"
import { BrandShowcase } from "@/components/brand-showcase"
import { ProductCarousel } from "@/components/product-carousel"

const audioBrands = [
  { name: "Realme", logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/05/realme-logo-freelogovectors.net_.png" },
  { name: "Xiaomi", logo: "https://logos-world.net/wp-content/uploads/2020/07/Xiaomi-Logo-2019-2021.png" },
  { name: "OnePlus", logo: "https://logos-world.net/wp-content/uploads/2023/03/OnePlus-Logo.png" },
  { name: "Portronics", logo: "https://static.wixstatic.com/media/a3eec1_49cff62323d648609344027d212360f9~mv2.jpg/v1/fill/w_536,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Portronics%20gadgets%20delhi.jpg" },
  { name: "boAt", logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/11/boat-logo-freelogovectors.net_.png" },
  { name: "Noise", logo: "https://i.pinimg.com/736x/b7/0d/5e/b70d5e72879fe5781b3cea722071edd7.jpg" },
  { name: "Honeywell", logo: "https://1000logos.net/wp-content/uploads/2017/12/Honeywell-Logo.png" },
  { name: "Promate", logo: "https://manatal-backend-public-assets.s3.amazonaws.com/media/career_portal_logo_direct_upload/30bda629-38fb-4235-83be-0ca3868abc9f_Promate%20Logo-PNG%20Format-S.png" },
  { name: "Just Corseca", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtvpQpAaFT7S5mr0LJZlXMXofePO1BUGHQEw&s" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Samsung_logo_wordmark.svg" },
]

const phoneBrands = [
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Oppo", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/OPPO_logo_2019.svg" },
  { name: "Realme", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Realme_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo_%282021%29.svg" },
  { name: "OnePlus", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/OnePlus_logo.svg" },
  { name: "Tecno", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Tecno_Mobile_logo.svg" },
  { name: "Vivo", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Vivo_logo.svg" },
  { name: "Nothing", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Nothing_logo.svg" },
  { name: "Itel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Itel_logo.svg" },
];




const bestSellingPhones = [
  {
    name: "Redmi 13C 5G 8GB 256GB Star...",
    price: 13499,
    originalPrice: 13499,
    image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-13c-5g.png",
    discount: 0,
  },
  {
    name: "Apple iPhone 15 128GB Blue",
    price: 56168,
    originalPrice: 69900,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1695082930655",
    discount: 20,
  },
  {
    name: "Vivo T3 Lite 5G 6GB 128GB V...",
    price: 11499,
    originalPrice: 14499,
    image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-t3-lite.jpg",
    discount: 18,
  },
  {
    name: "Apple iPhone 15 256GB Black",
    price: 65837,
    originalPrice: 79900,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-black-select?wid=470&hei=556&fmt=png-alpha&.v=1695082930727",
    discount: 20,
  },
  {
    name: "Apple iPhone 13 Starlight ...",
    price: 41146,
    originalPrice: 59600,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629842709000",
    discount: 22,
  },
  {
    name: "Apple iPhone 16 128GB Pink",
    price: 68365,
    originalPrice: 79900,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pink-select?wid=470&hei=556&fmt=png-alpha&.v=1695082930678",
    discount: 7,
  },
];


export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <BrandShowcase title="Explore Top Audio Brands" brands={audioBrands} />
      <ProductCarousel title="Newly Launched and Trending" products={bestSellingPhones} />
      <BrandShowcase title="Shop Phones by Brand" brands={phoneBrands} />
      <ProductCarousel title="Best Selling Phones" products={bestSellingPhones} />
    </Layout>
  )
}

