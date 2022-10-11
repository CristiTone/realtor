import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFilter } from 'react-icons/bs';
import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import noresult from '../assets/images/noresult.svg';
import { BASE_URL, fetchApi } from '../utils/fetchApi';
import { PropertyType } from '../types/Property';

const Search = ({ properties }: { properties: Array<PropertyType> }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => setSearchFilters(!searchFilters)}
        className="flex space-x-2 cursor-pointer bg-gray-100 border-b-2 border-gray-200 p-2 text-lg justify-center items-center"
      >
        <span>Search Property By Filters</span>
        <BsFilter />
      </div>
      {searchFilters && <SearchFilters />}
      <span className="text-2xl p-4 font-bold">
        {router.query.purpose && `Properties ${router.query.purpose}`}
      </span>
      <div className="flex flex-wrap justify-center">
        {properties.map((property) => (
          <Property {...property} key={property.id} />
        ))}
      </div>
      {properties.length === 0 && (
        <div className="flex justify-center items-center flex-col my-5">
          <Image src={noresult} alt="no result" />
          <span className="text-xl mt-3">No Result Found.</span>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps({ query }: { [key: string]: any }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(
    `${BASE_URL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`,
  );
  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
