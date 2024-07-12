import { Box } from "@mui/material";
import React from "react";
import { Collage } from "./Collage";

// const proyectosData = [
//   {
//     title: "Proyecto 1",
//     description: "Descripción del Proyecto 1",
//     image: "ruta/de/la/imagen1.jpg",
//   },
//   {
//     title: "Proyecto 2",
//     description: "Descripción del Proyecto 2",
//     image: "ruta/de/la/imagen2.jpg",
//   },
//   {
//     title: "Proyecto 3",
//     description: "Descripción del Proyecto 3",
//     image: "ruta/de/la/imagen3.jpg",
//   },
// ];

export const Proyectos = () => {
  return (
    <Box
      id="proyectos"
      className="main"
      sx={{
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Collage />
    </Box>
  );
};
