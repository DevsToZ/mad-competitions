import { useEffect, useRef } from "react";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";

interface ProductCarouselProps {
  images: File[];
}

const ProductCarousel = ({ images }: ProductCarouselProps) => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(max-width: 1200px)");

  useEffect(() => {
    //@ts-ignore
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      //@ts-ignore
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlides = () => {
    return images?.map((slide: any, index: number) => (
      <SplideSlide key={`${slide.name}-${index}`}>
        <Image
          src={slide}
          alt={`${slide}-${index}`}
          style={{ objectFit: "contain" }}
        />
      </SplideSlide>
    ));
  };

  const thumbWidth =
    (isMobile ? 768 : 1500) * (isMobile ? 0.2 : isTablet ? 0.11 : 0.225);

  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    height: isMobile ? "25rem" : isTablet ? "35rem" : "25rem",
    cover: true,
    arrows: true,
  };

  const thumbsOptions: Options = {
    type: "slide",
    perPage: 3,
    rewind: true,
    pagination: false,
    fixedWidth: !isMobile && !isTablet ? thumbWidth / 2 : thumbWidth,
    fixedHeight: !isMobile && !isTablet ? thumbWidth / 2 : thumbWidth,
    cover: true,
    focus: "center",
    isNavigation: true,
    arrows: false,
    gap: isMobile ? 15 : 25,
  };

  return (
    <Flex gap={4} overflow={"hidden"} w={isTablet || isMobile ? "100%" : "50%"}>
      <Flex flexDir={"column"} w={"100%"} gap={2}>
        <Splide
          options={mainOptions}
          ref={mainRef}
          aria-labelledby="thumbnail-slider-main"
        >
          {renderSlides()}
        </Splide>

        <Splide
          options={thumbsOptions}
          ref={thumbsRef}
          aria-label="thumbnail-slider-slide"
        >
          {renderSlides()}
        </Splide>
      </Flex>
    </Flex>
  );
};

export default ProductCarousel;
