import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loginError, setLoginError] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', paddingTop: '200px' }}>
        <Box
          sx={{
            bgcolor: '#a8dadc',
            width: '40%',
            margin: 'auto',
            borderRadius: '25px',
            borderWidth: '5px',
            borderColor: '#457b9d',
            borderStyle: 'solid',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '2%',
            paddingBottom: '2%',
          }}
        >
          <Typography variant="h2" sx={{ color: '#457b9d' }}>
            Employee Information
          </Typography>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ marginTop: '20px', width: '50%' }}
            onChange={(e) => {
              setEmail(e.target.value);
              setLoginError(false)
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            sx={{ marginTop: '20px', width: '50%' }}
            onChange={(e) => {
              setPassword(e.target.value);
              setLoginError(false)
            }}
          />
          {loginError && (
            <Alert severity="error" sx={{ width: '80%', marginTop: '20px' }}>
              No email or password provided
            </Alert>
          )}

          <Button
            variant="contained"
            sx={{ marginTop: '20px', width: '50%', height: '50px', bgcolor: '#1d3557', color: '#a8dadc' }}
            onClick={() => {
              if (email && password) {
                router.push('/employees');
              } else {
                setLoginError(true)
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
