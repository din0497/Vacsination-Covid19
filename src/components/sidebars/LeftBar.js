import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAll } from "../../api/http";
import { LeftContainer } from "../styles/leftStyles";
import Country from "./Country";

const LeftBar = () => {
  const dispatch = useDispatch();
  const all = useSelector(state => state.all);

  useEffect(() => {
    getAll(dispatch)
  }, [dispatch]);

  return (
    <LeftContainer>
      {all.map((d, i) => (
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
