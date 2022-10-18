import { Box, Button, Container, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
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
          <TextField id="email" label="Email" variant="outlined" sx={{ marginTop: '20px', width: '50%' }} />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            sx={{ marginTop: '20px', width: '50%' }}
          />
          <Button
            variant="contained"
            sx={{ marginTop: '20px', width: '50%', height: '50px', bgcolor: '#1d3557', color: '#a8dadc' }}
            onClick={() => router.push('/employees')}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
