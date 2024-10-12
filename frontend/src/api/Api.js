const API_KEY = "10bf1ea2-c9e3-4f20-bf1d-4c317c698702";

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("error:", error));
};
