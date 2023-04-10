import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


const data = [
  {
    image: require("./images/image1.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("./images/image2.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: require("./images/image3.jpg"),
    caption: "Caption",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
<<<<<<< HEAD
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
=======
          <Carousel.Item key={i}>
            <img
              style={{ height: "600px" }}
>>>>>>> c2242bff4c1b4c5b900762f4c466f725c6a06d05
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
<<<<<<< HEAD

=======
>>>>>>> c2242bff4c1b4c5b900762f4c466f725c6a06d05
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
<<<<<<< HEAD
export default HomeCarousel;
=======
export default HomeCarousel;
>>>>>>> c2242bff4c1b4c5b900762f4c466f725c6a06d05
