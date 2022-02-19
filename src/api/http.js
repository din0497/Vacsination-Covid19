import axios from "axios";

const baseURL = "https://disease.sh/v3/covid-19";

export const getCountry = async (base) => {
  let res;
  try {
    res = await axios.get(`${baseURL}/countries/${base}`);
    console.log(res.data);
    return res;
  } catch (err) {
    console.log(err.response.data);
    alert(res.data.msg);
  }
};
