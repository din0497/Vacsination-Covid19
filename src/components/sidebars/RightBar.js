import { Info, Flag, RightContainer, Wrapper } from "../styles/rightStyles";
import FadeLoader from "react-spinners/FadeLoader";

import Cases from "./Case/Cases";
import { useSelector } from "react-redux";
import Spinner from "../../Ui/Spinner/Spinner";

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
          <FadeLoader color="green" />
        </div>
      ) : (
        <>
          <Info>
            <h4>{data.data.country}</h4>
            <Flag src={data.data.countryInfo?.flag} />
          </Info>
          <Wrapper>
            <Cases text="Total cases" color="red" number={data.data.cases} />
            <Cases text="Vaccination" color="blue" number={vaccine} />
            <Cases
              text="Recovered"
              color="green"
              number={data.data.recovered}
            />
            <Cases text="Deaths" color="black" number={data.data.deaths} />
          </Wrapper>
        </>
      )}
    </RightContainer>
  );
};

export default RightBar;
