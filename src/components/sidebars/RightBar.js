import React from "react";
import { Info, Flag, RightContainer, Wrapper } from "../styles/rightStyles";
import FadeLoader from "react-spinners/FadeLoader";

import Cases from "./Case/Cases";
import { useSelector } from "react-redux";
import Line from "../Line";

const RightBar = () => {
  const data = useSelector((state) => state);

  const timeline = data.singleV?.timeline;
  let vaccine;
  for (let key in timeline) {
    vaccine = timeline[key];
  }
  return (
    <RightContainer>
      {data.isLoading ? (
        <div style={{ position: "absolute", left: "152px", top: "56px" }}>
          <FadeLoader color="green"/>
        </div>
      ) : (
        <>
          <Info>
            <h4>{data.data.country}</h4>
            <Flag src={data.data.countryInfo?.flag} />
          </Info>
          <Wrapper>
            <Cases text="Total cases"  number={data.data.cases} />
            <Cases text="Vaccination"  number={vaccine} />
            <Cases
              text="Recovered"
              number={data.data.recovered}
            />
            <Cases text="Deaths"  number={data.data.deaths} />
            <Line />
          </Wrapper>
        </>
      )}
    </RightContainer>
  );
};

export default RightBar;
