import { useGetProductQuery } from "../product.service";
import VectorUnder from "../../../assets/vectorUnderline.png";
import { List, Button, Skeleton } from "antd";
import BannerAdvartizing from '../../../assets/bannerProduct.png';
import {useNavigate} from 'react-router-dom';



export default function Products() {
  const navigate = useNavigate();

  const { data, isFetching } = useGetProductQuery();
  
  const newdas = Array.from({ length: 120 }).map((_, i) => {
    return {
      _id: i,
      categories: data && data[0].categories,
      imgs: data && data[0].imgs,
      discount: data && data[0].discount,
      title: data && data[0].title,
      price: data && data[0].price + i,
    };
  });

  console.log("🚀 ~ file: Products.jsx:20 ~ newdas ~ newdas:");

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
              dataSource={newdas}
              renderItem={(item) => (
                <div className="card_product" onClick={() => navigate('/product/detail/1')}>
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
                    <Button className="btn_card_product">Liên hệ</Button>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="productAdvertizing">
            <h5>Sản phẩm bán chạy</h5>
            <div className="list_productRun">
              {newdas
                .sort((a, b) => b.price - a.price)
                .slice(0, 4)
                .map((i) => (
                  <>
                    <div className="box_list_productRun">
                      <img src={i.imgs[0].url} />
                      <div>
                        <p>
                          fasfasfasfasfasfasfasfasfasfasfas fasfasfasfasfasfas
                          fasfasfasfasfasfas fasfasfasfasfasfas
                        </p>
                        <p>
                          {Number(i.price).toLocaleString("en-US")}₫{" "}
                          <span>/Hộp</span>
                        </p>
                        <a>Liên Hệ</a>
                      </div>
                    </div>
                  </>
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
