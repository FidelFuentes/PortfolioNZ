import React from 'react';
import { Box, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

// Import your images here
import htmlIcon from '../../assets/htmlPAg.png';
import cssIcon from '../../assets/css.png';
import jsIcon from '../../assets/jspag.png';
import tsIcon from '../../assets/ts.png';
import reactIcon from '../../assets/atomic.png';
import reduxIcon from '../../assets/redux.png';
import nodeIcon from '../../assets/nodejs (1).png';
import expressIcon from '../../assets/express.png';
import pgIcon from '../../assets/post.png';

// Define your skills here
const skills = [
  { name: 'HTML', image: htmlIcon },
  { name: 'CSS', image: cssIcon },
  { name: 'JavaScript', image: jsIcon },
  { name: 'TypeScript', image: tsIcon },
  { name: 'React', image: reactIcon },
  { name: 'Redux', image: reduxIcon },
  { name: 'Node.js', image: nodeIcon },
  { name: 'Express', image: expressIcon },
  { name: 'PostgreSQL', image: pgIcon }
];

function Skills() {
  return (
    <Box id="skills" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: '5%',bgcolor: '#F7F7F7' }}>
      <Typography variant="h4" sx={{display: 'flex', pr:'55%',color:'rgb(239, 65, 45)', fontWeight:'bold'}}>SKILLS</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', mt: 2,gap:'2%' }}>
        {skills.map((skill, idx) => (
          <Card
            sx={{ maxWidth: 200, mb: 2, mr: 2, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3,p:'1%', cursor: 'default' }}
            key={idx}
          >
            <CardMedia
              component="img"
              height="140"
              image={skill.image}
              alt={skill.name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {skill.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;