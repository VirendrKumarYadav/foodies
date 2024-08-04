import Hero from "./content/Hero"
import FoodGalary from './content/FoodGalary'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Hero/>
     <FoodGalary/>
    </main>
  );
}
