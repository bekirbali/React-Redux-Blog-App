import React from "react";
import Navbar from "./Navbar";
import { Box, Card, CardContent, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  const linkedIn = {
    width: "40px",
    height: "40px",
    "&:hover": { color: "#0077B5", cursor: "pointer" },
  };
  const github = {
    width: "37px",
    height: "37px",
    "&:hover": { color: "#171515", cursor: "pointer" },
  };
  return (
    <>
      <Navbar />

      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "30%",
          height: "400px",
          margin: "auto",
          boxShadow: "0 0 0.3rem 0.3rem rgba(17, 89, 138, 0.5)",
        }}
      >
        <CardContent sx={{ textAlign: "center", marginTop: "3rem" }}>
          <Typography gutterBottom variant="h3" component="div">
            Bekir BALI
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Frontend Developer
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <LinkedInIcon sx={linkedIn} />
            <GitHubIcon sx={github} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default About;
