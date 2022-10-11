import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/house.png';
import { PropertyType } from '../types/Property';

const Property = ({
  coverPhoto,
  price,
  rentFrequency,
  rooms,
  title,
  baths,
  area,
  agency,
  isVerified,
  externalID,
}: PropertyType) => {
  return (
    <Link href={`/property/${externalID}`}>
      <div className="w-96 p-5 pt-0 cursor-pointer">
        <div>
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width={400}
            height={260}
            alt="house"
          />
        </div>
        <div className="flex flex-wrap pt-2 items-center justify-center">
          <div className="text-green-500">{isVerified && <GoVerified />}</div>
          <div className="font-bold text-lg p-2">
            Eur {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </div>
          <Image src={agency?.logo?.url} height={40} width={80} alt="logo" />
          <div className="flex items-center p-1 justify-between text-blue-400 w-48">
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
            <BsGridFill />
          </div>
          <p className="text-lg">
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Property;
