import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Estadisticas from "../pages/Estadisticas.tsx";
export const router = createBrowserRouter([
    {path: "/", element:<Login/> },
    {path: "/home", element:<Home/> },
    {path: "/graficas", element:<Estadisticas/> },




]);