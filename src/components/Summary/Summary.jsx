import { Typography } from "@mui/joy";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import * as React from "react";

export default function PieAnimation({ contribution, theRest, initiative }) {
  const valueFormatter = (item) => `$${item.value}`;

  return (
    <>
      <h2>{initiative}</h2>
      <Box sx={{ width: 480 }}>
        <PieChart
          margin={{ top: 100, bottom: 100 }}
          colors={["#0065A4", "#808285"]}
          height={400}
          series={[
            {
              data: [
                {
                  id: 0,
                  value: theRest,
                  label: "Mental Health Initiatives",
                },
                {
                  id: 1,
                  value: contribution,
                  label: "Youth Empowerment through Sports",
                },
              ],
              innerRadius: 0,
              //arcLabel: (item) => `$${item.value}`,
              valueFormatter,
              highlightScope: { fade: "global", highlight: "item" },
              faded: { additionalRadius: -5 },
            },
          ]}
          skipAnimation={false}
          slotProps={{
            legend: {
              hidden: false,
              direction: "row",
              position: { vertical: "bottom", horizontal: "bottom" },
              padding: 0,
            },
          }}
        />
      </Box>
    </>
  );
}
