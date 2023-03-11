import React from "react";

const Button = ({ text, submit, logout, handleLogout }) => {
  return (
    <button
      onClick={handleLogout ? handleLogout : null}
      type={submit ? "submit" : ""}
      className={`bg-violet-500 text-white py-3 hover:bg-violet-600  rounded duration-300 px-5 ${
        logout
          ? "bg-rose-500 hover:bg-rose-600"
          : "bg-violet-500 hover:bg-violet-600 mt-5"
      }`}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
