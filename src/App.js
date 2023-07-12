import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import DetailBlog from "./pages/DetailBlogs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/info" element={<Navigate to="/about" />} />
        <Route path="/blog/:blogId" element={<DetailBlog />} />
        {/* <Route path="blogs">
          <Route path=":blogId" element={<DetailBlog />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
