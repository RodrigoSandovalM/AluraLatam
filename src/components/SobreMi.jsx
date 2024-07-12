import React from "react";
import { Box, Typography } from "@mui/material";
import fondo from "../assets/videos/fondo.mp4";
import "../assets/SobreMi.css";
import Rodrigo from "../assets/img/Rodrigo.jpg";
import { Carrusel } from "./Carrusel";

export const SobreMi = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
            position: "absolute",
          }}
        >
          <source src={fondo} type="video/mp4" />
        </video>
        <Box className="card">
          <Box
            sx={{
              width: "100%",
              height: "calc(100% - 110px)",
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column'
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  height: "auto",
                  backgroundColor: "#00000085",
                  borderRadius: "15px",
                  border: "2px solid #1a1a1a",
                  color: "#fff",
                }}
              >
                <Box sx={{ p: "50px", height: "calc(100% - 100px)" }}>
                  <Box sx={{ height: "20%" }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                      Rodrigo Sandoval
                    </Typography>
                  </Box>

                  <Box sx={{ height: "80%", overflow: "auto" }}>
                    <Typography variant="h5" component="h1" gutterBottom>
                      Desarrollador Front End
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ fontSize: "20px" }}
                    >
                      Soy un desarrollador front-end apasionado por crear
                      interfaces de usuario dinámicas y accesibles. Con una
                      sólida experiencia en tecnologías web modernas, me
                      especializo en la creación de experiencias de usuario
                      intuitivas y visualmente atractivas.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "80%",
                  height: "100px",
                  marginTop:'10px',
                  backgroundColor: "#00000085",
                  borderRadius: "15px",
                  border: "2px solid #1a1a1a",
                  color: "#fff",
                }}
              >
                <Box sx={{ height: "50px", marginTop: "10px" }}>
                  <Carrusel />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center   ",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  height: "auto",
                  backgroundColor: "#fff",
                  borderRadius: "100%",
                  border: "4px solid #97979763",
                }}
              >
                <img
                  src={Rodrigo}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
