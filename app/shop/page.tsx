import { Box, Typography } from "@mui/material";
export default function ShopPage() {
  return (
    <Box
      component="main"
      sx={{ display: "flex", gap: 5, maxWidth: "1200px", mx: "auto", mt: 5 }}
    >
      <Box sx={{ flex: 1 }}>
        <Box component="header">
          <Typography variant="h2" sx={{ mt: 2, fontWeight: "bold" }}>
            Shop Page
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
