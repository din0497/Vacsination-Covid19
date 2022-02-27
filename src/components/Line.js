import React from "react";
import Plot from "react-plotlyjs";

const Line = () => {
    
  return (
    <div>
      <Plot
        data={[
          { x: ["Men", "women", "child"], y: [11, 15, 20], type: "scatter" },
        ]}
        layout={{ width: 1000, height: 500, title: "text" }}
      />
    </div>
  );
};

export default Line;
