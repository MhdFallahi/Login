import "./App.css";
import CarouselCustom from "./components/Carousel-custom";

function App() {
  return (
    <div className="container-fluid d-flex">
      <div className="container-fluid ps-md-0  ">
        <CarouselCustom />
      </div>
      {/*  */}
      <div className="container-fluid ps-md-0  ">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-6 col-lg-12 bg-image"></div>
          <div className="col-md-16 col-lg-12">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h2 className="login-heading mb-4">Welcome back!</h2>
                    <p>start managing your finance faster and better</p>

                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        ></input>
                        <label for="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        ></input>
                        <label for="floatingPassword">Password</label>
                      </div>
                      <div className="d-flex justify-content-end">
                        <a className="forgot_pass  " href="#">
                          Forgot password?
                        </a>
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                    <span className="d-block text-center my-4 text-muted">
                      &mdash; or &mdash;
                    </span>

                    <div className="social-login">
                      <a
                        href="#"
                        className="facebook btn d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-facebook mr-3"></span> Login with
                        Facebook
                      </a>

                      <a
                        href="#"
                        className="google btn d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-google mr-3"></span> Login with
                        Google
                      </a>
                    </div>
                    <div className="signUp justify-content-center">
                      <p className="d-block text-center my-4 text-muted ">
                        Don't you have an account?
                      </p>
                      <a className=" my-4 " href="#">
                        Sign Up
                      </a>
                    </div>
                    <div className="text-center my-4 text-muted">
                      © 2022 ALL RIGHT RESERVED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
