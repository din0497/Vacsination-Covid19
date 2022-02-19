import axios from "axios";
import { fetchData } from "../Redux/actions/actions";

const baseURL = "https://disease.sh/v3/covid-19";

export const getCountry = async (base, dispatch) => {
  let res;
  try {
    res = await axios.get(`${baseURL}/countries/${base}`);
    // console.log(res);
    dispatch(fetchData(res.data))
    return res;
  } catch (err) {
    console.log(err.response.data);
    alert(res.data.msg);
  }
};
