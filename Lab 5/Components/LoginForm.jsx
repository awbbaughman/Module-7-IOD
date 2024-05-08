import { useContext, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";

/* how are we to know all of the above dependencies to import? 
I didn't even know half of them exist! It makes sense that these specifically styled 
components exist, but lack of even knowing they do make it nearly impossible to 
know where to start.
*/

export default function LoginForm() {

    const [submitResult, setSubmitResult] = useState({});
    
    const { currentUser, handleUpdateUser } = useUserContext();
    
    const handleSubmit = (event) => {
    
        event.preventDefault();
    
        const data = new FormData(event.currentTarget);
    
        const userEmail = data.get("email");
    
        const userPassword = data.get("password");
    
        if (userPassword.length < 5) {
        setSubmitResult({ isError: true, msg: "Password must be at least 5 characters long" });
        } else if (userPassword === userEmail) {
        
        setSubmitResult({ isError: true, msg: "Password must not match email address" });
        } 
        else {
        handleUpdateUser({ email: userEmail });
        setSubmitResult({ isError: false, msg: "Successful login!" });
        
        }
        };
        
        if (currentUser.email) {
        
        return (
        <>
            <Alert severity="success">Welcome {currentUser.email}!</Alert>
            <Button onClick={() => handleUpdateUser({})} variant="contained">Log Out</Button>
        
        </>
        
    );
    }
    
    return (
    
    <Container component="main" maxWidth="xs">
    
      <CssBaseline />
    
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    
          <LockOutlinedIcon />
    
        </Avatar>
    
        <Typography component="h1" variant="h5">Sign in</Typography>
    
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
    
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
    
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
    
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Login</Button>
    
          {submitResult.msg && <Alert severity={submitResult.isError ? "error" : "success"}>{submitResult.msg}</Alert>}
    
        </Box>
    
      </Box>
    
    </Container>
    );
    
    }

    