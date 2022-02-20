import { CountryList, CountryTitle, Property } from "../styles/leftStyles";
const Country = (props) => {

  return (
    <CountryList id={`${props.country}`}>
      <CountryTitle>{props.country}</CountryTitle>
      <Property>
        Confirmed: <span style={{color:'orange'}}>{props.confirmed}</span>
      </Property>
      <Property>
        Active: <span style={{color:'orange'}}>{props.active}</span>
      </Property>
      <Property>
        Recovered: <span style={{color:'orange'}}>{props.recovered}</span>
      </Property>
      <Property>
        Death: <span style={{color:'orange'}}>{props.death}</span>
      </Property>
    </CountryList>
  );
};

export default Country;
