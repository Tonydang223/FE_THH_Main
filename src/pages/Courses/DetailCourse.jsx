import { useState } from "react";
import { IoTimeSharp } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import "./Course.scss";
import { Button } from "antd";
import VectorUnder from "../../assets/vectorUnderline.png";
import parse from "html-react-parser";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { closeGlobal, showGlobal } from "../../components/Modals/ModalFirm";
import ReactPlayer from "react-player";

export default function DetailCourse() {
  const des = `<h2><span style="color:hsl(0, 0%, 0%);">Lợi ích khi học khoá này:</span></h2><ul><li><span style="color:hsl(0, 0%, 0%);font-family:Arial, Helvetica, sans-serif;">Lợi ích 1</span></li><li><span style="color:hsl(0, 0%, 0%);font-family:Arial, Helvetica, sans-serif;">Lợi ích 2</span></li><li><span style="color:hsl(0, 0%, 0%);font-family:Arial, Helvetica, sans-serif;">Lợi ích 3</span></li><li><span style="color:hsl(0, 0%, 0%);font-family:Arial, Helvetica, sans-serif;">Lợi ích 4</span></li></ul><h4><span style="color:hsl(0, 0%, 0%);"><i><strong>The #1 bestselling JavaScript&nbsp;course on Udemy!</strong></i></span></h4><p><span style="color:hsl(0, 0%, 0%);"><i>"Really, really well made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding. I found the lectures were paced perfectly -- Jonas doesn't skip over anything that might be useful to a JS developer"</i> — Carson Bartholomew</span></p><p><span style="color:hsl(0, 0%, 0%);">JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world.</span></p><p><span style="color:hsl(0, 0%, 0%);">That's why you want to learn JavaScript too. And you came to the right place!</span></p><p><span style="color:hsl(0, 0%, 0%);"><strong>Why is this the right JavaScript course for you?</strong></span></p><p><span style="color:hsl(0, 0%, 0%);"><i>This is the most complete and in-depth JavaScript course on Udemy (and maybe the entire internet!). It's an all-in-one package that will take you from the very fundamentals of JavaScript, all the way to building modern and complex applications.</i></span></p><p><span style="color:hsl(0, 0%, 0%);">You will learn modern JavaScript from the very beginning, step-by-step. I will guide you through <strong>practical and fun code examples</strong>, <strong>important theory</strong> about how JavaScript works behind the scenes, and <strong>beautiful and complete projects</strong>.</span></p><p><span style="color:hsl(0, 0%, 0%);">You will become ready to continue learning advanced <strong>front-end frameworks</strong> like React, Vue, Angular, or Svelte.</span></p><p><span style="color:hsl(0, 0%, 0%);">You will also learn how to think like a developer, how to plan application features, how to architect your code, how to debug code, and a lot of other real-world skills that you will need in your developer job.</span></p><p><span style="color:hsl(0, 0%, 0%);">And unlike other courses, this one actually contains beginner, intermediate, advanced, and even expert topics, so <strong>you don't have to buy any other course in order to master JavaScript</strong> from the ground up!</span></p><p><span style="color:hsl(0, 0%, 0%);">But... You don't have to go into all these topics. This is a huge course, because, after all, it's "The Complete JavaScript Course". In fact, it's like many courses in one! <strong>But you can become an excellent developer by watching only parts of the course</strong>. That's why I built this course in a very modular way, and designed pathways that will take you through the course faster.</span></p><p><span style="color:hsl(0, 0%, 0%);"><i>By the end of the course, you will have the knowledge and confidence that you need in order to ace your job interviews and become a professional developer.</i></span></p><p><span style="color:hsl(0, 0%, 0%);"><strong>Why am I the right JavaScript teacher for you?</strong></span></p><p><span style="color:hsl(0, 0%, 0%);">My name is Jonas, I'm an experienced web developer and designer, and one of Udemy's top instructors. I have been teaching this bestselling course since 2016 to over 850,000 developers, always listening to feedback and understanding exactly how students actually learn.</span></p><p><span style="color:hsl(0, 0%, 0%);">I know how students learn JavaScript and what they need in order to master it. And with that knowledge, I designed the ideal course curriculum. <strong>It's a unique blend of real-world projects, deep explanations, theory lectures, and challenges</strong>, that will take you from zero to an expert and confident JavaScript developer in just a couple of weeks.</span></p><p><span style="color:hsl(0, 0%, 0%);"><strong>So what exactly is covered in the course?</strong></span></p><p><span style="color:hsl(0, 0%, 0%);">Build 5 beautiful real-world projects for your portfolio! In these projects, you will learn how to plan and architect your applications using flowcharts and common JavaScript patterns</span></p><p><span style="color:hsl(0, 0%, 0%);">Master the JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, and more</span></p><p><span style="color:hsl(0, 0%, 0%);">Learn modern JavaScript (ES6+) from the beginning: arrow functions, destructuring, spread operator, default arguments, optional chaining, and more</span></p><p><span style="color:hsl(0, 0%, 0%);">How JavaScript works behind the scenes: engines, the call stack, hoisting, scoping, the 'this' keyword, reference values, and more.</span></p><p><span style="color:hsl(0, 0%, 0%);">Deep dive into functions: arrow functions, first-class and higher-order functions, bind, and closures.</span></p><p><span style="color:hsl(0, 0%, 0%);">Deep dive into object-oriented programming: prototypal inheritance, constructor functions (ES5), classes (ES6), encapsulation, abstraction, inheritance, and polymorphism. [This is like a small standalone course]</span></p><p><span style="color:hsl(0, 0%, 0%);">Deep dive into asynchronous JavaScript: the event loop, promises, async/await, and error handling. You will use these to access data from third-party APIs with AJAX calls. [This is like a small standalone course]</span></p><p><span style="color:hsl(0, 0%, 0%);">Learn modern tools that are used by professional web developers: NPM, Parcel, Babel, and ES6 modules</span></p><p><span style="color:hsl(0, 0%, 0%);">Check out the course curriculum for an even more detailed overview of the content :)</span></p><p><span style="color:hsl(0, 0%, 0%);"><strong>This is what's also included in the package:</strong></span></p><p><span style="color:hsl(0, 0%, 0%);">Up-to-date HD-quality videos, that are easy to search and reference <strong>(</strong><i><strong>great for Udemy Business learners</strong></i><strong>)</strong></span></p><p><span style="color:hsl(0, 0%, 0%);">Professional English captions (not the&nbsp;auto-generated ones)</span></p><p><span style="color:hsl(0, 0%, 0%);">Downloadable starter code and final code for each section</span></p><p><span style="color:hsl(0, 0%, 0%);">Downloadable slides for 40+ theory videos</span></p><p><span style="color:hsl(0, 0%, 0%);">25+ coding challenges and 25+ assignments to practice your new skills</span></p><p><span style="color:hsl(0, 0%, 0%);"><strong>Does any of these look like you? If so, then start this adventure today, and join me and 850,000+ other developers in the only JavaScript course that you will&nbsp;ever need!</strong></span></p><h2><span style="color:hsl(0, 0%, 0%);"><strong>Who this course is for:</strong></span></h2><ul><li><span style="color:hsl(0, 0%, 0%);">Take this course if you want to gain a true and deep understanding of JavaScript</span></li><li><span style="color:hsl(0, 0%, 0%);">Take this course if you have been trying to learn JavaScript but: 1) still don't really understand JavaScript, or 2) still don't feel confident to code real apps</span></li><li><span style="color:hsl(0, 0%, 0%);">Take this course if you're interested in using a library/framework like React, Angular, Vue or Node in the future</span></li><li><span style="color:hsl(0, 0%, 0%);">Take this course if you already know JavaScript and are looking for an advanced course. This course includes expert topics!</span></li><li><span style="color:hsl(0, 0%, 0%);">Take this course if you want to get started with programming: JavaScript is a great first language!</span></li></ul><figure class="image"><img style="aspect-ratio:800/534;" src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702627953/editors/1-Interesting-Facts-about-Big-Ben-04_800x534_h55sva.jpg" width="800" height="534"></figure><p>&nbsp;</p><p>&nbsp;</p>`;
  const lectures = [
    {
      _id: 1,
      title: "Làm thế nào để sức khoẻ tốt hơn 1",
      desc: "<p>ffffff</p>",
      course: "6568a313d4066c2c8c1b25b8",
      videoIntro: {
        url: "http://res.cloudinary.com/hdprivatecloud/video/upload/v1701427124/videolearns/Vietsub_Tiktok_Ngu%CC%9Bo%CC%9B%CC%80i_Tu%CC%9B%CC%80ng_Ye%CC%82u_-_Nha%CC%A3%CC%82m_Nhie%CC%82n_-_%E7%88%B1%E8%BF%87%E7%9A%84%E4%BA%BA_-_%E4%BB%BB%E7%84%B6_-_Nha%CC%A3c_Hoa_ta%CC%82m_tra%CC%A3ng_p9equ2.mp4",
      },
    },
    {
      _id: 2,
      title: "Làm thế nào để sức khoẻ tốt hơn 2",
      desc: "<p>ffffff</p>",
      course: "6568a313d4066c2c8c1b25b8",
      videoIntro: {
        url: "http://res.cloudinary.com/hdprivatecloud/video/upload/v1701427124/videolearns/Vietsub_Tiktok_Ngu%CC%9Bo%CC%9B%CC%80i_Tu%CC%9B%CC%80ng_Ye%CC%82u_-_Nha%CC%A3%CC%82m_Nhie%CC%82n_-_%E7%88%B1%E8%BF%87%E7%9A%84%E4%BA%BA_-_%E4%BB%BB%E7%84%B6_-_Nha%CC%A3c_Hoa_ta%CC%82m_tra%CC%A3ng_p9equ2.mp4",
      },
    },
    {
      _id: 3,
      title: "Làm thế nào để sức khoẻ tốt hơn 3",
      desc: "<p>ffffff</p>",
      course: "6568a313d4066c2c8c1b25b8",
      videoIntro: {
        url: "http://res.cloudinary.com/hdprivatecloud/video/upload/v1701427124/videolearns/Vietsub_Tiktok_Ngu%CC%9Bo%CC%9B%CC%80i_Tu%CC%9B%CC%80ng_Ye%CC%82u_-_Nha%CC%A3%CC%82m_Nhie%CC%82n_-_%E7%88%B1%E8%BF%87%E7%9A%84%E4%BA%BA_-_%E4%BB%BB%E7%84%B6_-_Nha%CC%A3c_Hoa_ta%CC%82m_tra%CC%A3ng_p9equ2.mp4",
      },
    },
  ];
  const [activeLectures, setActiveLectures] = useState({});
  console.log(
    "🚀 ~ file: DetailCourse.jsx:46 ~ DetailCourse ~ activeLectures:",
    activeLectures
  );
  return (
    <div className="wrapCourseDetail">
      <div className="boxTop row">
        <div className="col-6">
          <h1>Khoá học chăm sóc trẻ hoá làn da</h1>
          <div className="boxTop_c1">
            <p>Mới nhất</p>
            <p>Tất cả mọi đối tượng</p>
          </div>

          <p>
            <span>Giảng viên</span>: Trần Hoàng Hải
          </p>
          <div className="boxTop_c2">
            <span>
              <IoTimeSharp /> 12/12/2023
            </span>
            <span>
              <IoIosDocument /> 22 Bài học
            </span>
            <span>
              <FaVideo /> 22 Video
            </span>
          </div>
          <Button>Liên hệ</Button>
        </div>
        <div className="col-6">
          <img src="http://res.cloudinary.com/hdprivatecloud/image/upload/v1702435544/posts/abga_le1e3a.jpg" />
        </div>
      </div>
      <div className="boxUnder2">
        <div className="title_home">
          <h3>Nội dung bài học</h3>
          <div>
            <img
              src={VectorUnder}
              alt="vector under thh"
              className="vectorUnder"
            />
          </div>
        </div>
        <div className="contentSection">
          <div className="contentSection_note">
            <p>5 Bài học, 5 Video</p>
          </div>
          <ul>
            {lectures.map((i, index) => (
              <>
                <li>
                  <div
                    className="topAcordition"
                    onClick={() => {
                      if (activeLectures?.[`lecture${index}`]) {
                        let newKeys = { ...activeLectures };
                        delete newKeys[`lecture${index}`];
                        setActiveLectures(newKeys);
                      } else {
                        setActiveLectures({
                          ...activeLectures,
                          [`lecture${index}`]: i._id,
                        });
                      }
                    }}
                  >
                    <p>
                      {activeLectures[`lecture${index}`] ? (
                        <MdOutlineKeyboardArrowUp size={22} />
                      ) : (
                        <MdOutlineKeyboardArrowDown size={22} />
                      )}{" "}
                      {i.title}
                    </p>
                  </div>
                  <div
                    className={`underAcordition ${
                      activeLectures[`lecture${index}`] ? " activeAniSlide" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <p>
                          <MdVideoLibrary />
                          Video 1
                        </p>
                        <p>
                          <span>
                            <Button
                              onClick={() => {
                                showGlobal({
                                  body: (
                                    <>
                                      <ReactPlayer
                                        url={i.videoIntro?.url}
                                        width="100%"
                                        height="300px"
                                        controls
                                      />
                                    </>
                                  ),
                                  onOk: () => {
                                    closeGlobal();
                                  },
                                });
                              }}
                            >
                              Xem trước
                            </Button>
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="boxUnder">
        <div className="desc">
          <div className="title_home">
            <h3>Chi tiết khoá học</h3>
            <div>
              <img
                src={VectorUnder}
                alt="vector under thh"
                className="vectorUnder"
              />
            </div>
          </div>

          <div className="desc_c">{parse(des)}</div>
        </div>
      </div>
    </div>
  );
}
