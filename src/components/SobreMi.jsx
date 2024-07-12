import React from "react";
import { Box, Typography } from "@mui/material";
import fondo from "../assets/videos/fondo.mp4";
import "../assets/SobreMi.css";
import Rodrigo from "../assets/img/Rodrigo.jpg";

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
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  height: "50%",
                  backgroundColor: "#00000085",
                  borderRadius: "15px",
                  border: "2px solid #1a1a1a",
                  color: "#fff",
                }}
              >
                <Box sx={{ p: "50px" }}>
                  <Typography variant="h3" component="h1" gutterBottom>
                    Rodrigo Sandoval
                  </Typography>
                  <Typography variant="h5" component="h1" gutterBottom>
                    Desarrollador Front End
                  </Typography>

                  <Box sx={{ height:'auto',overflow:'auto'}}>
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
                  width: "400px",
                  height: "400px",
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
                    width: "400px",
                    height: "400px",
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
