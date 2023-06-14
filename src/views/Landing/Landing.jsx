import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import image from '../../assets/Asunto.png';
import { Link } from 'react-scroll';

const LandingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around', 
  height: '80vh',
  padding: '0 10%',
  width: '100%',
  boxSizing: 'border-box',
  
  background:'rgb(239, 65, 45)'
});



const LandingContent = styled('div')({
  flex: '1 1 auto',
  maxWidth: '600px',
  transition: 'opacity 1s', // Agrega transición para suavizar el cambio de opacidad
});

const LandingImage = styled('img')({
  flex: '1 1 auto',
  //borderRadius:'60%',
  border: '1px solid or',
  paddingTop:'5%',
  
  maxWidth: '50%',
  height: '90%',
  transition: 'opacity 1s'
});

const Landing = () => {
  // Utiliza el hook useInView para rastrear cuando el componente está en la vista
  const { ref, inView } = useInView({
    /* Opciones opcionales */
    threshold: 0.1, // Ajusta esto como prefieras
  });

  return (
    <LandingContainer id='inicio'>
      {/* Aplica estilo condicional para cambiar la opacidad basado en inView */}
      <LandingContent style={{ opacity: inView ? 1 : 0.3 }} ref={ref}>
        <Typography variant="h3">Hi, my name is</Typography>
        <Typography variant="h1">FIDEL FUENTES</Typography>
        <Typography variant="h4">Full-Stack Developer based in Queenstown, New Zealand</Typography>
        <Link
  activeClass="active"
  to="contact"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
>
  <Button 
    variant="contained" 
    sx={{
        mt:'3%',
        p:"2.5%",
        pl:'8%',
        pr:'8%',
        backgroundColor: 'rgb(239, 65, 45)',
        color: 'black',
        '&:hover': {
            backgroundColor: 'rgb(79, 41, 32)',
            color: 'white',
        },
        border: '2px solid black',
        transition: 'all 0.3s ease 0s',
        textTransform: 'uppercase', // Cambia todas las letras a mayúsculas
    }}
  >
    Get in touch
  </Button>
</Link>


      </LandingContent>
      <LandingImage src={image} alt="Fidel Fuentes" />
    </LandingContainer>
  );
};

export default Landing;
