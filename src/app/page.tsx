import Hero from "./contant/Hero"
import FoodGalary from './contant/FoodGalary'
import Blog from './contant/blog'
import Content from "./contant/content"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Hero/>
     <Blog/>
     <FoodGalary/>
     <Content/>
    </main>
  );
}
