import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { auth, db } from "../../../../firebase";
import { useAuthStore } from "../../../Store-Zustand/Auth/authStore";
import { useNavigate } from "react-router";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useState } from "react";

const controller = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  async function onLogin(_value) {
    try {
      await signInWithEmailAndPassword(auth, _value.email, _value.password).then(({ user }) => {
        setUser({
          uid: user.uid,
        });
      });
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleForgotPassword = async (_value, fn) => {
    try {
      setLoading(true);
      const userQuery = query(collection(db, "users"), where("email", "==", _value.email));
      // Get user who forgot password by email
      const userForgottenPassword = await getDocs(userQuery).then((user) => user.docs[0].data());
      // Get his credential provider
      const credential = EmailAuthProvider.credential(
        userForgottenPassword.email,
        userForgottenPassword.password
      );
      // Log in based on the received data to get the user document for further requests
      const currentUser = await signInWithEmailAndPassword(
        auth,
        userForgottenPassword.email,
        userForgottenPassword.password
      ).then(({ user }) => user);
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, _value.password);
      await updateDoc(doc(db, "users", currentUser.uid), {
        ...userForgottenPassword,
        password: _value.password,
      });
      fn(false);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { onLogin, handleForgotPassword, loading };
};

export default controller;
