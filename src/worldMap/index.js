import React from "react";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";


import MapChart from "./MapChart.js";

function WorldMap() {
  const {tooltip, data} = useSelector(state => state);
  return (
    <>
      <MapChart/>
      <ReactTooltip>{`${tooltip}`}</ReactTooltip>
    </>
  );
}

export default WorldMap;
