import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'spline',
    spacingTop: 10,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 10,
    renderTo: 'container',
  },
  title: {
    text: '',
    align: 'left',
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    useHTML: true,
    formatter: function (this: any) {
      return `<span style="font-size:10px">${this.point.friendlydate}</span><br><table><tr><td style="padding:0"><span style="color: '${this.series.color}'">Transactions: </a></span><b> ${this.point.formattedValue} </b><br><br>Price: ${this.point.price}</td></tr></table>`;
    },
    plotX: 10,
  },
  xAxis: {
    title: { text: '' },
    lineWidth: 0,
    minorTickLength: 0,
    tickLength: 0,
    labels: {
      step: 7,
    },
    categories: [
      'Jan 18',
      'Jan 19',
      'Jan 20',
      'Jan 21',
      'Jan 22',
      'Jan 23',
      'Jan 24',
      'Jan 25',
      'Jan 26',
      'Jan 27',
      'Jan 28',
      'Jan 29',
      'Jan 30',
      'Jan 31',
      'Feb 1',
    ],
  },
  yAxis: {
    labels: {
      enabled: true,
    },
    gridLineWidth: 0,
    title: {
      text: null,
    },
    height: 60,
  },
  plotOptions: {
    series: {
      color: '#1e2022',
      enableMouseTracking: true,
      lineWidth: 1,
      shadow: false,
      animation: false,
      cursor: 'pointer',
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      marker: {
        radius: 0,
      },
      point: {
        events: {
          select: function (this: any) {
            location.href = `txs?dt=${this.options.dt}`;
          },
        },
      },
    },
    column: {
      pointPadding: 0.1,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: 'Transactions',
      type: 'spline',
      data: [
        {
          y: 1118225,
          dt: '1674000000',
          formattedValue: '1,118,225',
          friendlydate: 'Wednesday, January 18, 2023',
          price: '$1,512.28',
        },
        {
          y: 1007125,
          dt: '1674086400',
          formattedValue: '1,007,125',
          friendlydate: 'Thursday, January 19, 2023',
          price: '$1,551.20',
        },
        {
          y: 1024504,
          dt: '1674172800',
          formattedValue: '1,024,504',
          friendlydate: 'Friday, January 20, 2023',
          price: '$1,659.02',
        },
        {
          y: 994076,
          dt: '1674259200',
          formattedValue: '994,076',
          friendlydate: 'Saturday, January 21, 2023',
          price: '$1,626.68',
        },
        {
          y: 889814,
          dt: '1674345600',
          formattedValue: '889,814',
          friendlydate: 'Sunday, January 22, 2023',
          price: '$1,627.79',
        },
        {
          y: 947725,
          dt: '1674432000',
          formattedValue: '947,725',
          friendlydate: 'Monday, January 23, 2023',
          price: '$1,626.47',
        },
        {
          y: 1032293,
          dt: '1674518400',
          formattedValue: '1,032,293',
          friendlydate: 'Tuesday, January 24, 2023',
          price: '$1,556.12',
        },
        {
          y: 1020705,
          dt: '1674604800',
          formattedValue: '1,020,705',
          friendlydate: 'Wednesday, January 25, 2023',
          price: '$1,610.94',
        },
        {
          y: 1048864,
          dt: '1674691200',
          formattedValue: '1,048,864',
          friendlydate: 'Thursday, January 26, 2023',
          price: '$1,601.35',
        },
        {
          y: 1100192,
          dt: '1674777600',
          formattedValue: '1,100,192',
          friendlydate: 'Friday, January 27, 2023',
          price: '$1,597.86',
        },
        {
          y: 964429,
          dt: '1674864000',
          formattedValue: '964,429',
          friendlydate: 'Saturday, January 28, 2023',
          price: '$1,572.46',
        },
        {
          y: 998228,
          dt: '1674950400',
          formattedValue: '998,228',
          friendlydate: 'Sunday, January 29, 2023',
          price: '$1,645.46',
        },
        {
          y: 1074566,
          dt: '1675036800',
          formattedValue: '1,074,566',
          friendlydate: 'Monday, January 30, 2023',
          price: '$1,566.49',
        },
        {
          y: 1086364,
          dt: '1675123200',
          formattedValue: '1,086,364',
          friendlydate: 'Tuesday, January 31, 2023',
          price: '$1,585.47',
        },
        {
          y: 1064236,
          dt: '1675209600',
          formattedValue: '1,064,236',
          friendlydate: 'Wednesday, February 1, 2023',
          price: '$1,641.61',
        },
      ],
      allowPointSelect: true,
      pointStart: 0,
    },
  ],
};
const Chart = () => {
  return (
    <div className="h-28 pt-2">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { height: '100%' } }}
      />
    </div>
  );
};
export default Chart;
