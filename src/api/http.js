import axios from "axios";
import { fetchAll, fetchData, fetchSingleV } from "../Redux/actions/actions";

const baseURL = "https://disease.sh/v3/covid-19";


export const getCountry = async (base, dispatch) => {
  let res;
  dispatch(fetchData({},true))
  console.log('loading......')
  try {
    res = await axios.get(`${baseURL}/countries/${base}`);
    dispatch(fetchData(res.data, false))
  } catch (err) {
    console.log(err.response.data);
    alert(res.data.msg);
  }
  console.log('loading..done')
};

export const getAll = async (dispatch) => {
  let res;
  dispatch(fetchData([],true))
  try {
    res = await axios.get(`${baseURL}/countries`);
  } catch (err) {
    console.log(err.response.data);
    alert(res.data.msg);
  }
  dispatch(fetchAll(res.data, false))
};

// export const getAllVaccinated = async (dispatch) => {
//   let res;
//   dispatch(fetchSingleV([],true))
//   try {
//     res = await axios.get(`${baseURL}/countries?lastdays=1`);
//   } catch (err) {
//     console.log(err.response.data);
//     alert(res.data.msg);
//   }
//   dispatch(fetchSingleV(res.data, false))
// };

export const getSingleVaccinated = async (name,dispatch) => {
  let res;
  dispatch(fetchSingleV([],true))
  try {
    res = await axios.get(`${baseURL}/vaccine/coverage/countries/${name}?lastdays=1`);
    // console.log(res.data);
    dispatch(fetchSingleV(res.data, false))
  } catch (err) {
    console.log(err.response.data);
    alert(res.data.msg);
  }
};



