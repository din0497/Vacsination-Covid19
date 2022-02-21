import { Info, Flag, RightContainer, Wrapper } from "../styles/rightStyles";

import Cases from "./Case/Cases";
import { useSelector } from "react-redux";

const RightBar = () => {
  const data = useSelector((state) => state);

  const timeline = data.singleV?.timeline;
  let vaccine;
  for (let key in timeline) {
    vaccine = timeline[key];
  }
  return (
    <RightContainer>
      <Info>
        <h4>{data.data.country}</h4>
        <Flag src={data.data.countryInfo?.flag} />
      </Info>
      <Wrapper>
        <Cases text="Total cases" color="red" number={data.data.cases} />
        <Cases text="Vaccination" color="blue" number={vaccine} />
        <Cases text="Recovered" color="green" number={data.data.recovered} />
        <Cases text="Deaths" color="black" number={data.data.deaths} />
      </Wrapper>
    </RightContainer>
  );
};

export default RightBar;
