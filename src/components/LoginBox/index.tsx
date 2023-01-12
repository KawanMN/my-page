import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import './LoginBox.css'

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);


    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <Button className='tema'
            variant="outlined"
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    );
}

export default function Cadastro() {
    return (
        <CssVarsProvider>
            <main>
                <ModeToggle />
                <Sheet
                    sx={{
                        width: 300,
                        mx: 'auto',
                        my: 4,
                        py: 3,
                        px: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    variant="outlined"
                >
                    <div>
                        <Typography level="h4" component="h1">
                            <b>Bem vindo!</b>
                        </Typography>
                        <Typography level="body2">Faça login para continuar.</Typography>
                    </div>
                    <TextField
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        label="Email"
                    />
                    <TextField
                        name="Senha"
                        type="password"
                        placeholder="Senha"
                        label="Senha"
                    />
                    <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
                    <Typography
                        endDecorator={<Link href="/sign-up">Cadastre-se</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Não tem uma conta?
                    </Typography>
                </Sheet>
            </main>
        </CssVarsProvider>
    );
}