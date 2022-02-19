import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";


import MapChart from "./MapChart.js";

function WorldMap() {
  const {tooltip, data} = useSelector(state => state);
  return (
    <>
      <MapChart/>
      <ReactTooltip>{`${tooltip} - ${data.cases}`}</ReactTooltip>
    </>
  );
}

export default WorldMap;
