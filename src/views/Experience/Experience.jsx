import { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const AnimatedButton = animated(Button);

const ExperienceButton = ({ index, handleLeftClick, company, active }) => {
  const [hover, setHover] = useState(false);
  const style = useSpring({
    transform: hover ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <AnimatedButton
      onClick={() => handleLeftClick(index)}
      size="large"
      style={{
        color: active ? 'rgb(239, 65, 45)' : 'black',
        marginBottom: '30%',
        
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {company}
    </AnimatedButton>
  );
}


const experiences = [
  {
    company: 'Henry Bootcamp',
    date: 'February 2019 - October 2020',
    description: `Henry Bootcamp is an intensive programming training program focused on equipping students with practical, real-world applicable skills. During my time at Henry, I worked in a fast-paced, immersive, and collaborative environment that promoted continuous learning and quick adaptation to new programming technologies and techniques. The bootcamp covered a range of topics, from programming fundamentals to more advanced and industry-specific concepts. Throughout the program, I had the opportunity to work on practical projects, both individually and as part of a team, allowing me to apply and solidify the knowledge I was gaining. This experience at Henry was intense but incredibly rewarding, as it allowed me to grow as a programmer and prepare for the challenges of today's tech world.`,
    skills: ['JavaScript','TypeScript', 'Git', 'React (Redux & Hooks)', 'Express', 'PostgreSQL'],
  },
  {
    company: 'VinciU',
    date: 'December 2020 - January 2023',
    description: `VinciU is an academy offering courses in programming, 3D modeling, and electronics, aimed at teenagers between the ages of 12 and 18 who are interested in having their first interaction with technology. As part of this ambitious venture, I served as an instructor for the web programming course. We encouraged students to undertake both individual and group projects, fostering a collaborative environment while simultaneously promoting independent thought. The culmination of their learning journey was the development of an e-commerce website's front end, providing them with tangible evidence of their newly acquired skills. This opportunity to ignite the spark of innovation in these young minds was a fulfilling and rewarding experience.`,
    skills: ['HTML', 'CSS','Git', 'JavaScript', 'React'],
  },
  {
    company: 'VinciU',
    date: 'May 2021 - January 2023',
    description: `After a few months serving as an instructor, I had the opportunity to work also into the role of Front End Developer, as part of the support team. In this role, I was tasked with various responsibilities, which encompassed improving, maintaining, and supporting the user interface of our platform.`,
    skills: ['HTML', 'CSS','Git', 'JavaScript', 'React'],
  },

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
    return experiences.map((exp, idx) => (
      <ExperienceButton
        key={idx}
        index={idx}
        handleLeftClick={handleLeftClick}
        company={exp.company}
        active={index === idx}
      />
    ));  
  };  

  const renderDetailBlocks = () => {  
    let currentExperience = experiences[index];
    return (  
      <Box>
        <Typography variant="h3">{currentExperience.company}</Typography>
        <Typography variant="h5">{currentExperience.date}</Typography>
        <Typography variant="h6" >{currentExperience.description}</Typography>
        <Typography variant="h5"  sx={{mt:'3%'}}>Technologies used:</Typography>
        <ul>
          {currentExperience.skills.map((skill, idx) => (
            <li key={idx}>
              <Typography variant="body1" sx={{fontWeight: 'bold', p:'2%',color:''}}>{skill}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    );
  };  

  return (
    <Box id="experience" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width:'55%', p: 2, ml:'20%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%'}}>
        <Typography variant="h4" sx={{pb:"2%", pt:"2%",color:'rgb(239, 65, 45)', fontWeight:'bold'}}>EXPERIENCE</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', maxWidth: 2800 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: 2,pt:"3%", }}>
            {renderLeftBlocks()}
          </Box>
          <Box sx={{ flex: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1, }}>
            {renderDetailBlocks()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
