import axios from "axios";
const url = "https://dashboard.xfmradio.co.ke/api/nowplaying/xfm-online";
export const nowPlaying = async () => {
  try {
    let data = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
};
