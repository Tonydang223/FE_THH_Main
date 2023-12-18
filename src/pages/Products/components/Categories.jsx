import BloodIcon from "../../../assets/bloodLiquid.png";
import XuongIcon from "../../../assets/xuongicon.png";
import DaDayIcon from "../../../assets/dadayicon.png";
import MedicineIcon from "../../../assets/medicineImg.png";
import VectorUnder from "../../../assets/vectorUnderline.png";
import PropTypes from "prop-types";

export default function Categories(props) {
  const categories = [
    {
      _id: 1,
      name: "Mỡ máu",
      child: () => <img src={BloodIcon} />,
    },
    {
      _id: 2,
      name: "Dạ dày",
      child: () => <img src={DaDayIcon} />,
    },
    {
      _id: 3,
      name: "Xương khớp",
      child: () => <img src={XuongIcon} />,
    },
  ];
  return (
    <div className="list_cats_product">
      <h4>DANH MỤC SẢN PHẨM</h4>
      <div>
        <img
          src={VectorUnder}
          alt="vector under thh"
          style={{ width: "auto" }}
        />
      </div>
      <div className="show_list_cats_product">
          <div
            className="card_cat_product"
            onClick={() => props.setFilter('all')}
          >
            <div><img src={MedicineIcon} /></div>
            <p>Tất cả</p>
          </div>
        {categories.map((i) => (
          <div
            className="card_cat_product"
            key={i._id}
            onClick={() => props.setFilter(i.name)}
          >
            <div>{i.child()}</div>
            <p>{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Categories.propTypes = {
  setFilter: PropTypes.func,
  filter: PropTypes.string,
};
