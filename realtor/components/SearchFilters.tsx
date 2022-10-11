import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
  const [filters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  return (
    <div className="bg-gray-100 p-4 flex justify-center flex-wrap">
      {filters?.map((filter) => (
        <div key={filter.queryName}>
          <select
            className="p-2 m-1"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
          >
            <option
              value={filter.placeholder}
              key={filter.placeholder}
              selected
              disabled
              hidden
            >
              {filter.placeholder}
            </option>
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};
export default SearchFilters;
