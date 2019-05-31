import React from "react";
import Slider from "react-slick";

import Image1 from "../../resources/images/slide_one.jpg";
import Image2 from "../../resources/images/slide_two.jpg";
import Image3 from "../../resources/images/slide_three.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 100
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}>
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(https://img.jakpost.net/c/2019/05/28/2019_05_28_73494_1559050643._large.jpg)`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
          <div> 
          <div
            className="carrousel_image"
            style={{
              background: `url(https://www.cricket.com.au/~/-/media/News/2017/04/25EnglandCTsquad.ashx?w=1600)`,
              height: `${window.innerHeight}px`
            }}
          />

           </div>  
                 <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(http://www.observerbd.com/2019/04/03/observerbd.com_1554269151.JPG)`,
              height: `${window.innerHeight}px`
            }}
          />
           </div>  
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(https://newsd.in/wp-content/uploads/2019/04/Team-India-world-cup-squad-1.jpg)`,
              height: `${window.innerHeight}px`
            }}
            
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(https://sportzwiki.com/wp-content/uploads/2019/04/Australian-national-cricket-team.jpg)`,
              height: `${window.innerHeight}px`
            }}
          />
     </div>    
         
                 <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(https://www.greenteam92.com/wp-content/uploads/2017/07/west-indies-reuters-m.jpg)`,
              height: `${window.innerHeight}px`
            }}
          />
           </div>  
           <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(https://pbs.twimg.com/media/D4_0PjaX4AItUIJ.jpg)`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
