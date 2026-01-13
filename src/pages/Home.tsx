import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import Header from "../component/Header.tsx";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const PERFILES = {
    nombreUsuario: "Juan Perez",
    iniciales: "JP",
    estado: 'cerrar sesion',
    notificaciones: 5
};


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
    return (
<>

    <Header nombreUsuario={PERFILES.nombreUsuario} iniciales={PERFILES.iniciales} estado={PERFILES.estado} notificaciones={PERFILES.notificaciones} />
        <Container sx={{py: 4}}>
            <Grid container spacing={3}>
                {CURSOS.map((curso) => (

                    <Card sx={{maxWidth: 345, borderRadius: 3}} >
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
                                        display: 'flex',      // Alinea icono y texto en la misma línea
                                        alignItems: 'center', // Centra verticalmente el ojo con el número
                                        gap: 0.5,             // Espacio mínimo entre ojo y número
                                        ml: -0.5,             // EL TRUCO: Margen negativo para pegar el ojo al borde izquierdo
                                        mt: 2,                // Espacio respecto a la descripción
                                        fontWeight: 'bold'
                                    }}
                                >
                                    <RemoveRedEyeIcon sx={{ fontSize: 18 }} />
                                    {curso.visitas}
                                </Typography>
                            )}

                        </CardContent>
                        <CardActions>
                            <Button size="small">Compartir</Button>
                            <Button size="small">Leer mas</Button>
                        </CardActions>
                    </Card>

                ))}
            </Grid>
        </Container>
</>
    );
}