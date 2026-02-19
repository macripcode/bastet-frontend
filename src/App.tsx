import Navbar from './components/Navbar'
import Slider from './components/Slider'
import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import './App.css'

const slides = [
  { id: 1, image_url: '/slider/slide1.jpg', title: 'Mesa Artesanal', subtitle: 'Madera de roble macizo' },
  { id: 2, image_url: '/slider/slide2.jpg', title: 'Silla Colonial', subtitle: 'Diseño clásico, confort moderno' },
  { id: 3, image_url: '/slider/slide3.jpg', title: 'Vitrina Elegante', subtitle: 'Exhibe lo que más valoras' },
]

const products = [
  {
    id: 1,
    name: 'Mesa de Roble',
    price: 899.99,
    stock: 5,
    image_url: '/products/mesa-roble.jpg',
    category: 'Mesas',
    description: 'Mesa artesanal tallada a mano en madera de roble macizo.',
    characteristics: ['Artesanal', 'Barnizado', 'Resistente'],
    materials: ['Roble macizo', 'Barniz natural'],
    measures: { width_cm: 180, height_cm: 75, depth_cm: 90, weight_kg: 45 },
  },
  {
    id: 2,
    name: 'Silla Colonial',
    price: 349.99,
    stock: 12,
    image_url: '/products/silla-colonial.jpg',
    category: 'Sillas',
    description: 'Silla de estilo colonial con tapizado en cuero genuino.',
    characteristics: ['Tapizado', 'Ergonómica'],
    materials: ['Madera de cedro', 'Cuero genuino'],
    measures: { width_cm: 55, height_cm: 95, depth_cm: 50, weight_kg: 8 },
  },
  {
    id: 3,
    name: 'Vitrina Clásica',
    price: 1199.99,
    stock: 3,
    image_url: '/products/vitrina.jpg',
    category: 'Vitrinas',
    description: 'Vitrina con puertas de vidrio y estructura de madera oscura.',
    characteristics: ['Vidrio templado', 'Con llave'],
    materials: ['Nogal', 'Vidrio templado'],
    measures: { width_cm: 100, height_cm: 200, depth_cm: 40, weight_kg: 70 },
  },
  {
    id: 4,
    name: 'Cómoda Vintage',
    price: 679.99,
    stock: 7,
    image_url: '/products/comoda.jpg',
    category: 'Cómodas',
    description: 'Cómoda de 4 cajones con herrajes dorados estilo vintage.',
    characteristics: ['4 cajones', 'Herrajes dorados'],
    materials: ['Pino macizo', 'Herraje metálico'],
    measures: { width_cm: 90, height_cm: 110, depth_cm: 45, weight_kg: 32 },
  },
]

function App() {
  return (
    <>
      <Navbar />
      <Slider slides={slides} />
      <ProductList products={products} itemsPerPage={8} />
      <AboutUs />
    </>
  )
}

export default App
