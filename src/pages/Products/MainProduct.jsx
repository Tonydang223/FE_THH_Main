import "./Product.scss";
import BannerProduct from "../../assets/bannerProduct.png";
import Categories from "./components/Categories"
import Products from "./components/Products"

export default function MainProduct() {
  return (
    <div className="wrapProduct">
      <div className="banner">
        <img src={BannerProduct} alt="banner product tran hoang hai" />
        <div className="content">
          <p>Dược phẩm</p>
          <h4>CHẤT LƯỢNG HÀNG ĐẦU</h4>
        </div>
      </div>
      <div className="advertizing_products">
        <div>
           <img src={BannerProduct} alt="banner product tran hoang hai" />
        </div>
        <div>
           <img src={BannerProduct} alt="banner product tran hoang hai" />
        </div>
      </div>
      <Categories />
      <Products />
    </div>
  );
}
