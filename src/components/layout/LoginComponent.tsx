import { Button, Group, Space, Stack, Text } from '@mantine/core';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import 'react-international-phone/style.css';
import { useLogin } from '../../hooks/use-login';


export const LoginComponent = () => {
    const { handleGithub, handleGoogle } = useLogin();

    return (
        <div>
            <Stack align='center'>
                <Text size='xl'>Войдите</Text>
                {/* <Space h='md' /> */}
                <Group>
                    <Button leftSection={<FcGoogle />} variant='default' onClick={handleGoogle}>Продолжить с Google</Button>
                    <Button leftSection={<FaGithub />} color='dark.4' onClick={handleGithub}>Продолжить с Github</Button>
                </Group>
            </Stack>
        </div>
    )
}
