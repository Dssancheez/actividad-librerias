import { useLocation } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Container, Button, Stack, Chip
} from "@mui/material";
import {
    BarChart,
    LineChart,
    PieChart
} from "@mui/x-charts";
import Header from "../component/Header.tsx";

const dias = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const vistasData = [4000, 3000, 7000, 6500, 9000, 13000, 10500];

const fuentes = [
    { id: 0, value: 35, label: 'Búsqueda', color: '#5e5ce6' },
    { id: 1, value: 28, label: 'Sugeridos', color: '#a29bfe' },
    { id: 2, value: 20, label: 'Directo', color: '#ff7eb3' },
    { id: 3, value: 12, label: 'Redes', color: '#00d2d3' },
    { id: 4, value: 5, label: 'Otros', color: '#ff9f43' },
];

const dataDemografia = [
    { edad: '13-17', valor: 8 },
    { edad: '18-24', valor: 35 },
    { edad: '25-34', valor: 28 },
    { edad: '35-44', valor: 18 },
    { edad: '45-54', valor: 8 },
    { edad: '55+',   valor: 3 },
];

const dataRetencion = [
    { segundo: 0, porcentaje: 100 },
    { segundo: 30, porcentaje: 85 },
    { segundo: 60, porcentaje: 75 },
    { segundo: 120, porcentaje: 68 },
    { segundo: 180, porcentaje: 62 },
    { segundo: 300, porcentaje: 55 },
    { segundo: 600, porcentaje: 35 },
    { segundo: 900, porcentaje: 18 },
];

export default function Estadisticas() {
    const location = useLocation();
    const emailRecibido = location.state?.correo || "invitado@correo.com";
    const iniciales = emailRecibido.substring(0, 2).toUpperCase();

    return (
        <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh', pb: 4 }}>
            <Header
                nombreUsuario={emailRecibido}
                iniciales={iniciales}
                estado={"cerrar sesion"}
                notificaciones={4}
            />

            <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px' }}>
                <h2>Estadísticas del Video</h2>




            </div>

            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Vistas por Día</Typography>
                                <BarChart
                                    xAxis={[{ scaleType: 'band', data: dias }]}
                                    series={[{ data: vistasData, color: '#5e5ce6', label: 'Vistas' }]}
                                    height={300}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Retención de Audiencia</Typography>
                                <LineChart
                                    xAxis={[{
                                        data: dataRetencion.map(d => d.segundo),
                                        valueFormatter: (v) => v === 0 ? '0s' : v < 60 ? `${v}s` : `${v/60}m`
                                    }]}
                                    series={[{ data: dataRetencion.map(d => d.porcentaje), area: true, color: '#b0a6f0', showMark: false }]}
                                    height={300}
                                    margin={{ left: 40, right: 20, top: 20, bottom: 40 }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Fuentes de Tráfico</Typography>
                                <PieChart
                                    series={[{ data: fuentes, innerRadius: 60, paddingAngle: 5, cornerRadius: 5 }]}
                                    height={300}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Demografía por Edad</Typography>
                                <BarChart
                                    layout="horizontal"
                                    yAxis={[{ scaleType: 'band', data: dataDemografia.map(d => d.edad) }]}
                                    series={[{ data: dataDemografia.map(d => d.valor), color: '#f39c12' }]}
                                    height={300}
                                    margin={{ left: 70 }}
                                    slotProps={{ bar: { style: { borderRadius: 10 } } }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}