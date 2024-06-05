"use client";

import { Box, Typography } from "@mui/material";

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <Box component="main" sx={{ maxWidth: "1200px", mx: "auto", mt: 5 }}>
      <Typography variant="h4" color="error">
        Something went wrong!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {error.message}
      </Typography>
    </Box>
  );
}
