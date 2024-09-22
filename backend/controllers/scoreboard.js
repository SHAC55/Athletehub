import axios from "axios";

export const cricketAll = async (req, res) => {
  const response = await axios.get(
    "https://api.cricapi.com/v1/currentMatches?apikey=3b39788a-72df-4e1d-8bdd-bbae2837c3ea&offset=0"
  );
  const dat = response.data.data;
  res.json(dat);
};

export const seriesList = async (req, res) => {
  const response = await axios.get(
    "https://api.cricapi.com/v1/series?apikey=3b39788a-72df-4e1d-8bdd-bbae2837c3ea&offset=0"
  );
  const dat = response.data.data;
  res.json(dat);
};

export const football = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://football-highlights-api.p.rapidapi.com/leagues/97798",
    headers: {
      "x-rapidapi-key": "b22592c52fmshf5acbfd234260f3p16dbc9jsn8ceb03489f9e",
      "x-rapidapi-host": "football-highlights-api.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  res.status(200).json(response.data);

  //   } catch (error) {
  //     res
  //       .status(404)
  //       .json({ success: false, msg: "maa chuda bsdk kiya bakchodi krra h" });
  //   }
};
