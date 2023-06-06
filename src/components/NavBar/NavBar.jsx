import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from "react-scroll";
import image from '../../assets/logo-grey.png'

const NavBar = () => {
    return (
        <AppBar position="fixed" sx={{ height:'8vh', pt:'0.5%'}}>
          <Toolbar variant="dense">
            <Box sx={{ flexGrow: 1, pl: 25, }}>
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
                  }}
                ></Button>
              </Link>
            </Box>
          <Box sx={{ pr: 40 }}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button color="inherit">About</Button>
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button color="inherit">Experience</Button>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button color="inherit">Projects</Button>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button color="inherit">Contact</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  

export default NavBar;
