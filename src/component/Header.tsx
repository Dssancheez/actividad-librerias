import { AppBar, Toolbar, Typography, Button, Box, IconButton, Badge, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

type Perfiles = {
    nombreUsuario: string;
    iniciales: string;
    estado: string;
    notificaciones: number;
}

export default function Header({ nombreUsuario, iniciales, estado, notificaciones }: Perfiles) {
    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 1,
                width: '100%',
                backgroundImage: 'none'
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>

                <Box
                    component={Link}
                    to="/"
                    sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                >
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
                        Festify Dashboard
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    <Button component={Link} to="#" sx={{ color: '#3949ab', textTransform: 'none' }}>
                        Artistas
                    </Button>
                    <Button component={Link} to="#" sx={{ color: '#3949ab', textTransform: 'none' }}>
                        Explore
                    </Button>
                    <Button component={Link} to="#" sx={{ color: '#3949ab', textTransform: 'none' }}>
                        About
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton size="small">
                        <Badge badgeContent={notificaciones} color="error">
                            <NotificationsIcon color="action" />
                        </Badge>
                    </IconButton>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar sx={{ bgcolor: '#e8eaf6', color: '#3f51b5', width: 32, height: 32 }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>{iniciales}</Typography>
                        </Avatar>
                        <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 500 }}>
                            {nombreUsuario}
                        </Typography>
                    </Box>

                    <Button
                        startIcon={<LogoutIcon />}
                        sx={{ textTransform: 'none', color: '#5c6bc0', fontWeight: 500 }}
                    >
                        {estado}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}