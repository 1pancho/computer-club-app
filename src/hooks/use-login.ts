import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "../App";
import { authThunk } from "../store/slices/userSlice";
import { useAppDispatch } from "./redux-hooks";

interface IUseLogin {
  handleGoogle: () => void;
  handleGithub: () => void;
}

export const useLogin = (): IUseLogin => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoogle = async () => {
    await dispatch(authThunk.setUserByEmail({}))
    navigate(RoutesPaths.Home)
  }

  const handleGithub = async () => {
    await dispatch(authThunk.setUserByGithub({}))
    navigate(RoutesPaths.Home)
  }

  return {
    handleGoogle,
    handleGithub,
  };
};

