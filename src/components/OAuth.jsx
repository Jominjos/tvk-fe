import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import Cookies from "js-cookie";

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const handleGoogleClick = async () => {
  //     const provider = new GoogleAuthProvider();
  //     provider.setCustomParameters({ prompt: "select_account" });
  //     try {
  //       const resultsFromGoogle = await signInWithPopup(auth, provider);
  //       const res = await fetch(`${API_BASE_URL}/api/auth/google`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           name: resultsFromGoogle.user.displayName,
  //           email: resultsFromGoogle.user.email,
  //           googlePhotoUrl: resultsFromGoogle.user.photoURL,
  //         }),
  //       });
  //       const data = await res.json();
  //       if (res.ok) {
  //         dispatch(signInSuccess(data));
  //         navigate("/");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);

      const res = await fetch(`${API_BASE_URL}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwt_token: ` ${Cookies.get("token")}`,
        },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });

      if (!res.ok) {
        // Handle server-side errors
        const errorData = await res.json();
        throw new Error(errorData.message || "Server error");
      }

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      // Handle Firebase errors
      if (error.code) {
        console.error("Firebase Error Code:", error.code);
        console.error("Firebase Error Message:", error.message);
        // Handle specific Firebase errors here
      } else {
        // Handle other errors
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
}
