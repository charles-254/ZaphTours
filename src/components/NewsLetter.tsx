import {
  Stack,
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import Articles from "../data/newsLetter";

export const NewsLetter = () => {
  return (
    <Stack sx={{ paddingBlock: 8, backgroundColor: "background.paper" }}>
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={2}
        sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          px: 1,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Marck Script", cursive',
              fontWeight: 500,
              color: "secondary.main",
              alignSelf: "center",
              fontSize: {
                sm: 50,
                xs: 40,
              },
            }}
          >
            {" "}
            Blog And Article
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: '"UoqMunThenKhung", serif',
              textTransform: "capitalize",
              fontSize: {
                sm: 34,
                xs: 26,
              },
            }}
          >
            news and articles from zaph tours
          </Typography>
        </Box>
        <Stack>
          <Button
            variant="outlined"
            size="large"
            endIcon={<FaArrowRightLong />}
          >
            Get more articles
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: 4,
          justifyContent: "center",
          mt: 4,
          display: "flex",
          flexWrap: "wrap",
          px: 1,
        }}
      >
        {Articles.map((article, index) => (
          <Card sx={{ width: 400, backgroundColor: "#0a0a0ad4" }} key={index}>
            <CardMedia
              component="img"
              alt="article image"
              height="300"
              image={article.img}
            />
            <CardContent>
              <Stack direction="row" sx={{ gap: 1, mb: 1 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  July 02, 2025
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ border: "1px solid" }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {" "}
                  6 min read
                </Typography>
              </Stack>
              <Typography variant="body1">{article.description}</Typography>
            </CardContent>
            <CardActions sx={{ mb: 2 }}>
              <Button
                size="medium"
                variant="outlined"
                endIcon={<FaArrowRightLong />}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};
