import Image from 'next/image';
import Link from 'next/link';
import { BannerType } from '../types/Banner';

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  description1,
  nameUrl,
  buttonText,
}: BannerType) => {
  return (
    <div className="flex flex-wrap justify-center items-center m-10">
      <Image alt="banner" src={imageUrl} width={500} height={300} />
      <div className="p-5 flex flex-col justify-center items-center">
        <span className="text-gray-500 text-sm font-medium">{purpose}</span>
        <span className="text-3xl font-bold">{title1}</span>
        <span className="text-3xl font-bold">{title2}</span>
        <span className="text-lg py-3 text-gray-700">{description1}</span>
        <button className="text-xl bg-gray-100 p-2">
          <Link href={nameUrl}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
