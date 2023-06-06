import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import image from '../../assets/Asunto[314].png';

const LandingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around', 
  height: '100vh',
  padding: '0 10%',
  
 
});

const LandingContent = styled('div')({
  flex: '1 1 auto',
  maxWidth: '600px',
});

const LandingImage = styled('img')({
  flex: '1 1 auto',
  maxWidth: '50%',
  height: 'auto',
});

const Landing = () => {
  return (
    <LandingContainer id='inicio'>
      <LandingContent>
        <Typography variant="h3">Hi, my name is</Typography>
        <Typography variant="h1">FIDEL FUENTES</Typography>
        <Typography variant="h4">Full-Stack Developer in New Zealand</Typography>
        <Button variant="contained">GET IN TOUCH</Button>
      </LandingContent>
      <LandingImage src={image} alt="Fidel Fuentes" />
    </LandingContainer>
  );
};

export default Landing;
