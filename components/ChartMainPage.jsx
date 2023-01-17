import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { data, dataHigh, dataLow, dataMid } from '../utils/localStore';

const ChartMainPage = ({selectRisk}) => {
  return (
    <div className='h-full w-full'>
      <ResponsiveLine
        data={selectRisk === 'low' ? dataLow : selectRisk === 'mid' ? dataMid : dataHigh}
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

        margin={{ top: 50, right: 50, bottom: 0, left: -1 }}
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
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={'transparent'}
        pointBorderWidth={2}
        pointBorderColor={'transparent'}
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        enableSlices="x"
      />
    </div>
  )
}

export default ChartMainPage;