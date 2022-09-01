import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Container, Navbar } from "react-bootstrap";
import PostsList from "./Posts/PostsList";
import CreatePost from "./Posts/CreatePost";
import './App.css';

const App = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/">
            Blogs
          </Link>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav">
              <Link className="nav-item nav-link" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link" to="/posts">
                Posts
              </Link>
              <Link className="nav-item nav-link" to="/about">
                About Me
              </Link>
            </div>
            <form class="d-flex">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" />
                <button type="button" class="btn btn-primary">
                  {/* <i class="bi-search"></i> */} Search
                </button>
              </div>
            </form>
            <div class="navbar-nav">
              <Link className="nav-item nav-link" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container fixed-margin">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
