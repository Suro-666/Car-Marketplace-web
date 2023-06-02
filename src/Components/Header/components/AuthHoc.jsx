import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../../Store-Zustand/Auth/authStore";

const AuthHoc =
  (Component) =>
  ({ ...props }) => {
    const { userData } = useAuthStore();
    const [path, setPath] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
      if (userData !== null) {
        setPath(`/profile`);
        setText("Profile");
      } else {
        setPath("/login");
        setText("Login");
      }
    }, [userData]);

    const WrappedComponent = () => {
      return <Component text={text} path={path} {...props} />;
    };

    return <WrappedComponent />;
  };

export default AuthHoc;
