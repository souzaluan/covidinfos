const URL_BASE = 'https://disease.sh/v3/covid-19';
const basicFetch = async (endpoint) => {
  const request = await fetch(`${URL_BASE}${endpoint}`);
  const json = await request.json();
  return json;
};
export default {
  getCountryInfo: async (country) => basicFetch(`/countries/${country}`),
  getContinentsInfo: async () => basicFetch('/continents'),
  getAllCountryInfo: async () => basicFetch('/countries'),
  getWorldWideInfo: async () => basicFetch('/all'),
  getTimelineInfo: async () => basicFetch('/historical/all?lastdays=all'),
  getVaccineInfo: async () => basicFetch('/vaccine/coverage/countries?lastdays=1'),
};
