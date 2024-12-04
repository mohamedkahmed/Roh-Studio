import About from "@/components/ui/about/About";
import Header from "@/components/ui/header/Header";
import Story from "@/components/ui/story/Story";
import TheBestEver from "@/components/ui/theBestEver/TheBestEver";
import VariousPrograms from "@/components/ui/various-programs/VariousPrograms";

const HomePage = () => {
  return (
    <div>
      {/* header section */}
      <Header />
      {/* Story Section */}
      <Story />
      {/* about section */}
      <About />
      {/* Various Programs */}
      <VariousPrograms />
      {/* The Best Ever */}
      <TheBestEver />
    </div>
  );
};

export default HomePage;