import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselA = () => {
  const items = [
    {
      src: 'https://picsum.photos/id/1018/800/600',
      alt: 'Imagen 1',
      caption: 'Primera imagen'
    },
    {
      src: 'https://picsum.photos/id/1015/800/600',
      alt: 'Imagen 2',
      caption: 'Segunda imagen'
    },
    {
      src: 'https://picsum.photos/id/1019/800/600',
      alt: 'Imagen 3',
      caption: 'Tercera imagen'
    },
    {
      src: 'https://picsum.photos/id/1020/800/600',
      alt: 'Imagen 4',
      caption: 'Cuarta imagen'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 relative">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        interval={4000}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={clickHandler}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 rounded-full p-2"
            >
              <span className="text-green-600 text-6xl font-bold">‹</span>
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={clickHandler}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 rounded-full p-2"
            >
              <span className="text-green-600 text-6xl font-bold">›</span>
            </button>
          )
        }
      >
        {items.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="legend !bg-white/80 !text-green-700 font-semibold">
              {item.caption}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselA;
