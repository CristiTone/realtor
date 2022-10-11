import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { BASE_URL, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';
import Image from 'next/image';

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <div className="m-auto p-4">
    {photos && <ImageScrollbar data={photos} />}
    <div>
      <div className="flex pt-2 items-center">
        <div className="pr-3 text-green-400">
          {isVerified && <GoVerified />}
        </div>
        <div className="text-bold text-lg">
          EUR {price} {rentFrequency && `/${rentFrequency}`}
        </div>
        <hr />
        <Image src={agency?.logo?.url} height={40} width={80} alt="logo" />
      </div>
      <div className="flex items-center p-1 justify-between w-64 text-blue-400">
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </div>
    </div>
    <div>
      <span className="text-lg mb-2 text-bold">{title}</span>
      <span className="leading-loose text-gray-600">{description}</span>
    </div>
    <div className="flex flex-wrap justify-between uppercase">
      <div className="flex justify-between w-72 border-b-2 border-gray-100 p-3">
        <span>Type</span>
        <span className="text-bold">{type}</span>
      </div>
      <div className="flex justify-between w-72 border-b-2 border-gray-100 p-3">
        <span>Purpose</span>
        <span className="text-bold">{purpose}</span>
      </div>
      {furnishingStatus && (
        <div className="flex justify-between w-72 border-b-2 border-gray-100 p-3">
          <span>Furnishing Status</span>
          <span className="text-bold">{furnishingStatus}</span>
        </div>
      )}
    </div>
    <div>
      {amenities.length && (
        <span className="text-2xl text-bold mt-5">Facilites:</span>
      )}
      <div className="flex flex-wrap">
        {amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <span
              className="text-bold text-blue-400 text-l p-2 bg-gray-200 m-1 rounded-2xl"
              key={amenity.text}
            >
              {amenity.text}
            </span>
          )),
        )}
      </div>
    </div>
  </div>
);

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${BASE_URL}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}

export default PropertyDetails;
