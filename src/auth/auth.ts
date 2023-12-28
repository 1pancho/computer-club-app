import { getAuth, signInWithPopup } from "firebase/auth";
import { googleProvider, githubProvider, auth } from "../firebaseConfig";
import { setUserByEmail, setUserByGithub } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";

export const auuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      dispatch(setUserByEmail({
        email: user.email,
        token: user.accessToken,
        id: user.uid,
      }));
      navigate('/');
    } catch (error) {
      console.error('Google authentication error:', error);
    }
  };

  const handleGithub = async () => {
    try {
      const { user } = await signInWithPopup(auth, githubProvider);
      console.log(user)
      dispatch(setUserByGithub({
        github: user.reloadUserInfo.screenName,
        id: user.uid,
      }));
      navigate('/');
    } catch (error) {
      console.error('GitHub authentication error:', error);
    }
  };

  return {
    handleGoogle,
    handleGithub,
  };
};