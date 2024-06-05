import RecipesList from "@/components/RecipesList";
import { Loading } from "@/components/Loading";
import { Box, Typography } from "@mui/material";
import { Suspense } from "react";

export default function RecipesPage() {
  return (
    <Box component="main" sx={{ maxWidth: "1200px", mx: "auto", mt: 5 }}>
      <Box sx={{ flex: 1 }}>
        <Box component="header">
          <Typography variant="h2" sx={{ mt: 2, fontWeight: "bold" }}>
            Recipies
          </Typography>
        </Box>
      </Box>
      <Box>
        <Suspense fallback={<Loading />}>
          <RecipesList />
        </Suspense>
      </Box>
    </Box>
  );
}
