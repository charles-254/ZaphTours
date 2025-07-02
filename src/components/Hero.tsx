import { Box,  Typography, Button, Chip } from "@mui/material"
import { FaArrowRightLong } from "react-icons/fa6";

import { Navbar } from "./Navbar"

export const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/hero.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
        px: 4,
        pointerEvents: 'none'
      }}
    >
      <Navbar />
      <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center', position:'absolute', top:0, left:0, width:'100%', height:'100%', textAlign:'center'}}>
        <Typography variant="h4" sx={{fontFamily:'"Marck Script", cursive', fontWeight:500,  bgcolor: 'rgba(0, 0, 0, 0.31)', width:'fit-Content', p:1}}>Get unforgetabble pleasure with us.</Typography>
        <Typography variant="h1" sx={{color: 'secondary.main', fontFamily: '"Merienda", cursive', fontWeight:600, mb:2, pointerEvents: 'auto'}}>Crafting Journeys.</Typography>
        <Typography variant="h2" sx={{color: 'secondary.main', fontFamily: '"Merienda", cursive', fontWeight:600, pointerEvents: 'auto'}}>No Just Trips.</Typography>
        <Box sx={{ display:'flex', gap:2, mt:2, pointerEvents: 'auto'}}>
            <Button variant="contained" endIcon={<FaArrowRightLong/>} sx={{ paddingInline:2, fontWeight: 600, fontSize:18}}>explore tours</Button>
            <Button variant="outlined" endIcon={<FaArrowRightLong/>} sx={{ paddingInline:2, fontWeight: 600, fontSize:18}}>our services</Button>
          </Box>
      </Box>
      <Box sx={{position:"absolute", bottom:0, left:0, display:"flex", flexDirection:'column', ml:4, pointerEvents: 'auto'}} >
        <Typography variant="h5" sx={{fontFamily:'"Marck Script", cursive', fontWeight:500, width:'fit-Content', p:1}}>The facilities we offer :</Typography>
        <Box sx={{p:1, display:"flex", flexWrap:"wrap", gap:1, mb:4}} >
          <Chip label="Tour Guide" variant="outlined" color='primary' sx={{fontWeight:600}}/>
          <Chip label="Travel Packages" variant="outlined" color='primary' sx={{fontWeight:600}}/>
          <Chip label="Accomodation" variant="outlined" color='primary' sx={{fontWeight:600}}/>
          <Chip label="Transportation" variant="outlined" color='primary' sx={{fontWeight:600}}/>
          <Chip label="Food" variant="outlined" color='primary' sx={{fontWeight:600}}/>
          <Chip label="Insurance" variant="outlined" color='primary'sx={{fontWeight:600}}/>
          <Chip label="Online Ordering" variant="outlined" color='primary'sx={{fontWeight:600}}/>
        </Box>
      </Box>
    </Box>
  );
};
