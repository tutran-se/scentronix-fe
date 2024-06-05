import RecipeDetails from "@/components/RecipeDetails";
export default function RecipeDetailsPage({
  params: { recipeId },
}: {
  params: { recipeId: string };
}) {
  return <RecipeDetails recipeId={recipeId} />;
}
