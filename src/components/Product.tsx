import '../styles/Product/Product.css';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  stock: number;
  image_url: string;
  category: string;
}

function Product({ id, name, price, stock, image_url, category }: ProductProps) {
  return (
    <div className="product" key={id}>
      <div className="product-image-wrapper">
        <img src={image_url} alt={name} className="product-image" />
        <span className="product-category">{category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <p className="product-stock">{stock > 0 ? `${stock} en stock` : 'Sin stock'}</p>
      </div>
    </div>
  );
}

export default Product;
