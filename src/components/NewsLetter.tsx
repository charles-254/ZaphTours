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

export const NewsLetter = () => {
  return (
    <Stack sx={{paddingBlock:8, backgroundColor: "background.paper"}}>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: 15,
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
      <Stack direction="row" sx={{ gap: 4, justifyContent: "center", mt: 4 }}>
        {Articles.map((article, index) => (
          <Card sx={{ maxWidth: 345, backgroundColor: "#0a0a0ad4"}} key={index}>
            <CardMedia
              component="img"
              alt="article image"
              height="250"
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

interface Article {
  img: string;
  description: string;
}

const Articles: Article[] = [
  {
    img: "/images/article1.png",
    description: "The 7 amazing destinations for adventure seekers.",
  },
  {
    img: "/images/article2.png",
    description: "The best time to visit Africa and enjoy the cherry blossoms.",
  },
  {
    img: "/images/article3.png",
    description: "10 Reasons why you should visit Kenya.",
  },
];
