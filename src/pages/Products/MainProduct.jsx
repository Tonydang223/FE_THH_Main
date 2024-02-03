import "./Product.scss";
import BannerProduct from "../../assets/bannerProduct.png";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { useCallback, useState } from "react";
import VectorUnder from "../../assets/vectorUnderline.png";

export default function MainProduct() {
  const [filterV, setFilterV] = useState("all");
  const setFilters = useCallback(
    (name) => {
      setFilterV(name);
    },
    [filterV]
  );

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
        <div className="content_start">
          <h4>GIỚI THIỆU CHUNG VỀ CÁC SẢN PHẨM</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <Categories setFilter={setFilters} />
      <Products filter={filterV} />
    </div>
  );
}
