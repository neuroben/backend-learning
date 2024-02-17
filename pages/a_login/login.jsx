import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Typography, Grid, Container } from '@mui/material';
import MyTextField from '@/app/components/inputField/textField';
import MyButton from '@/app/components/button/MyButton';

function LoginForm() {
    const router = useRouter();
    const [errorMsg, setErrorMsg] = useState('');
    const [isReady, setIsReady] = useState(false);
    const [email, setEmail] = useState(''); // Add this line
    const [password, setPassword] = useState(''); // Add this line
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            setIsReady(true);
        }
    }, [router.isReady]);

    if (!isReady) {
        return null;  // or return a loading spinner
    }

    async function onSubmit(event) {
        event.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),

        });
        const responseData = await response.json();
        if (response.status === 200) {
            setIsLogged(true);
            localStorage.setItem('token', responseData.token);
            router.push('/admin');
        } else {
            setErrorMsg('Invalid credentials');
        }
    }
    return (
        <Container sx={{ color: '#fff' }} maxWidth="sm">
            {!isLogged &&
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {errorMsg && (
                            <Typography variant="body1" color="#fff"
                                sx={{
                                    textAlign: 'center',
                                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                }}>
                                {errorMsg}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextField
                            id="email"
                            type="text"
                            label="Email cím"
                            placeholder="Email cím"
                            name="email"
                            required
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextField
                            id="password"
                            type="password"
                            label="Jelszó"
                            placeholder="Jelszó"
                            name="password"
                            required
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            Szeretnél fiókot?{' '}
                            <Link href="/register">
                                Regisztrálj
                            </Link>
                        </Typography>
                    </Grid>
                    {errorMsg && (
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Forget your password?{' '}
                                <Link href="/register">
                                    Reset
                                </Link>
                            </Typography>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <MyButton
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={onSubmit}
                        >
                            Bejelentkezés
                        </MyButton>
                    </Grid>
                </Grid>

            }
        </Container>




    );
}

export default LoginForm;