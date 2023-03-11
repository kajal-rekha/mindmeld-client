const ErrorMessage = ({ error }) => {
  return (
    <p className="bg-rose-50 text-rose-500 border border-red-500 p-5 rounded">
      {error}
    </p>
  );
};

export default ErrorMessage;
