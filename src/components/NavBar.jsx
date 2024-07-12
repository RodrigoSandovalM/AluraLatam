import React from "react";
import { Box, Link } from "@mui/material";
import "../assets/main.css";

const NavBar = () => {
  return (
    <Box className="navbar">
      <Box sx={{ p: "10px 20px 10px 20px", width: "50%" }}>
        
      </Box>
      <Box className='linksPorf'>
        <Link href="#sobre-mi" color="inherit" underline="hover">
          Sobre mí
        </Link>
        <Link href="#habilidades" color="inherit" underline="hover">
          Habilidades
        </Link>
        <Link href="#proyectos" color="inherit" underline="hover">
          Proyectos
        </Link>
        <Link href="#contacto" color="inherit" underline="hover">
          Contacto
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
