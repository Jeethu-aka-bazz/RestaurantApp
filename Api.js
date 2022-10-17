const SEARCH_API = 'https://worldwide-restaurants.p.rapidapi.com/typeahead';
const RESTAURANT_API = 'https://worldwide-restaurants.p.rapidapi.com/search';

const API_KEY = '6f31118797msh5440041c30c0701p1e6a11jsn2e608fb72102';
const HOST_NAME = 'worldwide-restaurants.p.rapidapi.com';

const callCitySearchApi = (apiLink, options) => {
  return fetch(apiLink, options)
    .then(res => {
      return res.json();
    })
    .then(response => {
      return response;
    });
};

const callRestaurantApi = (apiLink, options) => {
  return fetch(apiLink, options)
    .then(res => {
      return res.json();
    })
    .then(response => {
      return response;
    });
};

export {
  SEARCH_API,
  RESTAURANT_API,
  API_KEY,
  HOST_NAME,
  callCitySearchApi,
  callRestaurantApi,
};
