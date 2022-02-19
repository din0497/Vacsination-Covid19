import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../Redux/actions/actions";
import { LeftContainer } from "../styles/leftStyles";
import Country from "./Country";

const LeftBar = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v2/countries`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        dispatch(fetchData(responseData))
      });
  }, []);
  return (
    <LeftContainer>
      {data.map((d, i) => (
        <Country
          key={i}
          active={d.active}
          confirmed={d.cases}
          country={d.country}
          recovered={d.recovered}
          death={d.deaths}
        />
      ))}
    </LeftContainer>
  );
};

export default LeftBar;
