import { Avatar, Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "#87C4FF",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem 0 2rem",
        }}
      >
        <h1>Ecommerce</h1>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
      </Box>
    </Box>
  );
};

export default Navbar;
