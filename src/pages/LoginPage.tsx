import { FC, useEffect } from 'react';
import { Text, Button, Group, Stack, Space } from '@mantine/core';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';
import { googleProvider, githubProvider } from '../firebaseConfig';
import { auuth } from '../auth/auth';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../firebaseConfig';


const LoginPage: FC = () => {
  const { handleGoogle, handleGithub } = auuth();


  return (
    <>
      <Stack align='center'>
        <Text size='xl'>Войдите</Text>
        <PhoneInput
          value='phone'
          inputStyle={{ width: '100%' }}
        />
        <Space h='md' />
        <Button color='violet.5'>Отправить СМС с кодом</Button>
        <Group>
          <Button leftSection={<FcGoogle />} variant='default' onClick={() => handleGoogle(googleProvider)}>Продолжить с Google</Button>
          <Button leftSection={<FaGithub />} color='dark.4' onClick={() => handleGithub(githubProvider)}>Продолжить с Github</Button>
        </Group>
      </Stack>
    </>
  );
}

export default LoginPage;

function onSignInSubmit() {
    throw new Error('Function not implemented.');
  }
