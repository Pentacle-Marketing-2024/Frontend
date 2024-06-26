import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Login.css';

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = async (event) => {
    const myHeaders = {
      "Content-Type": "application/json",
    };

    const data = {
      username: username,
      password: password,
    };

    axios
      .post("https://pentaclemarketing.azurewebsites.net/api/admin/login", data, { headers: myHeaders })
      .then((response) => {
        console.log("response:" + response.data);
        if (response.status === 200) {
          const token = response.data;
          localStorage.setItem("token", token);
          setCookie("token", token, 365); // Expires in 365 days
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Welcome`,
            html: "<h3>Login Successfully</h3>",
            showConfirmButton: false,
            timer: 1600
          }).then(() => {
            navigate("/admin");
          });
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or password is invalid!"
        });
      });
  };

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires + "; path=/";
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

   return (
    <ThemeProvider theme={defaultTheme}>
      <div className="background-image"></div> {/* Background Image Div */}
      <div className="login-container"> {/* Center the login box */}
        <Container component="main" maxWidth="xs" className="login-box"> {/* Add login-box class */}
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 80,
                width: 220,
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '50%',
                marginBottom: 1,
              }}
              alt="Avatar"
              src="/logo.png"
            />
            <Typography component="h1" variant="h5" fontWeight="bold">
              Admin Login
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(a) => setUsername(a.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                onClick={handleLogin}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}