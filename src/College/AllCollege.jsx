import { Carousel } from "rsuite";
import "./slider.css";
const AllCollege = () => {
  const sliderImage = [
    {
      minSrc:
        "https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      maxSrc:
        "https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      src: "https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg",
    },{
      minSrc:"https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      maxSrc:"https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      src:"https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg",
    },{
      minSrc:"https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      maxSrc:"https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      src:"https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg",
    },{
        minSrc:"https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        maxSrc:"https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        src:"https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    },{
        minSrc:"https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        maxSrc:"https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        src:"https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg",
    },{
       minSrc:"https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
       maxSrc:"https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
       src:"https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg", 
    }
  ];
  return (
    <div>
      <Carousel autoplay className="custom-slider slider-area">
        {sliderImage.map((item, index) => {
          return (
            <picture key={index}>
              <source media="(max-width: 600px)" srcSet={item.minSrc} />
              <source media="(min-width: 600px)" srcSet={item.maxSrc} />
              <img src={item.src} alt="adda college" />
            </picture>
          );
        })}
      </Carousel>
    </div>
  );
};

export default AllCollege;
