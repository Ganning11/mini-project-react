import Carousel from "./Carousel";
import SlickCarousel from "./SlickCarousel";

const App = () => {
  return (
    <main>
      {/* Manual */}
      <Carousel />
      {/* Menggunakan Plugin */}
      <SlickCarousel />
    </main>
  );
};
export default App;
