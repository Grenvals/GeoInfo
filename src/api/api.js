const nasaAPIKey = 'ZWZGPL-V74C37-LGKJZW-4K2T';

const spacexAPIBaseURL = 'https://api.spacexdata.com/v4';
const nasaAPIBaseURL = 'https://www.n2yo.com/rest/v1';

export const spacexAPI = {
  getStarlinkSatelites: () => {
    return fetch(`${spacexAPIBaseURL}/starlink`, {}).then((response) => response.json());
  },
  getLandingZones: () => {
    return fetch(`${spacexAPIBaseURL}/landpads`, {}).then((response) => response.json());
  },
};

export const nasaAPI = {
  getISScoordinates: () => {
    return fetch(
      `${nasaAPIBaseURL}/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=${nasaAPIKey}`,
      {}
    ).then((response) => response.json());
  },
};
