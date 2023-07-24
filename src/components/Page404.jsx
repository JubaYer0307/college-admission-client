import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Page404 = () => {
  useTitle("404");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <img
          style={{ height: "500px" }}
          src="https://i.ibb.co/3RG7LqV/404Page.gif"
          alt=""
        />
      </div>
      <Link to="/">
        <button className="btn mt-4">Back</button>
      </Link>
    </div>
  );
};

export default Page404;
