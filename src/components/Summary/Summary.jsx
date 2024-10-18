import { Typography } from "@mui/joy";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import * as React from "react";

export default function PieAnimation({ contribution, theRest, initiative }) {
  const valueFormatter = (item) => `$${item.value}`;

  return (
    <Box sx={{ width: 400 }}>
      <Typography level="h3" sx={{ mb: -4 }}>
        {initiative}
      </Typography>
      <PieChart
        height={400}
        series={[
          {
            data: [
              {
                id: 0,
                value: theRest,
                label: "Others contributions",
              },
              {
                id: 1,
                value: contribution,
                label: "Your Contribution",
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
          legend: { hidden: true },
        }}
      />
    </Box>
  );
}
