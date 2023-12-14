import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import axios from "axios";
import { Box } from "@mui/material";

const ArticleList = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setArticles(res.data);
    });
  }, []);

  return articles ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {articles.map((article) => (
        <ArticleCard key={article.id} articleData={article} />
      ))}
    </Box>
  ) : null;
};

export default ArticleList;
