import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Button} from '@mui/material';
import image from '../../assets/projectopoke.png';
import vinci from '../../assets/vinci.png';

const projects = [
  {
    name: 'PokeApp',
    
    description: "This project is a Single Page Application (SPA) that enables users to fetch information on any Pokémon and create their own Pokémon, leveraging the API from pokeapi.co. The design was crafted using pure CSS, without reliance on external libraries, aiming for a minimalist aesthetic.",
    technologies: ['JavaScript', 'CSS (with out libraries)' , 'React (Redux & Hooks)','Express','PostgreSQL','API: pokeapi.co'],
    // Agrega la URL de la imagen del proyecto
    image: image,
    // Agrega el enlace al proyecto en vivo o al código en GitHub
    link: 'https://spapokemonfront-production-d735.up.railway.app/',
  },
  {
    name: 'VinciU',
    
    description: 'This is a description of the project. It could include details about the project, the technologies used, and the impact it had.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    // Agrega la URL de la imagen del proyecto
    image: vinci,
    // Agrega el enlace al proyecto en vivo o al código en GitHub
    link: 'https://vinciu.com/',
  }


];

function Projects() {
  return (
    <Box id="projects" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', p: 2 }}>
      <Typography variant="h2" >Projects</Typography>
      <Grid container spacing={5} sx={{display: 'flex' , flexDirection:'column', justifyContent:'space-around'}}>
        {projects.map((project, idx) => (
          <Grid item xs={8} key={idx} sx={{display: 'flex', flexDirection: 'row', gap: '20px',ml:'18%'}}>
            <Card sx={{width: '100%'}}>
              <CardActionArea component="a" href={project.link} target="_blank" >
                <CardMedia
                  component="img"
                  height="400"
                  image={project.image}
                  alt={project.name}
                  sx={{width: '100%'}}
                />
              </CardActionArea>
            </Card>
            <Card sx={{width: '100%'}}>
              <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Typography gutterBottom variant="h4" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Technologies used: {project.technologies.join(', ')}
                </Typography>
                <Button sx={{ width: '30%'}} variant="contained" color="primary" href={project.link} target="_blank">
                  VIEW PROJECT
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;