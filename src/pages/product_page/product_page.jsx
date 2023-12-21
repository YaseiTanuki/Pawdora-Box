import React, { useState } from 'react';
import './product_page.scss';
import Product from './product';
import Filter from './filter';
import Header from '../../components/big_components/header/header';
import Footer from '../../components/big_components/footer/footer';
import productImage from '../../../public/img/home-product/suatam.png'
import main1_1 from '../../../public/img/home-product/meo.png'
import main1 from '../../../public/img/home-product/hatkho.jpg'
import main2 from '../../../public/img/home-product/yem.png'
import main3 from '../../../public/img/home-product/banhquy.png'
import main4 from '../../../public/img/home-product/thuoc.png'
import main5 from '../../../public/img/home-product/lac.png'
import main6 from '../../../public/img/home-product/xucxich.png'
import main7 from '../../../public/img/home-product/balo.png'
import main8 from '../../../public/img/home-product/khan.png'
import main9 from '../../../public/img/home-product/banhquy2.png'
import main10 from '../../../public/img/home-product/batan.png'
import main11 from '../../../public/img/home-product/banchai.png'
import { useContext } from 'react';
import CartContext from '../../../hooks/cart_context';

const productsData = [
  { id: 1, name: 'Sữa tắm JOYCE & DOLLS hương trà xanh cho chó mèo', category: '', price: 200000,price2:'175000', img: productImage, discountPrice: 170000, img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
  { id: 2, name: 'Yếm cổ đáng yêu cho chó mèo', category: 'Phụ kiện', price: 50000, price2:40000, img: main2, discountPrice: 35000, img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0 ,detail1:'Yếm cổ hoạ tiết dễ thương cho chó mèo. ', detail2:'Màu sắc đa dạng, thiết kế bắt mắt. ',detail3:'Có dây buộc tiện lợi, tăng thêm vẻ đáng yêu cho thú cưng của bạn.'},
  { id: 3, name: 'Thức ăn hạt khô KitchenFlavor Nature Gourmet cho chó', category: 'Thức ăn', price: 250000,price2: 230000, img: main1, discountPrice: 210000, img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Thành phần: Bột thịt gà, ngô, lúa mì, mỡ vịt, đậu tương khô, bột cá, dầu cá, cá hồi đông lạnh (1,0%), cà rốt (1,0%), đậu xanh (0,5%), súp lơ khô, hạt cải khô, bơ khô, hạt rong biển.', detail2:'Chỉ tiêu chất lượng: Đạm ≥ 20%; Béo thô ≥ 12%; Xơ thô ≤ 5%; Tro thô < 10%; Độ ẩm ≤ 10%.',detail3:'Công dụng:Cá hồi chứa axit béo không bão hòa Ω3, bổ sung dinh dưỡng cho lông bóng mượt.'},
  { id: 4, name: 'Bánh quy ngũ cốc cho chó mèo', category: 'Thức ăn', price: 40000,price2:30000, img: main3, discountPrice: 27000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Bánh quy ngũ cốc cho chó mèo vừa là một loại thức ăn có chứa nhiều vitamin, canxi, khoáng chất có thể thúc đẩy sự phát triển của xương và răng, vừa là một loại dụng cụ có thể dùng để huấn luyện các boss vâng lời hơn.', detail2:'Hương vị thơm ngon, hấp dẫn, giúp kích thích sự thích thú hào hứng và hơn nữa nó bổ sung nhiều giá trị dinh dưỡng thiết yếu cho các boss.',detail3:'' },
  { id: 5, name: 'Canxi Mỹ PetAg Calcium Phosphorus cho chó mèo', category: 'Thuốc và dinh dưỡng', price: 300000,price2:275000, img: main4, discountPrice: 265000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Calcium Phosphorus là viên nhai dạng nén bổ sung canxi cho chó mèo của PetAg, Mỹ.', detail2:'Công dụng: Calcium Phosphorus là dạng viên nhai bột nén với công thức kết hợp cân bằng tỉ lệ Canxi và Phốt-pho, bổ sung thêm vitamin D3 giúp cơ thể thú nuôi hấp thụ được hàm lương canxi tối đa để phát triển khung xương chắc khoẻ, cũng như đáp ứng đủ nhu cầu canxi cho thú nuôi trong thời kì mang thai.sinh sản, nuôi con... Calcium Phosphorus có vị sữa hấp dẫn dễ ăn.',detail3:'Thành phần: Dicalcium phosphate, men bia khô, sữa khô, protein đậu nành thủy phân, magnesi stearat, và vitamin D3' },
  { id: 6, name: 'Vòng cổ vải kèm chuông nhiều hoạ tiết', category: 'Phụ kiện', price: 50000,price2:40000, img: main5, discountPrice: 35000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Màu sắc: đỏ', detail2:'Chất liệu: dây đan tay kèm mặt dây mạ vàng.',detail3:'Thiết kế dễ thương, màu sắc bắt mắt.' },
  { id: 7, name: 'Xúc xích nhiều vị cho chó mèo thanh 15g', category: 'Thức ăn', price: 30000, price2:25000,img: main6, discountPrice: 20000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Xúc xích cho thú cưng chứa Vitamin & khoáng chất cho cơ thể thú cưng luôn khỏe mạnh, linh hoạt.', detail2:'Xúc xích cũng giống như những loại thức ăn cho thú cưng khác chứa chất xơ cho hệ thống tiêu hóa tốt, tăng cường khả năng hấp thu chất dinh dưỡng, góp phần vào sự phát triển đồng đều cho thú cưng.',detail3:'Sản phẩm được chế biến từ câc nguyên liệu tươi tự nhiên chất lượng cao, được kiểm tra nghiêm ngặt với đầy đủ dưỡng chất giúp các bé ăn ngon.' },
  { id: 8, name: 'Balo phi hành gia cho thú cưng hình Gà con', category: 'Đồ dùng', price: 200000,price2:1850000, img: main7, discountPrice: 170000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Chất liệu: Nhựa cao cấp PVC không thấm nước, rộng, thoáng khí, có thêm cửa bên, không gian thoải mái, giúp các bé dễ chịu hơn. Đặc biệt phù hợp với cả các bé sợ khi ra ngoài, đi chơi hay chích ngừa.', detail2:'Balo phi hành gia cho chó mèo là sản phẩm linh động cho khách hàng khi mang theo thú cưng của mình đi chơi.',detail3:'Balo phi hành gia có thiết kế thông minh, thông thoáng giúp cho thú cưng của bạn thoải mái và an toàn khi di chuyển. Lót tặng kèm ngay bên trong Balo phi hành gia mà bạn không cần phải mua thêm.' },
  { id: 9, name: 'Khăn tắm siêu thấm hút cho chó mèo', category: 'Phụ kiện', price: 50000,price2:45000, img: main8, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Khăn Clean Cham chất liệu poly tổng hợp, đa chức năng sử dụng tiện lợi thích hợp cho việc chăm sóc thú cưng và vệ sinh nhà cửa của các chủ nuôi. Khăn siêu thấm có độ mềm mại, có khả năng hút bụi, thấm nước cực tốt - gấp 10 lần so với khăn thông thường.', detail2:' Với chất liệu poly tổng hợp độ bền cao Khăn tắm chó mèo Clean Cham có khả năng lau khô thú cưng một cách nhanh chóng và tái sử dụng nhiều lần giúp tiết kiệm chi phí. Khăn siêu thấm Clean Cham có kích thước rộng, dễ dàng giặt sạch sẽ lông thú cưng.',detail3:'HDSD: chất liệu poly tổng hợp trước khi xử dụng cần nhúng nước để làm ẩm và mềm khăn, sau đó vắt khô rồi sử dụng, không phơi trực tiếp dưới ánh nắng.' },
  { id: 10, name: 'Bánh quy cho chó mèo vị Cá hỗ trợ bóng mượt lông', category: 'Thức ăn', price: 50000,price2:40000, img: main9, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Bánh quy vị Cá dành cho chó mèo hỗ trợ đẹp da, bóng mượt lông và kích thích vị giác.', detail2:'Bánh quy vị Cá vừa là một loại thức ăn có chứa nhiều vitamin, canxi, khoáng chất có thể thúc đẩy sự phát triển của xương và răng, vừa là một loại dụng cụ có thể dùng để huấn luyện các boss vâng lời hơn.',detail3:'Hương vị thơm ngon, hấp dẫn, giúp kích thích sự thích thú hào hứng và hơn nữa nó bổ sung nhiều giá trị dinh dưỡng thiết yếu cho các boss.' },
  { id: 11, name: 'Bát ăn hình trứng ốp la cho chó mèo', category: 'Đồ dùng', price: 50000,price2:40000, img: main10, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Bát ăn chống lật cho chó mèo hình trứng ốp la. Chất liệu nhựa PP dày dặn, đạt chuẩn an toàn sử dụng thực phẩm và có tính bền nhiệt rất cao.', detail2:'Thiết kế lòng bát rời, dễ dàng vệ sinh.',detail3:'Các chốt cao su chống trơn trượt đi kèm được gắn dưới đế giúp cố định bát với sàn nhà, tạo thoải mái cho mèo khi ăn.' },
  { id: 12, name: 'Bàn chải cao su tắm massage cho chó mèo', category: 'Đồ dùng', price: 50000,price2:40000, img: main11, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Thiết kế đặc biệt dạng hình vuông với bề mặt gồm nhiều gai silicon nhỏ. Vừa tắm, vừa massage cho thú cưng, đồng thời loại bỏ lông rụng, giữ cho thú cưng của bạn luôn sạch sẽ gọn gàng.', detail2:'Được làm từ chất liệu silicone cao cấp nên cực kì mềm mại, êm ái, đàn hồi và an toàn cho thú cưng.',detail3:'Điểm đặc biệt là phần thân của bàn chải có chức năng chứa sữa tắm, chỉ việc mở phần nắp đậy bên trên ra, rót sữa tắm vào rồi đóng chặt nắp.' },
  { id: 13, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000,price2:40000, img: productImage, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
  { id: 14, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000,price2:40000, img: productImage, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
  { id: 15, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000,price2:40000, img: productImage, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
  { id: 16, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000,price2:40000, img: productImage, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
  { id: 17, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000,price2:40000, img: productImage, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
  { id: 18, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000,price2:40000, img: productImage, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
  { id: 19, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000,price2:40000, img: productImage, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
  { id: 20, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000,price2:40000, img: productImage, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
  { id: 21, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000,price2:40000, img: productImage, discountPrice: 40000,img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Với công thức dạng đậm đặc, nên sử dụng pha loãng 6 – 8 lần.', detail2:'Trong môt cái bình không, cho một phần sữa tắm vào, thêm 6 – 8 phần nước sạch vào pha loãng.',detail3:'Xịt trực tiếp sữa tắm sau khi được pha loãng lên lông chó đã được làm ướt, nhẹ nhàng xoa đều.' },
];

const categories = [
  'Tất cả',
  'Thức ăn',
  'Đồ uống',
  'Đồ dùng',
  'Phụ kiện',
  'Thuốc và dinh dưỡng', 
  'Kiểm tra',
  'Tỉa lông',
  'Tắm',
  'Trừ bọ chét, ve',
  'Tiêm ngừa',
  'Khách sạn thú cưng',
];

const midpoint = Math.ceil(categories.length / 2);

const categories1 = categories.slice(0, midpoint);
const categories2 = categories.slice(midpoint);

const ProductPage = () => {
  const [filteredCategory, setFilteredCategory] = useState('Tất cả');
  const [sortBy, setSortBy] = useState('Giá tăng dần');
  const [currentPage, setCurrentPage] = useState(1);

  const {cartProduct, setCartProduct} = useContext(CartContext)

  const itemsPerPage = 9;
  const sortedProducts = [...productsData].sort((a, b) => {
    switch (sortBy) {
      case 'Giá tăng dần':
        return a.discountPrice - b.discountPrice;
      case 'Giá giảm dần':
        return b.discountPrice - a.discountPrice;
      default:
        return 0;
    }
  });

  const filteredAndSortedProducts = sortedProducts.filter(
    (product) =>
      filteredCategory === 'Tất cả' || product.category === filteredCategory
  );

  const totalProducts = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalProducts - 1);
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex + 1);

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
    setCurrentPage(1); // Reset to the first page when the category changes
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1); // Reset to the first page when the sorting changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (productId) => {
    var newCartProduct = cartProduct
    newCartProduct.push(productId)
    setCartProduct(newCartProduct)
    // Thêm logic để xử lý thêm vào giỏ hàng
    console.log(`Thêm sản phẩm có ID ${productId} vào giỏ hàng`);
  };

  const handleBuyNow = (productId) => {
    // Thêm logic để xử lý mua ngay
    console.log(`Mua ngay sản phẩm có ID ${productId}`);
  };

  return (
    <>
      <Header showNav={true} />
      <div className="app">
        <div className="filter_container">
          <Filter
            categories1={categories1}
            categories2={categories2}
            onChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
        </div>
        <div className="products">
          <div className='sort_container'>
            <select className='list' onChange={(e) => handleSortChange(e.target.value)}>
              <option value="Giá tăng dần">Giá tăng dần</option>
              <option value="Giá giảm dần">Giá giảm dần</option>
            </select>
          </div>
          <div className='product_list2'>
            {currentProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={page === currentPage ? 'active' : ''}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;

export { productsData };