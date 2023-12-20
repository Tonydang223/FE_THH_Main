import { useGetProductQuery } from "../product.service";
import VectorUnder from "../../../assets/vectorUnderline.png";
import { List, Button, Skeleton } from "antd";
import BannerAdvartizing from '../../../assets/bannerProduct.png';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState, } from "react";
import PropTypes from "prop-types";



function Products({filter}) {
  
  const navigate = useNavigate();


  const [dataP, setDataP] = useState([]);
  const { data, isFetching } = useGetProductQuery();
  

  useEffect(() => {
      if(data) {
        if (filter !== 'all') {
          let filterNew = [...data];
          filterNew = filterNew.filter(f => f.categories === filter);
          setDataP(filterNew);
        } else {
          setDataP(data);
        }
      }
  }, [isFetching, filter])


  return (
    <div className="wrap_products">
      <h4>SẢN PHẨM NỔI BẬT</h4>
      <div>
        <img
          src={VectorUnder}
          alt="vector under thh"
          style={{ width: "auto" }}
        />
      </div>
      {!isFetching && data ? (
        <div className="showlist_products">
          <div className="productLists">
            <List
              itemLayout="horizontal"
              grid={{ gutter: 16, xl: 4, xxl: 4, lg: 3, md:2, sm: 3, xs: 1 }}
              size="large"
              pagination={{
                pageSize: 16,
                position: "bottom",
                align: "start",
                defaultCurrent: 4,
                hideOnSinglePage: true,
                showQuickJumper: false,
                showSizeChanger: false,
                responsive: true,
                itemRender: (_, type, originalElement) => {
                  if (type === "prev") {
                    return <a>{"<<"} Trước</a>;
                  }
                  if (type === "next") {
                    return <a>Sau {">>"}</a>;
                  }
                  return originalElement;
                },
              }}
              dataSource={dataP}
              renderItem={(item) => (
                <div className="card_product" onClick={() => navigate(`/product/detail/${item._id}`)}>
                  {item.discount > 0 && <label>{item.discount}%</label>}
                  <div>
                    <img src={item.imgs[0].url} />
                  </div>
                  <div className="card_product_content">
                    <p>{item.title}</p>
                    <p>
                      {Number(item.price).toLocaleString("en-US")}₫{" "}
                      <span>/Hộp</span>
                    </p>
                  </div>
                  <div className="card_product_btn">
                    <Button className="btn_card_product" onClick={(event) => {
                        event.stopPropagation();
                        // window.open("https://www.youtube.com/watch?v=BNYaSeT2rUE", "_blank");
                    }}>Liên hệ</Button>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="productAdvertizing">
            <h5>Sản phẩm bán chạy</h5>
            <div className="list_productRun">
              {[...data]
                .sort((a, b) => b.price - a.price)
                .slice(0, 4)
                .map((i) => (
                    <div className="box_list_productRun" style={{cursor: 'pointer'}} key={i._id} onClick={() => navigate(`/product/detail/${i._id}`)}>
                      <img src={i.imgs[0].url} />
                      <div>
                        <p>
                          {i.title}
                        </p>
                        <p>
                          {Number(i.price).toLocaleString("en-US")}₫{" "}
                          <span>/Hộp</span>
                        </p>
                        <a onClick={(e) => {
                          e.stopPropagation();
                        }}>Liên Hệ</a>
                      </div>
                    </div>
                ))}
            </div>
            <h5 className="productAdvertizing_p2_title">Dược liệu quý </h5>
            <div className="duoclieu_banner">
                <img src={BannerAdvartizing} />
                <div className="duoclieu_banner_content">
                  <h5>Thảo Mộc Tự Nhiên</h5>
                  <p>Đem lại nguồn lợi to lớn</p>
                  <Button className="duoclieu_banner_btn">Liên hệ</Button>
                </div>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default Products
Products.propTypes = {
  filter: PropTypes.string,
};
