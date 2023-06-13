import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from "react-scroll";
import image from '../../assets/logo-grey.png'
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(!inView);
  }, [inView]);

  return (
    <div ref={ref}>
      <AppBar
        position="fixed"
        sx={{
          height:'8vh',
          pt:'0.5%',
          backgroundColor: isScrolled ? 'white' : 'rgb(239, 65, 45);',
          transition: 'backgroundColor 2s',
        }}
        elevation={isScrolled ? 4 : 0} // se aplica sombra solo cuando se hace scroll
      >
        <Toolbar variant="dense">
          <Box sx={{ flexGrow: 1, pl: 25 }}>
            <Link
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '50px',
                  height: '50px',
                  padding: 0,
                  borderRadius: '50%',
                  color: 'black',
                }}
              ></Button>
            </Link>
          </Box>
          <Box sx={{ pr: 40 }}>
            {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <Link
                key={section}
                activeClass="active"
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                color='black'
              >
                <Button 
    color="inherit"
    sx={{
        color: 'black',
        '&:hover': {
            transition: 'all 0.3s ease 0s',
            background: 'linear-gradient(90deg, rgb(239, 65, 45), rgb(79, 41, 32))',
            color: 'white',
        }
    }}
>
    {section}
</Button>



              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
