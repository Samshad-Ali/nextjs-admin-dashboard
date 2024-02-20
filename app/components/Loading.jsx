import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <PropagateLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
