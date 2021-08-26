import React,{ useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import axios from "axios";
// import Loader from "./Loader";
import Sidebar from "./Sidebar";

const Profile = () => {


  const dispatch = useDispatch();



  return (
    <>
      <Helmet>
        <title>User Dashboard</title>
        <meta name="description" content="User Dashboard" />
      </Helmet>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="container mt-100">
        <div className="row ml-minus-15 mr-minus-15">
          <div className="col-3 p-15">
            <Sidebar />
          </div>
          <div className="col-9 p-15">

           <h1>this is my profile</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
