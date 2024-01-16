import { Button, Stack, Text, TextInput } from '@mantine/core'

export const NickName = () => {
    return (

        <Stack align="center">
            <Text size="xl">Войдите</Text>
            <Stack align="flex-start" justify="flex-start">
                <TextInput
                    label="Установите ник"
                    withAsterisk
                    description="Внимание: вы не сможете восстановить ваш ник в будущем"
                    placeholder="Ваш ник"
                />
                <Button color='violet.5'>Установить ник</Button>
            </Stack>
        </Stack>
    )
}
