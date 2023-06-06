import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box 
      id="about"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        p: 2,
        bgcolor: '#F7F7F7',
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          width:'60%',
        }}
      >
        <Typography variant="h3" component="div" gutterBottom>
          About
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Hello, my name is Fidel Fuentes and I'm a full-stack developer based in New Zealand. I am passionate about combining my love for programming with my interest in education, which has led me to spend the last two years teaching JavaScript in the educational sector.
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          My focus is on developing efficient and effective solutions, always with the end user's experience in mind. I enjoy unraveling technical challenges and am constantly seeking ways to improve my skills.
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          In addition to my work, I am an enthusiast of outdoor activities. I enjoy mountain biking, water polo, and chess. Chess, in particular, has helped me improve my problem-solving skills, as it requires strategic thinking and careful planning - skills that are directly applicable to programming. I believe these activities complement my work as a developer as they help me maintain a healthy work-life balance while enhancing my ability to solve problems in a creative and strategic way.
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          I am excited about the opportunity to work on projects that allow me to continue to grow both professionally and personally. If you'd like to collaborate or just want to chat about tech, sports, or chess, please don't hesitate to get in touch.
        </Typography>
      </Box>
    </Box>
  )
}

export default About;
