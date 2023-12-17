import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Button} from 'antd';
import moment from 'moment';
import parse from "html-react-parser";
import './Blog.scss';

export default function BlogDetail() {
  const detail = {
    _id: 1,
    title: "Lorem is spum isor lopiopnnn",
    desc: '<figure class="image"><img style="aspect-ratio:800/534;" src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435383/editors/1-Interesting-Facts-about-Big-Ben-04_800x534_edspcj.jpg" width="800" height="534"></figure><h3>Điều trị</h3><p style="text-align:justify;"><span style="color:hsl(0,0%,0%);">Điều trị Đông y gồm có phương pháp châm cứu, các thuốc uống hoặc dùng ngoài da, và cả xoa bóp. Phương pháp châm cứu dựa trên hệ thống kinh mạch được miêu tả chi tiết với hàng trăm huyệt trên cơ thể.</span></p><p style="text-align:justify;"><span style="color:hsl(0,0%,0%);">Các huyệt và các đường kinh mạch có mối liên hệ với các tạng, phủ trong cơ thể, để điều trị các rối loạn ở tạng phủ nào, rối loại kiểu nào thì can thiệp vào các huyệt tương ứng và một số huyệt khác để hỗ trợ nếu cần thiết.</span></p><p style="text-align:justify;"><span style="color:hsl(0,0%,0%);">Điều đặc biệt là hệ thống các huyệt, kinh mạch đó không thể dùng các phương pháp giải phẫu, sinh lý của Tây y để miêu tả được, tuy rằng trong thời đại ngày nay, châm cứu được sử dụng như một phương pháp gây vô cảm (gây tê) trong một số cuộc phẫu thuật (Đông Tây y kết hợp).</span></p><h3 style="text-align:justify;">Liệu pháp</h3><p style="text-align:justify;"><span style="color:hsl(0,0%,0%);">Các huyệt và các đường kinh mạch có mối liên hệ với các tạng, phủ trong cơ thể, để điều trị các rối loạn ở tạng phủ nào, rối loại kiểu nào thì can thiệp vào các huyệt tương ứng và một số huyệt khác để hỗ trợ nếu cần thiết.</span></p><p style="text-align:justify;"><span style="color:hsl(0,0%,0%);">Điều đặc biệt là hệ thống các huyệt, kinh mạch đó không thể dùng các phương pháp giải phẫu, sinh lý của Tây y để miêu tả được, tuy rằng trong thời đại ngày nay, châm cứu được sử dụng như một phương pháp gây vô cảm (gây tê) trong một số cuộc phẫu thuật (Đông Tây y kết hợp).</span></p>',
    created_by: "tstranhoanghai.pmkt@gmail.com",
    thumbnail: {
      uid: "rc-upload-1701682832406-17",
      url: "http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg",
    },
    isDeleted: false,
    createdAt: "2023-12-04T09:45:41.004+00:00",
    updatedAt: "2023-12-10T13:35:11.290+00:00",
  };
  return (
    <div className="blogDetWrap container">
      <div className="row">
        <div className="col-8">
          <div className="author">
            <div>
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
            </div>
            <div>
              <h5>Nhà thuốc Nam Y Đường</h5>
              <p>{moment(detail.createdAt).format('LL')}</p>
            </div>
          </div>
          <div className="content">
             {parse(detail.desc)}
          </div>
          <div className="tags">
            <ul>
              <li>Đông Y</li>
              <li>Phương pháp</li>
              <li>Liệu trình</li>
              <li>Khám bệnh</li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="blog_moreLeft1">
            <div className="blog_moreLeft_title">
              <h4>Liên hệ thắc mắc</h4>
            </div>
            <div className="blog_moreLeft_content">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              <ul>
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  0908789789 - 0980789789
                </li>
                <li>
                  <span>
                    <MdEmail />
                  </span>{" "}
                  tstranhoanghai.pmkt@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="blog_moreLeft2">
            <div className="blog_moreLeft_title">
              <h4>Bài viết mới nhất</h4>
            </div>
            <div className="blog_moreLeft_content">
              <div className="box_blogsm">
                <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                <h5>Bai post 1</h5>
              </div>
              <div className="box_blogsm">
                <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                <h5>Bai post 1</h5>
              </div>
              <div className="box_blogsm">
                <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                <h5>Bai post 1</h5>
              </div>
              <div className="box_blogsm">
                <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                <h5>Bai post 1</h5>
              </div>
            </div>
          </div>
          <div className="blog_moreLeft3">
            <div className="blog_moreLeft_title">
              <h4>Tư vấn qua Zalo</h4>
            </div>
            <div className="blog_moreLeft_content">
                <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                <div>
                  <Button>Zalo</Button>
                </div>  
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
