import { Routes, Route } from "react-router-dom";
import Main from "./layouts/MainLayout/Main";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Intro from "./pages/Intro";
import Login from "./pages/Auth/components/Login";
import LogUp from "./pages/Auth/components/Logup";
import MainBlog from "./pages/Blogs/MainBlog";
import BlogDetail from "./pages/Blogs/BlogDetail";
import MainProduct from "./pages/Products/MainProduct";
import DetailProduct from "./pages/Products/DetailProduct";
import MainCourse from "./pages/Courses/MainCourse";
import DetailCourse from "./pages/Courses/DetailCourse";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Profile from "./pages/Profile";
import RequiredRoute from "./components/RequiredRoute/RequiredRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalFirm from "./components/Modals/ModalFirm";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blogs />}>
            <Route index element={<MainBlog />} />
            <Route path="detail/:id" element={<BlogDetail />} />
          </Route>
          <Route path="product" element={<Products />}>
            <Route index element={<MainProduct />} />
            <Route path="detail/:id" element={<DetailProduct />} />
          </Route>
          <Route path="course" element={<Courses />}>
            <Route index element={<MainCourse />} />
            <Route path="detail/:id" element={<DetailCourse />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="intro" element={<Intro />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<LogUp />} />
          <Route element={<RequiredRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ModalFirm />
    </>
  );
}

export default App;
