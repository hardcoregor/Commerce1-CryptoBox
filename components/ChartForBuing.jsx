import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { data, dataLow, dataMid, dataHigh } from '../utils/localStore'
import { useSelector } from 'react-redux'

const ChartForBuing = () => {
  const boxSelect = useSelector(state => state.utils.typeBox)

  return (
    <div className='h-full w-full'>
      <ResponsiveLine
        data={boxSelect === 'play' ? dataHigh : boxSelect === 'invest' ? dataMid : boxSelect === 'save' ? dataLow : data}
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
                fill: '#888888'
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
              color: '#24252D',
            }
          }
        }}
        colors={{ datum: "color" }}
        margin={{ top: 30, right: 10, bottom: 55, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        yFormat={value =>
          `${Number(value).toLocaleString('ru-RU', {
            minimumFractionDigits: 0,
          })} %`
        }
        // curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 90,
          legend: "2023",
          legendOffset: 60,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 10,
          tickRotation: 0,
          legend: "Доходность %",
          legendOffset: -50,
          legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={'transparent'}
        pointBorderWidth={2}
        pointBorderColor={'transparent'}
        pointLabelYOffset={-12}
        enableArea={true}
        areaBaselineValue={0}
        useMesh={true}
        enableSlices="x"
        legends={[
          {
            // anchor: 'right',
            direction: 'row',
            justify: false,
            translateX: 50,
            translateY: -50,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 150,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default ChartForBuing