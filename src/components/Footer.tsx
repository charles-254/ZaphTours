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
        direction="row"
        sx={{
          paddingBlock: 10,
          gap: 6,
          alignItems: "center",
          justifyContent: "center",
          textTransform: "capitalize",
          borderBottom: "1px solid gray",
          alignSelf: "center",
        }}
      >
        <Stack sx={{ maxWidth: "33%" }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Marck Script", cursive',
              fontWeight: 500,
              color: "secondary.main",
            }}
          >
            {" "}
            Get updated with the lastest newsletter
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 3 }}>
          <TextField
            label="Enter Email"
            variant="outlined"
            sx={{ bgcolor: "#1a1a1a", borderRadius: 3 }}
          />
          <Button
            variant="outlined"
            endIcon={<IoIosSend />}
            sx={{ fontSize: 15 }}
          >
            {" "}
            Subscribe now
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-evenly", gap: 2, paddingBlock: 10 }}
      >
        <Stack sx={{ maxWidth: "25%" }}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <IconButton color="primary" sx={{ fontSize: 100 }}>
              {" "}
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
          <Stack>
            <Typography sx={{ color: "text.secondary", mt: 1 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              officia eligendi consequuntur, temporibus laborum illo animi
              eveniet id dicta laboriosam aut totam unde dolorum veniam? Officia
              rem natus ducimus unde!
            </Typography>
          </Stack>
          <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
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
        <Stack sx={{ alignItems: "center" }}>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
              fontFamily: '"UoqMunThenKhung", serif',
            }}
          >
            {" "}
            Useful Links
          </Typography>
          <Stack sx={{ alignItems: "flex-start" }}>
            <Button
              variant="text"
              startIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              sx={{ color: "text.secondary" }}
              href="/"
            >
              Home
            </Button>
            <Button
              variant="text"
              startIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              sx={{ color: "text.secondary" }}
              href="/destinations"
            >
              Destinations
            </Button>
            <Button
              variant="text"
              startIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              sx={{ color: "text.secondary" }}
              href="/trip-types"
            >
              Trip types
            </Button>
            <Button
              variant="text"
              startIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              sx={{ color: "text.secondary" }}
              href="/contact-us"
            >
              Contact us
            </Button>
            <Button
              variant="text"
              startIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              sx={{ color: "text.secondary" }}
            >
              About us
            </Button>
            <Button
              variant="text"
              startIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              sx={{ color: "text.secondary" }}
            >
              Testimonials
            </Button>
          </Stack>
        </Stack>
        <Stack sx={{ gap: 1.5 }}>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
              textAlign: "left",
              fontFamily: '"UoqMunThenKhung", serif',
            }}
          >
            {" "}
            Get In Touch
          </Typography>
          <Stack direction="row">
            <Stack>
              <IconButton
                size="large"
                sx={{ color: "primary.main", fontSize: 25 }}
              >
                {" "}
                <FaPhoneVolume />
              </IconButton>
            </Stack>
            <Stack sx={{ color: "text.secondary" }}>
              <Typography>+2547 345 6787</Typography>
              <Typography>+2547 071 3358</Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
            <Stack>
              <IconButton
                size="large"
                sx={{ color: "primary.main", fontSize: 25 }}
              >
                {" "}
                <WhatsApp />
              </IconButton>
            </Stack>
            <Stack sx={{ color: "text.secondary" }}>
              <Typography>+2547 345 6787</Typography>
              <Typography>+2547 071 3358</Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
            <Stack>
              <IconButton
                size="large"
                sx={{ color: "primary.main", fontSize: 25 }}
              >
                {" "}
                <IoMail />
              </IconButton>
            </Stack>
            <Stack sx={{ color: "text.secondary" }}>
              <Typography>mailinfo@zaph.com</Typography>
              <Typography>zaphtours@zaph.com</Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
            <Stack>
              <IconButton
                size="large"
                sx={{ color: "primary.main", fontSize: 25 }}
              >
                {" "}
                <FaLocationDot />
              </IconButton>
            </Stack>
            <Stack sx={{ color: "text.secondary" }}>
              <Typography>273 Safari Lane, Holy Park, </Typography>
              <Typography>Nairobi, Kenya</Typography>
            </Stack>
          </Stack>
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
          <Stack>
            <ImageList sx={{ width: 300, height: 260 }}>
              {itemData.map((item) => (
                <ImageListItem sx={{ height: 70 }}>
                  <img src={`${item.img}`} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{
          paddingBlock: 2,
          paddingInline: 7,
          justifyContent: "space-evenly",
          alignItems: "center",
          bgcolor: "background.paper",
        }}
      >
        <Typography>
          {" "}
          Copyright © 2025 Zaph Tours, All rights reserved{" "}
        </Typography>
        <Stack direction="row" sx={{ gap: 2, alignItems: "center" }}>
          <Typography sx={{}}>We Accept</Typography>

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
  img: String;
  title: String;
};

const itemData: Item[] = [
  {
    img: "/images/instaPost1.jpeg",
    title: "instagram post 1",
  },
  {
    img: "/images/instapost2.png",
    title: "instagram post 2",
  },
  {
    img: "/images/instapost6.png",
    title: "instagram post 3",
  },
  {
    img: "/images/instapost4.png",
    title: "instagram post 4",
  },
  {
    img: "/images/instapost5.png",
    title: "instagram post 5",
  },
  {
    img: "/images/instapost3.png",
    title: "instagram post 6",
  },
];
