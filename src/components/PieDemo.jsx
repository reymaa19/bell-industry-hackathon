import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';
import { mobileAndDesktopOS, valueFormatter } from './webUsageStats';

export default function PieAnimation() {
  const RADIUS = 0;
  const ITEM_NB = 3;

  return (
    <Box sx={{ width: '50%' }}>
      <h1>Contributions</h1>
      <PieChart
        height={400}
        series={[
          {
            data: mobileAndDesktopOS.slice(0, ITEM_NB),
            innerRadius: RADIUS,
            arcLabel: (params) => params.label ?? '',
            valueFormatter,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { additionalRadius: -10, color: '#003747' },
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

/** 
 * 
 */