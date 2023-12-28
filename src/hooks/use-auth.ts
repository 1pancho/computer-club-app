import { useAppSelector } from "./redux-hooks";

export const useAuth = ()  => {
    const { email, token, id, github} = useAppSelector(state => state.user);

    return {
        isAuth: !!(email || github),
        email,
        github,
        token,
        id,
    }
}
