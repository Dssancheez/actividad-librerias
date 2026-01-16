import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HttpsIcon from '@mui/icons-material/Https';
import {Box, colors, FormControlLabel, FormGroup, Switch, TextField} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Login() {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home', { state: { correo: email } });    }


    return (
        <>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center', // Centra horizontalmente
                alignItems: 'center',     // Centra verticalmente
                minHeight: '100vh',       // Ocupa el 100% de la altura de la pantalla
            }}>

                <Card sx={{minWidth: 275, maxWidth: 150, borderRadius: 3, boxShadow: 3, padding: 0, color: 'azure'}}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <HttpsIcon color="primary" sx={{fontSize: 40 , backgroundColor: "cadetblue" , padding: "10px" , borderRadius: "50%"}} />
                        <Typography gutterBottom sx={{color: 'text.secondary'}}>
                            Welcome Back
                        </Typography>
                        <Typography variant="h6"
                                    component="div"
                                    sx={{
                                        textAlign: 'center',
                                        color: colors.indigo[900]
                                    }}>
                            <h6 > Sign in to your account to continue</h6>

                        </Typography>

                        <Typography>

                            <TextField
                                fullWidth
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                margin="normal"
                                variant="outlined"
                                type="password"

                            />

                            <FormGroup>
                                <FormControlLabel required control={<Switch />} label="Remember me" slotProps={{
                                    typography: { sx: { color: 'black' } }
                                }}  />
                            </FormGroup>

                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button variant="contained" disableElevation
                        onClick={handleLogin}>
                            Sign In
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
