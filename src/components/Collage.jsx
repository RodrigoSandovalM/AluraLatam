import { Box, Grid } from "@mui/material";
import React from "react";

const proyectos = [
  {
    titulo: "Proyecto 1",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Proyecto 1",
    color: "#E74C3C", // Rojo
  },
  {
    titulo: "Proyecto 2",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Proyecto 2",
    color: "#F39C12", // Naranja
  },
  {
    titulo: "Proyecto 3",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Proyecto 3",
    color: "#3498DB", // Azul
  },
  {
    titulo: "Proyecto 4",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Proyecto 4",
    color: "#2ECC71", // Verde
  },
  {
    titulo: "Proyecto 5",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Descripción del Proyecto 5",
    color: "#9B59B6", // Morado
  },
];

export const Collage = () => {
  return (
    <Grid container spacing={2} sx={{ width: "80%", margin: "0 auto", height: "auto" }}>
      {proyectos.map((proyecto, index) => (
        <Grid item key={index} xs={index === 1 ? 8 : 4}>
          <Box
            sx={{
              width: "100%",
              height: index === 1 ? "300px" : "300px",
              backgroundColor: proyecto.color,
              opacity: 0.9,
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#FFFFFF", 
              position: "relative",
              cursor:'pointer',
              overflow: "hidden",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {/* <img src={proyecto.imagen} alt={proyecto.titulo} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }} /> */}
            <div style={{ position: "absolute", bottom: "10px", left: "10px", right: "10px", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "5px", borderRadius: "5px", cursor:'pointer' }}>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
