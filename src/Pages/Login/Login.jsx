import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn, signInWithGoogle, user } = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [sellerName, setSellerName] = useState(null);
  const [sellerEmail, setSellerEmail] = useState(null);
  const [error, setError] = useState(null);

  useTitle("Login");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setLoggedInUser(user);
        setSellerName(user.displayName);
        setSellerEmail(user.email);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setLoggedInUser(user);
        setSellerName(user.displayName);
        setSellerEmail(user.email);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const addCollege = async (newCollege) => {
    newCollege.sellerName = sellerName;
    newCollege.sellerEmail = sellerEmail;

    const response = await fetch(
      "https://college-admission-server-end.vercel.app/addacollege",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCollege),
      }
    );

    const data = await response.json();
    return data;
  };

  if (loggedInUser || user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <img src="https://i.ibb.co/bb53T5g/login.jpg" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered" required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
              {error && <p className="text-red-500 mt-2 mb-4">{error}</p>}
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              
            </form>
            <button
              className="btn btn-secondary mt-4"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
            <p>
              New to this site? <Link to="/signup">Sign Up</Link>
            </p>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
