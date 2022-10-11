import Banner from '../components/Banner';
import Property from '../components/Property';
import { PropertyType } from '../types/Property';

import { BASE_URL, fetchApi } from '../utils/fetchApi';

const Home = ({
  propertiesForSale,
  propertiesForRent,
}: {
  propertiesForSale: Array<PropertyType>;
  propertiesForRent: Array<PropertyType>;
}) => {
  return (
    <div className="flex flex-col">
      <Banner
        purpose="RENT A HOME"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        title1="Rental Homes for"
        title2="Everyone"
        description1="Explore Apartments, Villas, Homes"
        description2="and more"
        nameUrl="/search?purpose=for-rent"
        buttonText="Explore Renting"
      />
      <div className="flex flex-wrap justify-center items-center">
        {propertiesForRent.map((property) => (
          <Property {...property} key={property.id} />
        ))}
      </div>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        description1=" Explore from Apartments, land, builder floors,"
        description2="villas and more"
        buttonText="Explore Buying"
        nameUrl="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <div className="flex flex-wrap justify-center items-center">
        {propertiesForSale.map((property) => (
          <Property {...property} key={property.id} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const propertiesForSale = await fetchApi(
    `${BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`,
  );
  const propertiesForRent = await fetchApi(
    `${BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`,
  );
  return {
    props: {
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits,
    },
  };
}

export default Home;
