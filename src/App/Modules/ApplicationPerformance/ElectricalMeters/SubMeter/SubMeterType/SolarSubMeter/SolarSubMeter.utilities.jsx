import moment from 'moment';

export const dummyGraphResponse = {
  count: 41,
  next: null,
  previous: null,
  results: [
    { readingAt: '2:57 PM', value: '-0.42' },
    { readingAt: '2:58 PM', value: '0.56' },
    { readingAt: '2:59 PM', value: '0.91' },
    { readingAt: '3:00 PM', value: '0.27' },
    { readingAt: '3:01 PM', value: '-0.14' },
    { readingAt: '3:02 PM', value: '-0.55' },
    { readingAt: '3:03 PM', value: '-0.54' },
    { readingAt: '3:04 PM', value: '0.45' },
    { readingAt: '3:05 PM', value: '0.23' },
    { readingAt: '3:06 PM', value: '0.19' },
    { readingAt: '3:07 PM', value: '0.64' },
    { readingAt: '3:08 PM', value: '0.52' },
    { readingAt: '3:09 PM', value: '-0.29' },
    { readingAt: '3:10 PM', value: '0.97' },
    { readingAt: '3:11 PM', value: '-0.65' },
    { readingAt: '3:12 PM', value: '-0.62' },
    { readingAt: '3:13 PM', value: '-0.18' },
    { readingAt: '3:14 PM', value: '-0.32' },
    { readingAt: '3:15 PM', value: '0.72' },
    { readingAt: '3:16 PM', value: '-0.93' },
    { readingAt: '3:17 PM', value: '-0.32' },
    { readingAt: '3:18 PM', value: '-0.39' },
    { readingAt: '3:19 PM', value: '-0.14' },
    { readingAt: '3:20 PM', value: '-0.63' },
    { readingAt: '3:21 PM', value: '-0.17' },
    { readingAt: '3:22 PM', value: '0.73' },
    { readingAt: '3:23 PM', value: '-0.94' },
    { readingAt: '3:24 PM', value: '-0.89' },
    { readingAt: '3:25 PM', value: '0.53' },
    { readingAt: '3:26 PM', value: '-0.47' },
    { readingAt: '3:27 PM', value: '0.98' },
    { readingAt: '3:28 PM', value: '0.87' },
    { readingAt: '3:29 PM', value: '0.81' },
    { readingAt: '3:30 PM', value: '0.02' },
    { readingAt: '3:31 PM', value: '-0.49' },
    { readingAt: '3:32 PM', value: '-0.11' },
    { readingAt: '3:33 PM', value: '0.41' },
    { readingAt: '3:34 PM', value: '0.89' },
    { readingAt: '3:35 PM', value: '-0.78' },
    { readingAt: '3:36 PM', value: '0.58' },
    { readingAt: '3:37 PM', value: '0.02' },
  ],
};

export const dummySolarSubMeterData = {
  meterName: 'Sub Meter 3 Solar',
  applicationType: 3,
  energyParameters: [
    { key: 1, params: 'GHG Emission Reduced', value: '0.009 tCO2' },
    { key: 2, params: 'Trees Planted', value: '0.1' },
    { key: 3, params: 'Energy in TOE', value: '0' },
  ],
  meterReadingStartDate: '2021-02-14T16:52:09+05:30',
  yesterdaysData: [
    { key: 1, name: 'Solar Energy Generation', value: '1 kWh' },
    { key: 2, name: 'Energy Cost Saved', value: '₹ 9' },
    { key: 3, name: 'Max Active Power', value: '598.2 kW' },
    { key: 4, name: 'Average Power Factor', value: '0.074' },
    { key: 5, name: 'Max Current', value: '100.28 Amps' },
    { key: 6, name: 'Sun Hours', value: '1.33 hrs' },
    { key: 7, name: 'Percentage Loading', value: '980.5 %' },
    { key: 8, name: 'Solar Share in Plant Consumption', value: '17 %' },
  ],
  solarDataSummary: [
    {
      key: 1,
      title: 'Monthly Data',
      params: [
        { key: 1, name: 'Solar Energy Generation', value: '11 kWh' },
        { key: 2, name: 'Energy Cost Saved', value: '₹ 96' },
      ],
    },
    {
      key: 2,
      title: 'Live Data',
      params: [
        { key: 1, name: 'Power Factor', value: '-0.084' },
        { key: 2, name: 'Active Power', value: '413.4 kW' },
      ],
    },
  ],
};

function dynamicGraphValues(data) {
  return data.reverse().map((items) => {
    if (items.demand_total) {
      // divided by 1000 for KVA
      const demandTotal = items[Object.keys(items)[1]] / 1000;
      return {
        readingAt: moment(items.reading_at).format('LT'),
        value: demandTotal.toFixed(2),
      };
    }
    if (items.active_power) {
      // divided by 1000 for Active Power
      const activePower = items[Object.keys(items)[1]] / 1000;
      return {
        readingAt: moment(items.reading_at).format('LT'),
        value: activePower.toFixed(2),
      };
    }
    return {
      readingAt: moment(items.reading_at).format('LT'),
      value: items[Object.keys(items)[1]].toFixed(2),
    };
  });
}
export function SolarSubMeterGraphTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    count: resp.count,
    next: resp.next,
    previous: resp.previous,
    results: dynamicGraphValues(resp.results),
  };
}
