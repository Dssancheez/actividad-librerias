import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HttpsIcon from '@mui/icons-material/Https';
import {Box, colors, TextField} from "@mui/material";


export default function Login() {
    return (
        <>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center', // Centra horizontalmente
                alignItems: 'center',     // Centra verticalmente
                minHeight: '100vh',       // Ocupa el 100% de la altura de la pantalla
            }}>

                <Card sx={{minWidth: 275, maxWidth: 150, borderRadius: 3, boxShadow: 3, padding: 2, color: 'azure'}}>
                    <CardContent>
                        <HttpsIcon color="primary" sx={{fontSize: 40}}/>
                        <Typography gutterBottom sx={{color: 'text.secondary', fontSize: 14}}>
                            Welcome Back
                        </Typography>
                        <Typography variant="h5" component="div" color={colors.indigo[900]}>
                            <h4> Sign in to your account to continue</h4>

                        </Typography>

                        <Typography>

                            <TextField
                                fullWidth
                                label="Email"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                margin="normal"
                                variant="outlined"
                                type="password"
                            />

                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
