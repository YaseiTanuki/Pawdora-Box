import React from 'react';


const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Giá: {product.price}</p>
      <p>Mô tả: {product.description}</p>
      {/* Thêm các thông tin khác của sản phẩm */}
    </div>
  );
};

export default ProductDetail;