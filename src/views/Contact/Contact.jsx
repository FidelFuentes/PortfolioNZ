import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Link, Box, FormHelperText } from '@mui/material';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleNameChange = (e) => {
    const name = e.target.value;
    setNameError(name === '' || /\d/.test(name));
  }

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailError(email === '' || !/\S+@\S+\.\S+/.test(email));
  }

  const handleMessageChange = (e) => {
    const message = e.target.value;
    setMessageError(message === '');
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!nameError && !emailError && !messageError) {
      emailjs.sendForm('service_x2tjz9l', 'template_w81djyd', e.target, '-Axr3v7z-blP4lidf')

        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset()
    }
  }

  return (
    <Box id="contact" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2,pt:'5%',pb:'5%'}}>
      <Typography variant="h2">Let's build a thing</Typography>
      <Grid container alignContent="center" flexDirection='column' spacing={3}>
        <Grid item xs={12} sm={6}>
          <form noValidate autoComplete="off" onSubmit={sendEmail}>
            <TextField fullWidth margin="normal" label="Name" variant="outlined" required name="user_name" error={nameError} onChange={handleNameChange}/>
            <FormHelperText error={true}>{nameError ? "Invalid name. It should not contain numbers or be empty." : " "}</FormHelperText>
            <TextField fullWidth margin="normal" label="Email" variant="outlined" required name="user_email" error={emailError} onChange={handleEmailChange}/>
            <FormHelperText error={true}>{emailError ? "Invalid email. Please enter a valid email address." : " "}</FormHelperText>
            <TextField fullWidth margin="normal" label="Message" variant="outlined" multiline rows={4} required name="message" error={messageError} onChange={handleMessageChange}/>
            <FormHelperText error={true}>{messageError ? "Message cannot be empty." : " "}</FormHelperText>
            <Button variant="contained" type="submit" sx={{ mt: 3 }} disabled={nameError || emailError || messageError}>Send It</Button>

          </form>
          <Typography variant="body2" sx={{ mt: 3 }}>Thank you for reaching out. I'll get back to you as soon as possible.</Typography>
        </Grid>
        <Grid item xs={2} sm={2} >
          <Typography variant="h6">Find me on:</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap:2 }} >
            <Link href="https://github.com/FidelFuentes" target="_blank" rel="noopener" underline="none" variant="body2">Github</Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener" underline="none" variant="body2">LinkedIn</Link>
            <Link href="https://discord.com/users/NariGGa#7717" target="_blank" rel="noopener" underline="none" variant="body2">Discord</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
