import React from "react";
import "./Blog.scss";
import VectorUnder from "../../assets/vectorUnderline.png";
import { FaPlay } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'


export default function MainBlog() {
  const navigate = useNavigate();
  return (
    <div className="mainBlogWrap">
      <div className="mainBlog_1">
        <div onClick={() => navigate('/blog/detail/1')}>
          <h4>Lorem is spum loius itolo</h4>
          <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exi officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h4>Lorem is spum loius itolo</h4>
          <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exi officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h4>Lorem is spum loius itolo</h4>
          <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exi officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h4>Lorem is spum loius itolo</h4>
          <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exi officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="mainBlog_2">
        <div className="title_home">
          <p>Một cơ thể khoẻ mạnh</p>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
          <h3>Chuyên mục sức khoẻ cho bạn</h3>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
            <h4>Lorem is spum loiut zaioop</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exi officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-4">
            <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
            <h4>Lorem is spum loiut zaioop</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exi officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-4">
            <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
            <h4>Lorem is spum loiut zaioop</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exi officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-4">
            <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
            <h4>Lorem is spum loiut zaioop</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exi officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-4">
            <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
            <h4>Lorem is spum loiut zaioop</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exi officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-4">
            <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
            <h4>Lorem is spum loiut zaioop</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exi officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="mainBlog_3">
        <div className="title_home">
          <p>Tin tức hôm nay</p>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
          <h3>Bài viết mới nhất</h3>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-flex">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              <div>
                <h4>
                  Lorem is spum loiut zaioop loiut zaioop loiut zaioop loiut
                  zaioop
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip exi officia deserunt mollit anim id
                  est laborum.
                </p>
                <div className="box_author d-flex flex-rows">
                  <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                  <div>
                    <h5>Nhà thuốc Nam Y Đường</h5>
                    <p>12/12/2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="content_top">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />

              <h4>
                Lorem is spum loiut zaioop loiut zaioop loiut zaioop loiut
                zaioop
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip exi officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="box_author d-flex flex-rows">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              <div>
                <h5>Nhà thuốc Nam Y Đường</h5>
                <p>12/12/2023</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="content_top">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />

              <h4>
                Lorem is spum loiut zaioop loiut zaioop loiut zaioop loiut
                zaioop
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip exi officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="box_author d-flex flex-rows">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              <div>
                <h5>Nhà thuốc Nam Y Đường</h5>
                <p>12/12/2023</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="content_top">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />

              <h4>
                Lorem is spum loiut zaioop loiut zaioop loiut zaioop loiut
                zaioop
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip exi officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="box_author d-flex flex-rows">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              <div>
                <h5>Nhà thuốc Nam Y Đường</h5>
                <p>12/12/2023</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="content_top">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />

              <h4>
                Lorem is spum loiut zaioop loiut zaioop loiut zaioop loiut
                zaioop
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip exi officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="box_author d-flex flex-rows">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              <div>
                <h5>Nhà thuốc Nam Y Đường</h5>
                <p>12/12/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBlog_4">
       <div className="title_home">
          <h3>Video</h3>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="ban_vid">
              <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
              <div className="log0_mid_banVid">
                <div>
                  <FaPlay size={30} />
                </div>
              </div>
            </div>
            <div className="content_ban_vid">
              <h5>Lorem is spum lomee</h5>
              <h1>Lorem is spum lomee lomee lomee lomee lomee</h1>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-rows">
              <div className="ban_vid">
                <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                <div className="log0_mid_banVid">
                  <div>
                    <FaPlay size={23} />
                  </div>
                </div>
              </div>
              <div className="content_ban_vid">
                <h5>Lorem is spum lomee</h5>
                <h1>Lorem is spum lomee lomee lomee lomee lomee</h1>
              </div>
            </div>
            <div className="d-flex flex-rows">
              <div className="ban_vid">
                <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                <div className="log0_mid_banVid">
                  <div>
                    <FaPlay size={23} />
                  </div>
                </div>
              </div>
              <div className="content_ban_vid">
                <h5>Lorem is spum lomee</h5>
                <h1>Lorem is spum lomee lomee lomee lomee lomee</h1>
              </div>
            </div>
            <div className="d-flex flex-rows">
              <div className="ban_vid">
                <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
                <div className="log0_mid_banVid">
                  <div>
                    <FaPlay size={23} />
                  </div>
                </div>
              </div>
              <div className="content_ban_vid">
                <h5>Lorem is spum lomee</h5>
                <h1>Lorem is spum lomee lomee lomee lomee lomee</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
