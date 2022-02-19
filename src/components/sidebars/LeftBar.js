import { useEffect, useState } from "react";
import { LeftContainer } from "../styles/leftStyles";
import Country from "./Country";

const LeftBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v2/countries`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, []);
  console.log(data);
  return (
    <LeftContainer>
      {data.map((d,i) => (
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
