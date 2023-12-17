import NamKhoaIcon from "../../../assets/namkhoaicon.png";
import PhuKhoaIcon from "../../../assets/phukhoaicon.png";
import GanIcon from "../../../assets/ganicon.png";
import XuongIcon from "../../../assets/xuongicon.png";
import DaDayIcon from "../../../assets/dadayicon.png";
import VectorUnder from "../../../assets/vectorUnderline.png";

export default function Categories() {
  const categories = [
    {
      _id: 1,
      name: "Bổ gan",
      child: () => <img src={GanIcon} />,
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
    {
      _id: 4,
      name: "Phụ khoa",
      child: () => <img src={PhuKhoaIcon} />,
    },
    {
      _id: 5,
      name: "Nam khoa",
      child: () => <img src={NamKhoaIcon} />,
    },
  ];
  return (
    <div className="list_cats_product">
      <h4>DANH MỤC SẢN PHẨM</h4>
      <div>
        <img src={VectorUnder} alt="vector under thh" style={{width: 'auto'}} />
      </div>
      <div className="show_list_cats_product">
          {categories.map((i) => (
            <div className="card_cat_product" key={i._id}>
                 <div>
                    {i.child()}
                 </div>
                 <p>{i.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
