import { useState } from 'react';
import Product from './Product';
import '../styles/ProductList/ProductList.css';

interface ProductData {
  id: number;
  name: string;
  price: number;
  stock: number;
  image_url: string;
  category: string;
}

interface ProductListProps {
  products: ProductData[];
  itemsPerPage?: number;
}

function ProductList({ products, itemsPerPage = 8 }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="product-list-wrapper">
      <div className="product-list">
        {currentProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-btn ${currentPage === page ? 'pagination-btn--active' : ''}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="pagination-btn"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
