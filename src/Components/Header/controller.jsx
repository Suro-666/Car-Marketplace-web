import { useNavigate } from "react-router";
import { useAuthStore } from "../../Store-Zustand/Auth/authStore";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const controller = () => {
  const navigate = useNavigate();
  const { signOutUser, userData } = useAuthStore();
  async function onLogOut() {
    try {
      await signOut(auth);
      signOutUser();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  }

  return { onLogOut, userData };
};

export default controller;
