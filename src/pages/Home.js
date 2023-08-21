import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Events from "./Events";
import ContactUs from "./ContactUs";
import Members from "./Members";
import Legacy from "./Legacy";
import Facility from "./Facility";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import bg_image from "../images/bg-blue.jpg";

function Home() {
  return (
    <>
    <Box sx={{
            backgroundImage:`url(${bg_image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position:'relative',
            minHeight:'100vh',
           
          }}>
      <Header />
      <Container maxWidth="xl" style={{ paddingTop:60}} >
        <Box className="section-container">
      <Routes>
        <Route path="/" element={<Legacy />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
      </Box>
      </Container>
      </Box>
    </>
  );
}

export default Home;
