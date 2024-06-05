import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Logo } from "./Logo";
import { PrimaryNavItems } from "./PrimaryNavItems";
import { SecondaryNavItems } from "./SecondaryNavItems";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to bottom, white 55%, #FEFEDF 0%)",
        py: 1,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Logo />
        <Box>
          <PrimaryNavItems />
          <SecondaryNavItems />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
