import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, githubProvider } from "../firebaseConfig";
import { authThunk } from "../store/slices/userSlice";
import { useAppDispatch } from "./redux-hooks";

interface IUseLogin {
  handleGoogle: () => void;
  handleGithub: () => Promise<void>;
}

export const useLogin = (): IUseLogin => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoogle = () => {
    dispatch(authThunk.setUserByEmail())

    //Если юзер в бд уже был, то возвращаем на на HomePage
    //Если нет, то кидаем на NickName
    
    // useEffect(() => {
    //   if (!isAuth) {
    //     navigate(RoutesPaths.LoginPage);
    //   }
    // }, [isAuth, navigate]);
    navigate('/')
  }

  const handleGithub = () => {
    dispatch(authThunk.setUserByGithub())
    navigate('/')
  }


  return {
    handleGoogle,
    handleGithub,
  };
};

