const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="bg-violet-500 text-white py-3 hover:bg-violet-600  rounded mt-5 duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
