import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Chip,
    Container,
    Grid,
    Stack,
    Typography
} from "@mui/material";
import AddchartIcon from '@mui/icons-material/Addchart';
import Header from "../component/Header.tsx";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {useLocation} from "react-router-dom";




const CURSOS = [
    {
        id: 1,
        title: "Curso de React",
        descripcion: "Aprende los fundamentos de React.js y construye aplicaciones web interactivas.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=345",
        visitas: "1200k"
    },
    {
        id: 2,
        title: "Curso de Node.js",
        descripcion: "Domina el desarrollo backend con Node.js y crea servidores eficientes.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=345",
        visitas: "1200k"

    },
    {
        id: 3,
        title: "Curso de Python",
        descripcion: "Explora el lenguaje de programación Python y sus aplicaciones en ciencia de datos.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=345",
        visitas: "1200k"

    },
    {
        id: 4,
        title: "Curso de Python",
        descripcion: "Explora el lenguaje de programación Python y sus aplicaciones en ciencia de datos.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=345",
        visitas: "1200k"

    },
    {
        id: 5,
        title: "Curso de Python",
        descripcion: "Explora el lenguaje de programación Python y sus aplicaciones en ciencia de datos.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=345",
        visitas: "1200k"

    },
    {
        id: 6,
        title: "Curso de Python",
        descripcion: "Explora el lenguaje de programación Python y sus aplicaciones en ciencia de datos.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=345",
        visitas: "1200k"

    },

];
export default function Home() {

    const location = useLocation();

    const emailRecibido = location.state?.correo || "invitado@correo.com";
    const iniciales = emailRecibido.substring(0, 2).toUpperCase();


    return (
        <>

            <Header nombreUsuario={emailRecibido} iniciales={iniciales} estado="cerrar sesión"
                    notificaciones={5}/>
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                <div style={{textAlign: 'center', marginTop: '20px'}}>
                    <h3>Bienvenido a la pagina principal</h3>

                    <Box sx={{display: 'inline-flex', alignItems: 'center', gap: 2}}>
                        <span>EXPLORA NUESTROS CURSOS</span>
                        <Button variant="contained" disableElevation>
                            Disable elevation
                        </Button>
                    </Box>

                    <Stack direction="row" spacing={1} display="flex" justifyContent="center"
                           sx={{marginTop: 2, gap: 1, flexWrap: 'wrap', padding: 3}}>
                        <Chip label=" Todos" variant="outlined" color="primary"/>
                        <Chip label="Programacion" color="secondary"/>
                        <Chip label="Programacion" color="secondary"/>
                        <Chip label="Programacion" color="secondary"/>
                        <Chip label="Programacion" color="secondary"/>

                    </Stack>
                </div>

                <Container  sx={{py: 4}}>
                    <Grid container spacing={3} sx={{width: '100%', margin: 2}}>
                        {CURSOS.map((curso) => (

                            <Card sx={{maxWidth: 345, borderRadius: 3}}>
                                <CardMedia
                                    sx={{height: 140}}
                                    image={curso.image}
                                    title={curso.title}
                                />
                                <CardContent>
                                    <h2>{curso.title}</h2>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        {curso.descripcion}
                                    </Typography>

                                    {curso.visitas && (
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: 'flex',      // Usamos flexbox para alinear el ojo y el número
                                                alignItems: 'center', // Centra verticalmente el ojo con el número
                                                gap: 0.5,             // Espacio mínimo entre ojo y número
                                                ml: -0.5,             // EL TRUCO: Margen negativo para pegar el ojo al borde izquierdo
                                                mt: 2,                // Espacio respecto a la descripción
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            <RemoveRedEyeIcon sx={{fontSize: 18}}/>
                                            {curso.visitas}
                                        </Typography>
                                    )}

                                </CardContent>
                                <CardActions sx={{justifyContent: 'center'}}>
                                    <Button variant="contained" disableElevation >
                                        <AddchartIcon sx={{mr: 1}}/>
                                        Ver estadisticas
                                    </Button>
                                </CardActions>
                            </Card>

                        ))}
                    </Grid>
                </Container>
            </Container>
        </>
    );
}