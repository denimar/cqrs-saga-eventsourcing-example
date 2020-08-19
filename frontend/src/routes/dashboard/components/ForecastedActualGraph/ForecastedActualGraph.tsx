import React from 'react'
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './ForecastedActualGraph.scss'
import { GRAPH_COLORS } from '../../../../utils/constants';

const data = {
  forecasted: [
    ['Supermercado', 800],
    ['Gasolina', 120],
    ['Lazer', 400],
    ['Condomínio', 600],
    ['Aluguel', 1500],
    ['Pensão', 750]
  ],
  actual: [
    ['Supermercado', 650],
    ['Gasolina', 56],
    ['Lazer', 295],
    ['Condomínio', 660],
    ['Aluguel', 1500],
    ['Pensão', 750]
  ],
};

const getData = (data: any, setColor: boolean) => {
  return data.map((dataItem: any, index: number) => {
    return {
      name: dataItem[0],
      y: dataItem[1],
      color: setColor ? GRAPH_COLORS[index] : '#ccc'
    };
  });
}


const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Forecasted vs Actual'
  },
  subtitle: {
    text: 'Comparing values from what was BUDGETED and what is being SPENT - <ahref="https://en.wikipedia.org">Open in a new tab</a>'
  },
  credits: {
    enabled: false
  },  
  plotOptions: {
    series: {
      grouping: false,
      borderWidth: 0
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    shared: true,
    headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  xAxis: {
    type: 'category',
    max: 4,
    labels: {
      useHTML: true,
      animate: true,
      formatter: (chartObj: any) => `<span>${ chartObj.value }</span>`
    }
  },
  yAxis: [{
    title: {
      text: 'Dolar - $'
    },
    showFirstLabel: false,

  }],
  series: [{
    color: 'rgb(158, 159, 163)',
    pointPlacement: -0.2,
    linkedTo: 'main',
    data: getData(data['forecasted'], false),
    name: 'Forecasted'
  }, {
    name: 'Actual',
    id: 'main',
    dataSorting: {
      enabled: true,
      matchByName: true
    },
    dataLabels: [{
      enabled: true,
      inside: false,
      format: '{point.y:.2f}',
      style: {
        fontSize: '14px'
      }
    }],
    data: getData(data['actual'], true)
  }]
}

const ForecastedActualGraph: React.FC = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />      
  )
}

export default ForecastedActualGraph