import "./App.css";
import hero from "./imgPaint/IMG_1529.JPG";
import photoSide from "./imgPhoto/IMG_1542.JPG";
import paintside from "./imgPaint/IMG_5.jpeg";
import Hero from "./components/Hero";

import Slider from "./components/Slider";

 

function Home() {
 

  return (
    <div className="App">
         
      <Hero imageSrc={hero} />
      <Slider
        imageSrc={photoSide}
        title={"Photography"}
        subtitle={
          "Taking pictures is savoring life intensely, every hundredth of a second.          - Marc Riboud"
        }
      />
      <Slider
        imageSrc={paintside}
        title={"Paintings"}
        subtitle={"Painting is easy when you don't know how, but very difficult when you do.        - Edgar Degas"}
        flipped={true}
      />
    </div>
  );
}


export default Home;
