import {
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
  WhatsApp,
  X,
} from "@mui/icons-material";
import {
  IconButton,
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  ImageList,
  ImageListItem,
  Tooltip,
} from "@mui/material";
import { IoIosSend } from "react-icons/io";
import { SiWorldhealthorganization } from "react-icons/si";
import { FaGreaterThan } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { CiCreditCard2 } from "react-icons/ci";

export const Footer = () => {
  return (
    <Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          px: { xs: 2, md: 6 },
          py: { xs: 6, md: 10 },
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
          textTransform: "capitalize",
          borderBottom: "1px solid gray",
        }}
      >
        <Stack
          sx={{ maxWidth: { xs: "100%", md: "33%" }, textAlign: "center" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Marck Script", cursive',
              fontWeight: 500,
              color: "secondary.main",
            }}
          >
            Get updated with the latest newsletter
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ gap: 2, width: "100%", maxWidth: 500 }}
        >
          <TextField
            fullWidth
            label="Enter Email"
            variant="outlined"
            sx={{
              bgcolor: "#1a1a1a",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "primary.main",
                  borderRadius: "10px",
                },
              },
            }}
          />
          <Button
            variant="outlined"
            endIcon={<IoIosSend />}
            sx={{ fontSize: 15, whiteSpace: "nowrap" }}
          >
            Subscribe now
          </Button>
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          justifyContent: "space-evenly",
          gap: 4,
          px: { xs: 2, md: 6 },
          py: { xs: 6, md: 10 },
          flexWrap: "wrap",
        }}
      >
        <Stack sx={{ maxWidth: 350 }}>
          <Stack
            direction="row"
            sx={{ alignItems: "center", flexWrap: "wrap" }}
          >
            <IconButton color="primary" sx={{ fontSize: 100 }}>
              <SiWorldhealthorganization />
            </IconButton>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"UoqMunThenKhung", serif',
                  color: "primary.main",
                }}
              >
                Zaph Tours
              </Typography>
              <Typography variant="h6">Explore the world.</Typography>
            </Box>
          </Stack>
          <Typography sx={{ color: "text.secondary", mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et officia
            eligendi consequuntur, temporibus laborum illo animi eveniet id
            dicta laboriosam aut totam unde dolorum veniam? Officia rem natus
            ducimus unde!
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
            <IconButton size="small">
              <Instagram fontSize="medium" sx={{ color: "primary.main" }} />
            </IconButton>
            <IconButton size="small">
              <Facebook fontSize="medium" sx={{ color: "primary.main" }} />
            </IconButton>
            <IconButton size="small">
              <LinkedIn fontSize="medium" sx={{ color: "primary.main" }} />
            </IconButton>
            <IconButton size="small">
              <X fontSize="medium" sx={{ color: "primary.main" }} />
            </IconButton>
            <IconButton size="small">
              <YouTube fontSize="medium" sx={{ color: "primary.main" }} />
            </IconButton>
          </Box>
        </Stack>
        <Stack sx={{ alignItems: { xs: "flex-start", md: "center" } }}>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
              fontFamily: '"UoqMunThenKhung", serif',
            }}
          >
            Useful Links
          </Typography>
          <Stack sx={{ alignItems: "flex-start" }}>
            {[
              { label: "Home", href: "/" },
              { label: "Destinations", href: "/destinations" },
              { label: "Trip types", href: "/trip-types" },
              { label: "Contact us", href: "/contact-us" },
              { label: "About us" },
              { label: "Testimonials" },
            ].map((link, i) => (
              <Button
                key={i}
                variant="text"
                startIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
                sx={{ color: "text.secondary" }}
                href={link.href || "#"}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Stack sx={{ gap: 1.5 }}>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
              fontFamily: '"UoqMunThenKhung", serif',
            }}
          >
            Get In Touch
          </Typography>
          {[
            {
              icon: <FaPhoneVolume />,
              lines: ["+2547 345 6787", "+2547 071 3358"],
            },
            {
              icon: <WhatsApp />,
              lines: ["+2547 345 6787", "+2547 071 3358"],
            },
            {
              icon: <IoMail />,
              lines: ["mailinfo@zaph.com", "zaphtours@zaph.com"],
            },
            {
              icon: <FaLocationDot />,
              lines: ["273 Safari Lane, Holy Park,", "Nairobi, Kenya"],
            },
          ].map((item, idx) => (
            <Stack key={idx} direction="row">
              <IconButton sx={{ color: "primary.main", fontSize: 25 }}>
                {item.icon}
              </IconButton>
              <Stack sx={{ color: "text.secondary" }}>
                {item.lines.map((line, i) => (
                  <Typography key={i}>{line}</Typography>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
              fontFamily: '"UoqMunThenKhung", serif',
            }}
          >
            Instagram Posts
          </Typography>
          <ImageList
            sx={{
              width: { xs: 250, sm: 300 },
              height: 260,
              overflow: "hidden",
              flexWrap: "wrap",
            }}
          >
            {itemData.map((item, index) => (
              <ImageListItem key={index} sx={{ height: 70 }}>
                <img src={`${item.img}`} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        sx={{
          px: { xs: 2, sm: 6 },
          py: 2,
          justifyContent: "space-evenly",
          alignItems: "center",
          bgcolor: "background.paper",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }}>
          Copyright © 2025 Zaph Tours, All rights reserved
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: 1, flexWrap: "wrap", alignItems: "center" }}
        >
          <Typography>We Accept</Typography>

          <Tooltip title="Visa">
            <IconButton sx={{ color: "primary.main", fontSize: 30 }}>
              <FaCcVisa />
            </IconButton>
          </Tooltip>

          <Tooltip title="PayPal">
            <IconButton sx={{ color: "primary.main", fontSize: 30 }}>
              <FaCcPaypal />
            </IconButton>
          </Tooltip>

          <Tooltip title="Credit Card">
            <IconButton sx={{ color: "primary.main", fontSize: 40 }}>
              <CiCreditCard2 />
            </IconButton>
          </Tooltip>

          <Tooltip title="MasterCard">
            <IconButton sx={{ color: "primary.main", fontSize: 30 }}>
              <FaCcMastercard />
            </IconButton>
          </Tooltip>

          <Tooltip title="Apple Pay">
            <IconButton sx={{ color: "primary.main", fontSize: 30 }}>
              <FaApplePay />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  );
};

type Item = {
  img: string;
  title: string;
};

const itemData: Item[] = [
  { img: "/images/instaPost1.jpeg", title: "instagram post 1" },
  { img: "/images/instapost2.png", title: "instagram post 2" },
  { img: "/images/instapost6.png", title: "instagram post 3" },
  { img: "/images/instapost4.png", title: "instagram post 4" },
  { img: "/images/instapost5.png", title: "instagram post 5" },
  { img: "/images/instapost3.png", title: "instagram post 6" },
];
