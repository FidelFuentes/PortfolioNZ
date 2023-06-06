import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const experiences = [
  {
    company: 'Henry Bootcamp',
    date: 'February 2019 - October 2020',
    description: `Henry Bootcamp is an intensive programming training program focused on equipping students with practical, real-world applicable skills. During my time at Henry, I worked in a fast-paced, immersive, and collaborative environment that promoted continuous learning and quick adaptation to new programming technologies and techniques. The bootcamp covered a range of topics, from programming fundamentals to more advanced and industry-specific concepts. Throughout the program, I had the opportunity to work on practical projects, both individually and as part of a team, allowing me to apply and solidify the knowledge I was gaining. This experience at Henry was intense but incredibly rewarding, as it allowed me to grow as a programmer and prepare for the challenges of today's tech world`,
    skills: ['JavaScript','TypeScript', 'React (Redux & Hooks)', 'Express', 'PostgreSQL'],
  },
  {
    company: 'VinciU',
    date: 'December 2020 - January 2023',
    description: `VinciU is an academy offering courses in programming, 3D modeling, and electronics, aimed at teenagers between the ages of 12 and 18 who are interested in having their first interaction with technology. As part of this ambitious venture, I served as an instructor for the web programming course. We encouraged students to undertake both individual and group projects, fostering a collaborative environment while simultaneously promoting independent thought. The culmination of their learning journey was the development of an e-commerce website's front end, providing them with tangible evidence of their newly acquired skills. This opportunity to ignite the spark of innovation in these young minds was a fulfilling and rewarding experience`,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  // Más experiencias aquí
];

function Experience() {
  const [index, setIndex] = useState(1);
  
  const handleLeftClick = idx => {  
    if (index === parseInt(idx)) {
      return;
    }
    setIndex(parseInt(idx));  
  };

  const renderLeftBlocks = () => {  
    return experiences.map((exp, idx) => {  
      return (  
        <Button key={idx} onClick={() => handleLeftClick(idx)}>
          {exp.company}
        </Button>
      );  
    });  
  };  

  const renderDetailBlocks = () => {  
    let currentExperience = experiences[index];
    return (  
      <Box >
        <Typography variant="h3">{currentExperience.company}</Typography>
        <Typography variant="h5">{currentExperience.date}</Typography>
        <Typography variant="h6" >{currentExperience.description}</Typography>
        <Typography variant="h5" >Technologies used:</Typography>
        {currentExperience.skills.map((skill, idx) => (
          <Typography variant="body2" key={idx} sx={{m:'2%'}}>{skill}</Typography>
        ))}
      </Box>
    );
  };  

  return (
    <Box id="experience" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width:'55%', p: 2,ml:'20%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%'}}>  {/* Nuevo contenedor */}
        <Typography variant="h2">Experience</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', maxWidth: 2800 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: 2 }}>
            {renderLeftBlocks()}
          </Box>
          <Box sx={{ flex: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
            {renderDetailBlocks()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
