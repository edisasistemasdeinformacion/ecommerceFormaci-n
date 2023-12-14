import { Box, Button, Paper, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ArticleCard = ({ articleData }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "300px",
        height: "400px",
        padding: "1.3rem",
        borderRadius: "13px",
        margin: "2rem",
      }}
    >
      <Box sx={{ height: "50%" }}>
        <img
          alt={articleData.title}
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          src={articleData.image}
        />
      </Box>
      <Box sx={{ height: "50%" }}>
        <Box sx={{ height: "50%", overflow: "hidden" }}>
          <h3
            style={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}
          >
            {articleData.title}
          </h3>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Rating name="read-only" value={articleData.rating.rate} readOnly />
          <p style={{ marginLeft: "5px", color: "gray" }}>
            (+{articleData.rating.count})
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: 0,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "bold" }}>{articleData.price}€</p>
          <Button variant="contained">
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ArticleCard;
