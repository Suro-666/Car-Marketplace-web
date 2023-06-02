import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { useState } from "react";

const controller = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  async function onRegister(_value) {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, _value.email, _value.password);
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: _value.name,
        surname: _value.surname,
        email: user.email,
        password: _value.password,
        accessToken: user.accessToken,
        role: "USER",
      });
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { onRegister, loading };
};

export default controller;
