import React, { useEffect } from "react";
import Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';

import '../css/Worldmap.css';
import countryData from "../Data/CountryData";

HC_map(Highcharts);

const WorldMap = () => {
  useEffect(() => {
    (async () => {
      const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world-highres3.topo.json'
      ).then((response) => response.json());

      const options = {
        chart: {
          map: topology,
          backgroundColor: '#B5D8FA',
        },
        title: {
          text: 'Map of the World',
        },
        subtitle: {
          text:
            '<a href="https://code.highcharts.com/mapdata/custom/world-highres3.topo.json">Choose your pick! The world is yours</a>',
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom',
          },
        },
        colorAxis: {
          min: 0,
          visible: false,
        },
        tooltip: {
          useHTML: true,
          pointFormat: `
            <b>{point.name}</b><br/>
            Capital: {point.details.capital}<br/>
            Currency: {point.details.currency}
            `,
        },
        series: [
          {
            data: countryData.map((country) => ({
              'hc-key': country.code,
              name: country.name,
              details: {
                capital: country.capital,
                currency: country.currency,
                },
              })),
            name: 'Country',
            borderColor: '#333333',
            states: {
              hover: {
                borderColor: 'red',
                color: 'white',
              },
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
            },
          },
        ],
      };

      Highcharts.mapChart('highcharts-container', options);
    })();
  }, []);

  return (
    <div>
      <div id="highcharts-container" style={{ height: '800px', width: '100%' }} />
    </div>
  );
};

export default WorldMap;