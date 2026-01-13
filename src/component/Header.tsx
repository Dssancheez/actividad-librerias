import {AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Badge, Avatar} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

type Perfiles = {
    nombreUsuario: string;
    iniciales: string;
    estado: string;
    notificaciones: number;
}
const pages = ['Home', 'Explore', 'About'];

function Header({nombreUsuario , iniciales , estado, notificaciones = 100}: Perfiles) {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 1,  }}>
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    {/* Sección Izquierda: Logo con Icono Estilizado */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{
                            backgroundColor: '#7b1fa2',
                            borderRadius: 2,
                            p: 0.5,
                            mr: 1,
                            display: 'flex'
                        }}>
                            <HomeIcon sx={{ color: 'white' }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a237e' }}>
                            MyApp
                        </Typography>
                    </Box>

                    {/* Sección Central: Enlaces de Navegación */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                        {pages.map((page) => (
                            <Button key={page} sx={{ color: '#3949ab', textTransform: 'none', fontSize: '1rem' }}>
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Sección Derecha: Notificaciones, Perfil y Cerrar Sesión */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton>
                            <Badge badgeContent={notificaciones} color="error">
                                <NotificationsIcon color="action" />
                            </Badge>
                        </IconButton>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar sx={{ bgcolor: '#e8eaf6', color: '#3f51b5', width: 32, height: 32 }}>
                                <small>{iniciales}</small>
                            </Avatar>
                            <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {nombreUsuario}
                            </Typography>
                        </Box>

                        <Button
                            startIcon={<LogoutIcon />}
                            sx={{ textTransform: 'none', color: '#5c6bc0' }}
                        >
                            {estado}
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;