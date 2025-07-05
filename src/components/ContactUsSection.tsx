import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  X,
  Instagram,
  LinkedIn,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { FaTimesCircle } from "react-icons/fa";

const ContactUsSection = () => {
  return (
    <Stack>
      <Stack
        sx={{
          backgroundImage: "url(/images/contactusbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: { xs: 2, sm: 4, md: 10 },
          py: { xs: 4, sm: 6, md: 10 },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontFamily: '"UoqMunThenKhung", serif',
            mb: 2,
            fontSize: {
              xs: "1.8rem",
              sm: "2.4rem",
              md: "3rem",
            },
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            width: "100%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              flex: 1,
              bgcolor: "transparent",
              border: "1px solid rgb(94, 94, 94)",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h5" gutterBottom>
              How Can We Assist You?
            </Typography>
            <Box component="form">
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "primary.main",
                      borderRadius: "10px",
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "primary.main",
                      borderRadius: "10px",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Subject"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "primary.main",
                      borderRadius: "10px",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Message"
                multiline
                rows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "primary.main",
                      borderRadius: "10px",
                    },
                  },
                }}
              />
              <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                Send Message
              </Button>
            </Box>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              flex: 1,
              bgcolor: "transparent",
              border: "1px solid rgb(94, 94, 94)",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Get In Touch
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              For inquiries or assistance, please contact our team. We’re here
              to help.
            </Typography>
            <Stack sx={{ gap: 1, mt: 1 }}>
              <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
                <Stack>
                  <IconButton
                    size="large"
                    sx={{ color: "primary.main", fontSize: 25 }}
                  >
                    <FaPhoneVolume />
                  </IconButton>
                </Stack>
                <Stack>
                  <Typography>+2547 345 6787</Typography>
                  <Typography>+2547 071 3358</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
                <Stack>
                  <IconButton
                    size="large"
                    sx={{ color: "primary.main", fontSize: 25 }}
                  >
                    <WhatsApp />
                  </IconButton>
                </Stack>
                <Stack>
                  <Typography>+2547 345 6787</Typography>
                  <Typography>+2547 071 3358</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
                <Stack>
                  <IconButton
                    size="large"
                    sx={{ color: "primary.main", fontSize: 25 }}
                  >
                    <IoMail />
                  </IconButton>
                </Stack>
                <Stack>
                  <Typography>mailinfo@zaph.com</Typography>
                  <Typography>zaphtours@zaph.com</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
                <Stack>
                  <IconButton
                    size="large"
                    sx={{ color: "primary.main", fontSize: 25 }}
                  >
                    <FaLocationDot />
                  </IconButton>
                </Stack>
                <Stack>
                  <Typography>273 Safari Lane, Holy Park, </Typography>
                  <Typography>Nairobi, Kenya</Typography>
                </Stack>
              </Stack>
            </Stack>

            <Box sx={{ my: 3 }}>
              <Typography variant="h6" gutterBottom>
                Office Hours
              </Typography>
              <Stack direction="row" sx={{ gap: 1 }}>
                <IoTimeOutline style={{ color: "#00b4d8", fontSize: "23px" }} />
                <Typography> Mon – Fri: 9:00 AM – 6:00 PM</Typography>
              </Stack>
              <Stack direction="row" sx={{ gap: 1, marginBlock: 1 }}>
                <IoTimeOutline style={{ color: "#00b4d8", fontSize: "23px" }} />
                <Typography> Saturday: 10:00 AM – 4:00 PM</Typography>
              </Stack>
              <Stack direction="row" sx={{ gap: 1 }}>
                <FaTimesCircle style={{ color: "red", fontSize: "20px" }} />
                <Typography>Sunday: Closed</Typography>
              </Stack>
            </Box>

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
          </Paper>
        </Box>
      </Stack>

      <Stack
        sx={{
          px: { xs: 2, sm: 6, md: 19 },
          py: { xs: 6, md: 8 },
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: '"UoqMunThenKhung", serif',
            fontSize: {
              xs: "1.8rem",
              sm: "2.4rem",
              md: "3rem",
            },
            textAlign: "center",
          }}
        >
          Our Location
        </Typography>
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.787251825411!2d36.82194661422657!3d-1.2920651359971706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2f9897b6f%3A0xb6a0df8a45ff3b3d!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1627024944396!5m2!1sen!2ske"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ContactUsSection;
