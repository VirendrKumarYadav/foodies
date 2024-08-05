// /pages/recipes/[id].js
import { useRouter } from 'next/router';

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Recipe Detail</h1>
      <p>Recipe ID: {id}</p>
    </div>
  );
};

export default RecipeDetail;
