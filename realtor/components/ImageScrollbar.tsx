import { useContext } from 'react';
import Image from 'next/image';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div className="flex justify-center items-center mr-1">
      <button onClick={() => scrollPrev()}>
        <FaArrowAltCircleLeft />
      </button>
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div className="flex justify-center items-center ml-1">
      <button onClick={() => scrollNext()}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};
export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div className="w-screen overflow-hidden p-1" key={item.id}>
          <Image
            alt=""
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </div>
      ))}
    </ScrollMenu>
  );
}
