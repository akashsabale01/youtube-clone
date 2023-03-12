import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  // const navigate = useNavigate();
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log(error);
    window.location.href = "/technicalissue";
    // if (error.response && error.response.status === 429) {
    // console.log(
    //   `Received 429 error, Api limit exceeded, Try on the next day`
    // );
    //   window.location.href = "http://localhost:3000/technicalissue";
    //   return {
    //     error: "Received 429 error, Api limit exceeded, Try on the next day",
    //   };
    // } else if (error.request) {
    //   console.error("Network error");
    //   return { error: "Network error" };
    // } else {
    //   console.error(error.message);
    //   return { error: error.message };
    // }
  }
};
