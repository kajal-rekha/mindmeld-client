import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    passwprd: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formFields);

    // clear state
    setFormFields({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login flex flex-col justify-center mt-20 items-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <SectionTitle title={"Login..."} />

        <FormControl
          label="email"
          labelInner="Email Address"
          inputType="email"
          placeholder="Write your email"
          formFields={formFields}
          setFormFields={setFormFields}
        />

        <FormControl
          label="password"
          labelInner="Password"
          inputType="password"
          placeholder="Write your password"
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <Button text="Login" submit />
      </form>
    </div>
  );
};

export default Login;
