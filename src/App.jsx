import { Routes, Route } from "react-router-dom";
import Main from "./layouts/MainLayout/Main";
import MainAdmin from "./pages/Admin/pages/Home/Main";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CoursesAdmin from "./pages/Admin/pages/Course/Courses";
import AddCourse from "./pages/Admin/pages/Course/components/ActionCourse/AddCourse";
import DetailCourseAdmin from "./pages/Admin/pages/Course/DetailCourseAdmin";
import Intro from "./pages/Intro";
import Login from "./pages/Auth/components/Login";
import MainBlog from "./pages/Blogs/MainBlog";
import BlogDetail from "./pages/Blogs/BlogDetail";
import MainProduct from "./pages/Products/MainProduct";
import MainProductAdmin from "./pages/Admin/pages/Product/MainProduct";
import AddProduct from "./pages/Admin/pages/Product/components/AddProduct";
import DetailProduct from "./pages/Products/DetailProduct";
import MainCourse from "./pages/Courses/MainCourse";
import DetailCourse from "./pages/Courses/DetailCourse";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Profile from "./pages/Profile";
import RequiredRoute from "./components/RequiredRoute/RequiredRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalFirm from "./components/Modals/ModalFirm";
import { useGetPostsQuery } from "./pages/Blogs/post.service";
import BlogLists from "./pages/Blogs/BlogLists";
import { useGetCoursesQuery } from "./pages/Courses/course.service";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import LayoutDB from "./layouts/LayoutDashBoard";
import MainCourseLayout from "./pages/Admin/pages/Course/MainCourseLayout";
import MainProductLayout from "./pages/Admin/pages/Product/MainProductLayout";
import MainLayoutPost from "./pages/Admin/pages/Posts/MainLayoutPost";
import MainPost from "./pages/Admin/pages/Posts/MainPost";
import AddPost from "./pages/Admin/pages/Posts/component/AddPost";
import MainUser from "./pages/Admin/pages/User/MainUser";
import ProfileAdmin from "./pages/Admin/components/Profile/Profile";
import MineCourse from "./pages/Courses/MineCourse";
import Learn from "./pages/Courses/Learn";
import FeedBack from "./pages/Feedback"

function App() {
  useGetPostsQuery();
  useGetCoursesQuery();

  const Roles = {
    Admin: 1,
    User: 0,
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blogs />}>
            <Route index element={<MainBlog />} />
            <Route path="detail/:id" element={<BlogDetail />} />
            <Route path="list" element={<BlogLists />} />
          </Route>
          <Route path="product" element={<Products />}>
            <Route index element={<MainProduct />} />
            <Route path="detail/:id" element={<DetailProduct />} />
          </Route>
          <Route path="course" element={<Courses />}>
            <Route index element={<MainCourse />} />
            <Route path="detail/:id" element={<DetailCourse />} />
            <Route element={<RequiredRoute allowRoutes={[Roles.User]} />}>
              <Route path="mine" element={<MineCourse />} />
              <Route path="learn/:id" element={<Learn />} />
            </Route>
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="feedback" element={<FeedBack />}/>
          <Route path="intro" element={<Intro />} />
          <Route path="login" element={<Login />} />
          <Route
            element={<RequiredRoute allowRoutes={[Roles.User, Roles.Admin]} />}
          >
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="forgotPass" element={<ForgotPassword />} />
        </Route>
        <Route element={<RequiredRoute allowRoutes={[Roles.Admin]} />}>
          <Route path="/dashboard" element={<LayoutDB />}>
            <Route index element={<MainAdmin />} />

            <Route path="course" element={<MainCourseLayout />}>
              <Route index element={<CoursesAdmin />} />
              <Route path="add" element={<AddCourse />} />
              <Route path="detail/:id" element={<DetailCourseAdmin />} />
            </Route>

            <Route path="product" element={<MainProductLayout />}>
              <Route index element={<MainProductAdmin />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="add/:productId" element={<AddProduct />} />
            </Route>

            <Route path="post" element={<MainLayoutPost />}>
              <Route index element={<MainPost />} />
              <Route path="add" element={<AddPost />} />
              <Route path="add/:postId" element={<AddPost />} />
            </Route>
            <Route path="user" element={<MainUser />} />
            <Route path="profile" element={<ProfileAdmin />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ModalFirm />
    </>
  );
}

export default App;
