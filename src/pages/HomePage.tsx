import { FC, useEffect } from 'react';
import { Button, Stack } from '@mantine/core';
import { removeUser } from '../store/slices/userSlice';
import { useAuth } from '../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux-hooks';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  

  const handleGoogle = () => {
    dispatch(removeUser());
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/LoginPage');
    }
  }, [isAuth, navigate]);

  return (
    <Stack align="center">
      <Button color="dark.4" onClick={handleGoogle}>
        Выйти из
      </Button>
    </Stack>
  );
};

export default HomePage;