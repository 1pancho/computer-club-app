import { Button, Stack } from '@mantine/core';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesPaths } from '../App';
import { useAppDispatch } from '../hooks/redux-hooks';
import { logout } from '../store/slices/userSlice';


const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  

  const handleLogout = () => {
    dispatch(logout());
    navigate(RoutesPaths.LoginPage)
  };

  return (
    <Stack align="center">
      <Button color="dark.4" onClick={handleLogout}>
        Log out
      </Button>
    </Stack>
  );
};

export default HomePage;