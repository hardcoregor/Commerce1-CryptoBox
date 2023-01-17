import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Box, Typography } from '@mui/material';

const PieChart = ({ isDashboard = false }) => {
  const data = [
    {
      "id": "Сберегательный",
      "label": "Сберегательный",
      "value": 5,
      "color": "#2196f3"
    },
    {
      "id": "Инвестиционный",
      "label": "Инвестиционный",
      "value": 35,
      "color": "#7d56af"
    },
    {
      "id": "Игровой",
      "label": "Игровой",
      "value": 60,
      "color": "#433b86"
    }
  ]

  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
      <ResponsivePie
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: 'white'
              }
            },
            legend: {
              text: {
                fill: 'white'
              }
            },
            ticks: {
              line: {
                stroke: 'white',
                stokeWidth: 1,
              },
              text: {
                fill: 'white'
              }
            }
          },
          legends: {
            text: {
              fill: 'white'
            }
          },
          tooltip: {
            container: {
              color: '#2D2E36',
            }
          }
        }}
        colors={{ datum: "data.color" }}
        margin={isDashboard ?
          { top: 40, right: 80, bottom: 100, left: 50 } :
          { top: 40, right: 80, bottom: 80, left: 80 }
        }
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              0.2
            ]
          ]
        }}
        enableArcLinkLabels={!isDashboard}

        arcLinkLabelsTextColor="white"
        arcLinkLabelsThickness={2}
        valueFormat={value =>
          `${Number(value).toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
          })} %`
        }
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              2
            ]
          ]
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 40,
            itemWidth: 80,
            itemHeight: 18,
            itemTextColor: 'white',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 15,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: 'white'
                }
              }
            ]
          }
        ]}
      />

      <Box
        position="absolute"
        top="50%"
        left="50%"
        color={'white'}
        textAlign="center"
        pointerEvents="none"
        sx={{
          transform: isDashboard ?
            "translate(-75%, -170%)" :
            "translate(-50%, -100%)"
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: 18 }}
        >
          {!isDashboard && "Сумма активов:"} 50000$
        </Typography>
      </Box>
    </Box>
  )
}

export default PieChart;