import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import Link from "next/link";
export const Logo = () => {
  return (
    <Link href={"/"}>
      <Box sx={{ mr: 2, padding: "0" }}>
        <Image
          src="/images/monkey-logo.png"
          alt="Monkey Logo"
          width={100}
          height={37}
          priority
        />
      </Box>
    </Link>
  );
};
