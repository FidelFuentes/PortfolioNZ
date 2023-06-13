import React from 'react';
import { Box, Typography, Card, CardActionArea, CardContent, CardMedia, Grid, Button } from '@mui/material';
import image from '../../assets/corta.png';
import vinci from '../../assets/vinci.png';

const projects = [
  {
    name: 'PokeApp',
    description: "This project is a Single Page Application (SPA) that enables users to fetch information on any Pokémon and create their own Pokémon, leveraging the API from pokeapi.co. The design was crafted using pure CSS, without reliance on external libraries, aiming for a minimalist aesthetic.",
    technologies: ['JavaScript', 'CSS (with out libraries)' , 'React (Redux & Hooks)','Express','PostgreSQL','API: pokeapi.co'],
    image: image,
    link: 'https://spapokemonfront-production-d735.up.railway.app/',
  },
  {
    name: 'VinciU',
    description: 'Academy offering tech-oriented courses for teenagers, I served as an instructor for a web programming course. Besides teaching, I provided front-end support for the website. This role enabled me to foster innovation and independent thought among the learners, which was a fulfilling experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: vinci,
    link: 'https://vinciu.com/',
  }
];

function Projects() {
  return (
    <Box id="projects" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Typography variant="h4" sx={{ pr:"45%", pb:"2%", pt:"1%", color:'rgb(239, 65, 45)', fontWeight:'bold', mb:'2%' }}>PROJECTS</Typography>
      <Grid container spacing={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', background: 'rgb(0, 33, 52)' }}>
        {projects.map((project, idx) => (
          <Grid item key={idx} container justifyContent="center" sx={{ display: 'flex', flexDirection: 'row', gap: '20px', }}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ width: '100%', mb: '2%', boxShadow: 'none' }}>
                <CardActionArea component="a" href={project.link} target="_blank">
                  <CardMedia
                    component="img"
                    height="400"
                    image={project.image}
                    alt={project.name}
                    sx={{ width: '100%' }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card sx={{ width: '100%', background: 'rgb(0, 33, 52)', color: 'white', boxShadow: 'none' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="h4" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="h7" color="white" >
                    {project.description}
                  </Typography>
                  <Typography variant="h7" color="white" mt='3%'>
                    DEVELOPMENT TOOLS:
                  </Typography>
                  <ul>
                    {project.technologies.map((tech, i) => (
                      <Typography variant="body2" color="white" key={i} sx={{ mb:'3%' }}>
                        <li>{tech}</li>
                      </Typography>
                    ))}
                  </ul>
                  <Button sx={{ width: '35%', background: 'rgb(0, 33, 52)', border: '1px solid white', color: 'white' }}  color="primary" href={project.link} target="_blank">
                    VIEW PROJECT
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
