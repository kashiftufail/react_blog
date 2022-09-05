import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostsList from "./Posts/PostsList";
import CreatePost from "./Posts/CreatePost";
import UpdatePost from "./Posts/UpdatePost";
import "./App.css";

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
          <Route path="/posts/:id/edit" element={<UpdatePost />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <footer class="footer-section">
        <div class="container">
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>

                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button type="button" className="btn bbtn-primary">
                        Sub
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default App;
