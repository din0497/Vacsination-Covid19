import {
  Info,
  Flag,
  RightContainer,
  Wrapper,
} from "../styles/rightStyles";

import Cases from "./Case/Cases";
import { useSelector } from "react-redux";

const RightBar = () => {
  const { data } = useSelector((state) => state);
  return (
    <RightContainer>
      <Info>
        <h4>{data.country}</h4>
        <Flag src={data.countryInfo === undefined? '': data.countryInfo.flag}/>
      </Info>
      <Wrapper>
        <Cases text="Total cases" color="red" number={data.cases} />
        <Cases text="Vaccination" color="blue" />
        <Cases text="Recovered" color="green" number={data.recovered} />
        <Cases text="Deaths" color="black" number={data.deaths} />
      </Wrapper>
    </RightContainer>
  );
};

export default RightBar;
