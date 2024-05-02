
import useCountryList from "@/zustand/countryList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CountryButton = () => {
  const navigate = useNavigate();
  const { countryList, fetchCountryList } = useCountryList();
  useEffect(() => {
    fetchCountryList();
  }, [fetchCountryList]);
  return (
    <>
      {countryList?.map((country, index) => (
        <button
          key={country.idMeal || index}
          onClick={() => navigate(`/country/${country.strArea}`)}
          className="inline-flex items-center justify-center rounded-full border border-gray-500 bg-white px-6 py-1 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:bg-gray-600 focus:text-white"
        >
          {country.strArea}
        </button>
      ))}
    </>
  );
};
