import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HttpsIcon from '@mui/icons-material/Https';
import {Box, colors, FormControlLabel, FormGroup, Switch, TextField} from "@mui/material";
import {useState} from "react";
import {Form, useNavigate} from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            navigate('/home', { state: { correo: email } });
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <Card sx={{ minWidth: 275, maxWidth: 400, borderRadius: 3, boxShadow: 3 }}>
                <Form onSubmit={handleLogin}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <HttpsIcon color="primary" sx={{ fontSize: 40, backgroundColor: "cadetblue", padding: "10px", borderRadius: "50%" }} />

                        <Typography gutterBottom sx={{ color: 'text.secondary' }}>
                            Welcome Back
                        </Typography>

                        <Typography variant="h6" component="h2" sx={{ textAlign: 'center', color: colors.indigo[900] }}>
                            Sign in to your account to continue
                        </Typography>

                        <TextField
                            fullWidth
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            type="password"
                            required
                        />

                        <FormGroup sx={{ width: '100%' }}>
                            <FormControlLabel
                                control={<Switch />}
                                label="Remember me"
                                slotProps={{ typography: { sx: { color: 'black' } } }}
                            />
                        </FormGroup>
                    </CardContent>

                    <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            sx={{ mx: 2 }}
                        >
                            Sign In
                        </Button>
                    </CardActions>
                </Form>
            </Card>
        </Box>
    );
}