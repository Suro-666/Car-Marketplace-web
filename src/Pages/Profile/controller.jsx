import { useEffect } from "react";
import { useAuthStore } from "../../Store-Zustand/Auth/authStore";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";
import { useUserStore } from "./userStore";
import { useNavigate } from "react-router";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
} from "firebase/auth";

const controller = () => {
  const { userData, signOutUser } = useAuthStore();
  const { currentUser, setCurrentUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);
  async function getUserData() {
    try {
      if (userData.uid) {
        const queryDoc = doc(db, "users", userData.uid);
        const data = await getDoc(queryDoc);
        if (data.data()) {
          setCurrentUser(data.data());
        } else {
          signOutUser(null);
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleFormSubmit = async (_formValue) => {
    const carId = `${_formValue.model.toLowerCase()}-${_formValue.brand}-${
      _formValue.year
    }-${Date.now()}`;
    const newCar = {
      carData: {
        ..._formValue,
        carId,
      },
      addedByUser: currentUser.uid,
    };
    try {
      await setDoc(doc(db, "cars", carId), newCar);
    } catch (error) {
      console.error(error.message);
    }
  };

  // ../user-board/component/options
  const handleChangeEmail = async (_email, fn) => {
    try {
      if (userData.uid) {
        const credential = EmailAuthProvider.credential(currentUser.email, currentUser.password);
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updateEmail(auth.currentUser, _email);
        await updateDoc(doc(db, "users", currentUser.uid), {
          ...currentUser,
          email: _email,
        });
        getUserData();
        fn(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChangePassword = async (_password, fn) => {
    try {
      if (userData.uid) {
        const credential = EmailAuthProvider.credential(currentUser.email, currentUser.password);
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updatePassword(auth.currentUser, _password);
        await updateDoc(doc(db, "users", currentUser.uid), {
          ...currentUser,
          password: _password,
        });
        getUserData();
        fn(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return { currentUser, handleFormSubmit, handleChangeEmail, handleChangePassword };
};

export default controller;
