export const dummyPlantSummaryResponse = {
  totalEnergyCost: '₹ 1,279',
  tagData: [
    {
      plantName: 'Demo Plant 1',
      totalValue: '148.77',
      energyType: 'energy_consumption',
      graphData: [
        {
          name: 'Demo Department A',
          energyConsumption: '221',
          value: '221',
          percentageShare: '148.71',
        },
        {
          name: 'Demo Department B',
          energyConsumption: '148',
          value: '148',
          percentageShare: '99.33',
        },
        {
          name: 'Demo Department C',
          energyConsumption: '148',
          value: '148',
          percentageShare: '99.32',
        },
        {
          name: 'Demo Department D',
          energyConsumption: '147',
          value: '147',
          percentageShare: '98.71',
        },
      ],
    },
    {
      plantName: 'Demo Plant 2',
      totalValue: '148.77',
      energyType: 'energy_consumption',
      graphData: [
        {
          name: 'Demo Department A',
          energyConsumption: '221',
          value: '221',
          percentageShare: '160.71',
        },
        {
          name: 'Demo Department B',
          energyConsumption: '148',
          value: '148',
          percentageShare: '139.33',
        },
        {
          name: 'Demo Department C',
          energyConsumption: '148',
          value: '148',
          percentageShare: '199.32',
        },
        {
          name: 'Demo Department D',
          energyConsumption: '147',
          value: '147',
          percentageShare: '298.71',
        },
      ],
    },
  ],
  energyResourceComparison: [
    {
      plantName: 'Demo Plant 1',
      totalValue: '1.77',
      energyType: 'energy_in_toe',
      graphData: [
        { name: 'Solar', value: '0.006', percentageShare: '0.36' },
        { name: 'Diesel', value: '0.525', percentageShare: '29.66' },
        { name: 'Gas', value: '1.227', percentageShare: '69.26' },
        { name: 'Electricity', value: '0.013', percentageShare: '0.72' },
      ],
    },
    {
      plantName: 'Demo Plant 2',
      totalValue: '1.77',
      energyType: 'energy_in_toe',
      graphData: [
        { name: 'Solar', value: '0.006', percentageShare: '29.6' },
        { name: 'Diesel', value: '0.525', percentageShare: '0.39' },
        { name: 'Gas', value: '1.227', percentageShare: '58.26' },
        { name: 'Electricity', value: '0.013', percentageShare: '77.72' },
      ],
    },
  ],
  tableData: [
    {
      plantName: 'Demo Plant 1',
      plantId: 1,
      plantLocation: 'Bavdhan, Pune',
      energyConsumption: '149',
      energyCost: '1,279',
      ghgEmission: '0.122',
      peakDemand: '1,545',
      powerFactor: '1',
      note: 'Demo Plant 1 total_production:- 30.0',
    },
    {
      plantName: 'Demo Plant 2',
      plantId: 2,
      plantLocation: 'Bhugaon , Pune',
      energyConsumption: '0',
      energyCost: '0',
      ghgEmission: '0',
      peakDemand: 'NaN',
      powerFactor: '0',
      note: 'Demo Plant 2 production not available',
    },
  ],
  kpi: [
    {
      plantId: 1,
      plantName: 'Demo Plant 1',
      plantLocation: 'Bavdhan, Pune',
      specificEnergyConsumption: '4.959',
      specificEnergyCost: '42.65',
      specificEnergyEmission: '0',
    },
    {
      plantId: 2,
      plantName: 'Demo Plant 2',
      plantLocation: 'Bhugaon, Pune',
      specificEnergyConsumption: '7.959',
      specificEnergyCost: '50.65',
      specificEnergyEmission: '0',
    },
  ],
  note: [
    { note: 'Demo Plant 1 total_production:- 30.0' },
    { note: 'Demo Plant 2 production not available' },
  ],
};

export const dummyHomePageGraph = [
  {
    plantId: 1,
    plantName: 'Demo Plant 1',
    contractDemand: 1000,
    graphData: [
      {
        time: 'October 6, 2021 12:00 AM',
        averageDemand: '566.105',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:09 AM',
        averageDemand: '311.787',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:10 AM',
        averageDemand: '467.285',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:18 AM',
        averageDemand: '466.426',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:20 AM',
        averageDemand: '150.149',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:27 AM',
        averageDemand: '362.976',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:30 AM',
        averageDemand: '265.658',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:36 AM',
        averageDemand: '359.415',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:40 AM',
        averageDemand: '443.337',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:45 AM',
        averageDemand: '562.549',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:50 AM',
        averageDemand: '492.068',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:54 AM',
        averageDemand: '462.106',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:00 AM',
        averageDemand: '305.079',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:03 AM',
        averageDemand: '423.185',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:10 AM',
        averageDemand: '483.958',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:12 AM',
        averageDemand: '526.373',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:20 AM',
        averageDemand: '501.677',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:21 AM',
        averageDemand: '364.100',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:30 AM',
        averageDemand: '785.878',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:39 AM',
        averageDemand: '440.416',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:40 AM',
        averageDemand: '569.945',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:48 AM',
        averageDemand: '187.399',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:50 AM',
        averageDemand: '554.579',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:57 AM',
        averageDemand: '302.904',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:00 AM',
        averageDemand: '156.732',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:06 AM',
        averageDemand: '214.162',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:10 AM',
        averageDemand: '591.675',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:15 AM',
        averageDemand: '460.932',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:20 AM',
        averageDemand: '163.647',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:24 AM',
        averageDemand: '139.849',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:30 AM',
        averageDemand: '514.777',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:33 AM',
        averageDemand: '523.218',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:40 AM',
        averageDemand: '580.282',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:42 AM',
        averageDemand: '255.407',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:50 AM',
        averageDemand: '376.107',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:51 AM',
        averageDemand: '487.142',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:00 AM',
        averageDemand: '682.864',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:09 AM',
        averageDemand: '147.179',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:10 AM',
        averageDemand: '543.930',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:18 AM',
        averageDemand: '583.825',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:20 AM',
        averageDemand: '380.916',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:27 AM',
        averageDemand: '486.716',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:30 AM',
        averageDemand: '522.535',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:36 AM',
        averageDemand: '213.588',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:40 AM',
        averageDemand: '466.187',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:45 AM',
        averageDemand: '306.378',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:50 AM',
        averageDemand: '349.079',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:54 AM',
        averageDemand: '390.173',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:00 AM',
        averageDemand: '395.551',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:03 AM',
        averageDemand: '343.368',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:10 AM',
        averageDemand: '589.527',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:12 AM',
        averageDemand: '399.755',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:20 AM',
        averageDemand: '589.100',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:21 AM',
        averageDemand: '344.581',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:30 AM',
        averageDemand: '506.604',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:39 AM',
        averageDemand: '425.688',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:40 AM',
        averageDemand: '243.007',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:48 AM',
        averageDemand: '532.235',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:50 AM',
        averageDemand: '307.822',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:57 AM',
        averageDemand: '161.238',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:00 AM',
        averageDemand: '472.854',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:06 AM',
        averageDemand: '592.731',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:10 AM',
        averageDemand: '386.167',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:15 AM',
        averageDemand: '147.941',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:20 AM',
        averageDemand: '170.916',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:24 AM',
        averageDemand: '339.843',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:30 AM',
        averageDemand: '219.940',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:33 AM',
        averageDemand: '242.066',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:40 AM',
        averageDemand: '109.462',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:42 AM',
        averageDemand: '296.521',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:50 AM',
        averageDemand: '282.884',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:51 AM',
        averageDemand: '492.930',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:00 AM',
        averageDemand: '512.722',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:09 AM',
        averageDemand: '409.457',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:10 AM',
        averageDemand: '420.991',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:18 AM',
        averageDemand: '360.652',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:20 AM',
        averageDemand: '172.187',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:27 AM',
        averageDemand: '381.390',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:30 AM',
        averageDemand: '563.846',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:36 AM',
        averageDemand: '173.535',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:40 AM',
        averageDemand: '545.678',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:45 AM',
        averageDemand: '401.622',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:50 AM',
        averageDemand: '230.671',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:54 AM',
        averageDemand: '274.925',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:00 AM',
        averageDemand: '549.140',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:03 AM',
        averageDemand: '147.233',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:10 AM',
        averageDemand: '101.491',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:12 AM',
        averageDemand: '586.037',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:20 AM',
        averageDemand: '397.074',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:21 AM',
        averageDemand: '508.614',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:30 AM',
        averageDemand: '752.078',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:39 AM',
        averageDemand: '279.222',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:40 AM',
        averageDemand: '293.203',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:48 AM',
        averageDemand: '483.873',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:50 AM',
        averageDemand: '279.317',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:57 AM',
        averageDemand: '380.908',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:00 AM',
        averageDemand: '487.268',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:06 AM',
        averageDemand: '597.997',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:10 AM',
        averageDemand: '487.453',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:15 AM',
        averageDemand: '402.905',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:20 AM',
        averageDemand: '474.827',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:24 AM',
        averageDemand: '260.248',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:30 AM',
        averageDemand: '546.615',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:33 AM',
        averageDemand: '590.555',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:40 AM',
        averageDemand: '147.824',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:42 AM',
        averageDemand: '244.682',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:50 AM',
        averageDemand: '145.435',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:51 AM',
        averageDemand: '478.137',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:00 AM',
        averageDemand: '594.291',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:09 AM',
        averageDemand: '523.316',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:10 AM',
        averageDemand: '348.896',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:18 AM',
        averageDemand: '375.202',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:20 AM',
        averageDemand: '443.168',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:27 AM',
        averageDemand: '231.209',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:30 AM',
        averageDemand: '276.959',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:36 AM',
        averageDemand: '214.084',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:40 AM',
        averageDemand: '278.337',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:45 AM',
        averageDemand: '350.848',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:50 AM',
        averageDemand: '160.751',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:54 AM',
        averageDemand: '198.642',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:00 AM',
        averageDemand: '234.548',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:03 AM',
        averageDemand: '270.730',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:10 AM',
        averageDemand: '285.795',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:12 AM',
        averageDemand: '515.232',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:20 AM',
        averageDemand: '201.215',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:21 AM',
        averageDemand: '527.999',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:30 AM',
        averageDemand: '716.096',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:39 AM',
        averageDemand: '129.059',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:40 AM',
        averageDemand: '461.179',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:47 AM',
        averageDemand: '567.475',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:48 AM',
        averageDemand: '1158.506',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:49 AM',
        averageDemand: '378.672',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:50 AM',
        averageDemand: '655.104',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:51 AM',
        averageDemand: '588.868',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:52 AM',
        averageDemand: '856.101',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:53 AM',
        averageDemand: '737.661',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:54 AM',
        averageDemand: '414.626',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:55 AM',
        averageDemand: '554.382',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:56 AM',
        averageDemand: '693.786',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:57 AM',
        averageDemand: '857.947',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:58 AM',
        averageDemand: '723.373',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:59 AM',
        averageDemand: '919.997',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:00 AM',
        averageDemand: '958.768',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:01 AM',
        averageDemand: '622.318',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:02 AM',
        averageDemand: '383.408',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:03 AM',
        averageDemand: '590.395',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:04 AM',
        averageDemand: '498.270',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:05 AM',
        averageDemand: '1111.565',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:06 AM',
        averageDemand: '1032.365',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:07 AM',
        averageDemand: '720.743',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:08 AM',
        averageDemand: '554.711',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:09 AM',
        averageDemand: '1139.502',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:10 AM',
        averageDemand: '1016.244',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:11 AM',
        averageDemand: '716.589',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:12 AM',
        averageDemand: '592.727',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:13 AM',
        averageDemand: '914.689',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:14 AM',
        averageDemand: '824.678',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:15 AM',
        averageDemand: '1385.433',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:16 AM',
        averageDemand: '813.229',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:17 AM',
        averageDemand: '821.124',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:18 AM',
        averageDemand: '742.036',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:19 AM',
        averageDemand: '558.076',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:20 AM',
        averageDemand: '1130.256',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:21 AM',
        averageDemand: '590.602',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:22 AM',
        averageDemand: '914.669',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:23 AM',
        averageDemand: '562.668',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:24 AM',
        averageDemand: '1110.043',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:25 AM',
        averageDemand: '867.587',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:26 AM',
        averageDemand: '591.398',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:27 AM',
        averageDemand: '860.022',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:28 AM',
        averageDemand: '693.629',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:29 AM',
        averageDemand: '724.864',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:30 AM',
        averageDemand: '796.991',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:31 AM',
        averageDemand: '543.058',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:32 AM',
        averageDemand: '571.104',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:33 AM',
        averageDemand: '947.784',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:34 AM',
        averageDemand: '885.933',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:35 AM',
        averageDemand: '957.315',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:36 AM',
        averageDemand: '739.439',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:37 AM',
        averageDemand: '898.313',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:38 AM',
        averageDemand: '516.044',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:39 AM',
        averageDemand: '585.431',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:40 AM',
        averageDemand: '1168.403',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:41 AM',
        averageDemand: '726.322',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:42 AM',
        averageDemand: '419.475',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:43 AM',
        averageDemand: '691.619',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:44 AM',
        averageDemand: '826.291',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:45 AM',
        averageDemand: '907.919',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:46 AM',
        averageDemand: '724.533',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:47 AM',
        averageDemand: '911.660',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:48 AM',
        averageDemand: '669.748',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:49 AM',
        averageDemand: '768.351',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:50 AM',
        averageDemand: '1236.797',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:51 AM',
        averageDemand: '1013.782',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:52 AM',
        averageDemand: '757.630',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:53 AM',
        averageDemand: '745.406',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:54 AM',
        averageDemand: '300.858',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:55 AM',
        averageDemand: '375.597',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:56 AM',
        averageDemand: '1082.461',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:57 AM',
        averageDemand: '760.833',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:58 AM',
        averageDemand: '567.337',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:59 AM',
        averageDemand: '703.231',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:00 PM',
        averageDemand: '1244.713',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:01 PM',
        averageDemand: '270.492',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:02 PM',
        averageDemand: '539.938',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:03 PM',
        averageDemand: '995.234',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:04 PM',
        averageDemand: '731.679',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:05 PM',
        averageDemand: '723.444',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:06 PM',
        averageDemand: '755.333',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:07 PM',
        averageDemand: '680.112',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:08 PM',
        averageDemand: '886.478',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:09 PM',
        averageDemand: '1094.220',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:10 PM',
        averageDemand: '1314.653',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:11 PM',
        averageDemand: '582.233',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:12 PM',
        averageDemand: '751.179',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:13 PM',
        averageDemand: '330.275',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:14 PM',
        averageDemand: '1037.824',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:15 PM',
        averageDemand: '968.240',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:16 PM',
        averageDemand: '584.316',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:17 PM',
        averageDemand: '687.457',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:18 PM',
        averageDemand: '1527.757',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:19 PM',
        averageDemand: '650.681',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:20 PM',
        averageDemand: '1103.976',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:21 PM',
        averageDemand: '854.035',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:22 PM',
        averageDemand: '291.824',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:23 PM',
        averageDemand: '544.031',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:24 PM',
        averageDemand: '656.852',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:25 PM',
        averageDemand: '899.789',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:26 PM',
        averageDemand: '991.447',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:27 PM',
        averageDemand: '793.826',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:28 PM',
        averageDemand: '919.940',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:29 PM',
        averageDemand: '657.287',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:30 PM',
        averageDemand: '1164.059',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:31 PM',
        averageDemand: '834.190',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:32 PM',
        averageDemand: '1030.548',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:33 PM',
        averageDemand: '798.781',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:34 PM',
        averageDemand: '721.171',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:35 PM',
        averageDemand: '513.383',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:36 PM',
        averageDemand: '753.043',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:37 PM',
        averageDemand: '672.528',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:38 PM',
        averageDemand: '669.138',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:39 PM',
        averageDemand: '620.312',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:40 PM',
        averageDemand: '463.535',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:41 PM',
        averageDemand: '593.182',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:42 PM',
        averageDemand: '672.818',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:43 PM',
        averageDemand: '1161.124',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:44 PM',
        averageDemand: '689.443',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:45 PM',
        averageDemand: '695.044',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:46 PM',
        averageDemand: '749.544',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:47 PM',
        averageDemand: '517.338',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:48 PM',
        averageDemand: '846.473',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:49 PM',
        averageDemand: '884.026',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:50 PM',
        averageDemand: '1016.850',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:51 PM',
        averageDemand: '751.303',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:52 PM',
        averageDemand: '593.012',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:53 PM',
        averageDemand: '894.611',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:54 PM',
        averageDemand: '1236.493',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:00 PM',
        averageDemand: '1328.647',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:01 PM',
        averageDemand: '694.083',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:02 PM',
        averageDemand: '712.080',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:03 PM',
        averageDemand: '1134.877',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:04 PM',
        averageDemand: '670.062',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:05 PM',
        averageDemand: '523.655',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:06 PM',
        averageDemand: '862.414',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:07 PM',
        averageDemand: '849.048',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:08 PM',
        averageDemand: '473.018',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:09 PM',
        averageDemand: '946.335',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:10 PM',
        averageDemand: '1488.310',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:11 PM',
        averageDemand: '592.966',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:12 PM',
        averageDemand: '953.863',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:13 PM',
        averageDemand: '655.252',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:14 PM',
        averageDemand: '873.896',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:15 PM',
        averageDemand: '309.030',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:16 PM',
        averageDemand: '592.500',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:17 PM',
        averageDemand: '881.016',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:18 PM',
        averageDemand: '262.882',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:19 PM',
        averageDemand: '562.945',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:20 PM',
        averageDemand: '1267.112',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:21 PM',
        averageDemand: '842.441',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:22 PM',
        averageDemand: '640.942',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:23 PM',
        averageDemand: '424.940',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:24 PM',
        averageDemand: '878.231',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:25 PM',
        averageDemand: '539.500',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:26 PM',
        averageDemand: '1076.076',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:27 PM',
        averageDemand: '853.902',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:28 PM',
        averageDemand: '507.244',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:29 PM',
        averageDemand: '978.907',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:30 PM',
        averageDemand: '1118.271',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:31 PM',
        averageDemand: '699.574',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:32 PM',
        averageDemand: '720.445',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:33 PM',
        averageDemand: '458.184',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:34 PM',
        averageDemand: '839.066',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:35 PM',
        averageDemand: '700.619',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:36 PM',
        averageDemand: '771.931',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:37 PM',
        averageDemand: '649.134',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:38 PM',
        averageDemand: '474.985',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:39 PM',
        averageDemand: '1082.049',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:40 PM',
        averageDemand: '950.378',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:41 PM',
        averageDemand: '686.572',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:42 PM',
        averageDemand: '457.913',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:43 PM',
        averageDemand: '740.193',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:44 PM',
        averageDemand: '657.665',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:45 PM',
        averageDemand: '520.262',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:46 PM',
        averageDemand: '514.407',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:47 PM',
        averageDemand: '725.199',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:48 PM',
        averageDemand: '1544.784',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:49 PM',
        averageDemand: '837.883',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:50 PM',
        averageDemand: '781.346',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:51 PM',
        averageDemand: '435.695',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:52 PM',
        averageDemand: '1081.334',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:53 PM',
        averageDemand: '746.703',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:54 PM',
        averageDemand: '938.511',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:55 PM',
        averageDemand: '389.199',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:56 PM',
        averageDemand: '285.100',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:57 PM',
        averageDemand: '1089.444',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:58 PM',
        averageDemand: '722.261',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:59 PM',
        averageDemand: '988.365',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:00 PM',
        averageDemand: '1194.726',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:01 PM',
        averageDemand: '896.349',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:02 PM',
        averageDemand: '693.608',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:03 PM',
        averageDemand: '868.430',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:04 PM',
        averageDemand: '614.811',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:05 PM',
        averageDemand: '727.483',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:06 PM',
        averageDemand: '1133.521',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:07 PM',
        averageDemand: '718.116',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:08 PM',
        averageDemand: '422.318',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:09 PM',
        averageDemand: '875.842',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:10 PM',
        averageDemand: '876.372',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:11 PM',
        averageDemand: '783.629',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:12 PM',
        averageDemand: '731.374',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:13 PM',
        averageDemand: '1058.362',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:14 PM',
        averageDemand: '817.766',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:15 PM',
        averageDemand: '1002.495',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:16 PM',
        averageDemand: '420.783',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:17 PM',
        averageDemand: '429.657',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:18 PM',
        averageDemand: '943.508',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:19 PM',
        averageDemand: '721.259',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:20 PM',
        averageDemand: '1488.169',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:21 PM',
        averageDemand: '703.950',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:22 PM',
        averageDemand: '400.943',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:23 PM',
        averageDemand: '365.440',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:24 PM',
        averageDemand: '569.151',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:25 PM',
        averageDemand: '1035.979',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:26 PM',
        averageDemand: '486.710',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:27 PM',
        averageDemand: '634.491',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:28 PM',
        averageDemand: '672.585',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:29 PM',
        averageDemand: '660.708',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:30 PM',
        averageDemand: '1458.499',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:31 PM',
        averageDemand: '992.252',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:32 PM',
        averageDemand: '991.018',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:33 PM',
        averageDemand: '936.386',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:34 PM',
        averageDemand: '952.194',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:35 PM',
        averageDemand: '1051.408',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:36 PM',
        averageDemand: '466.825',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:37 PM',
        averageDemand: '746.112',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:38 PM',
        averageDemand: '998.321',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:39 PM',
        averageDemand: '755.957',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:40 PM',
        averageDemand: '1172.570',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:41 PM',
        averageDemand: '722.951',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:42 PM',
        averageDemand: '845.606',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:43 PM',
        averageDemand: '611.127',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:44 PM',
        averageDemand: '831.153',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:45 PM',
        averageDemand: '617.437',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:46 PM',
        averageDemand: '587.528',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:47 PM',
        averageDemand: '237.492',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:48 PM',
        averageDemand: '700.633',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:49 PM',
        averageDemand: '451.689',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:50 PM',
        averageDemand: '1094.560',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:51 PM',
        averageDemand: '720.309',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:52 PM',
        averageDemand: '831.996',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:53 PM',
        averageDemand: '613.081',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:54 PM',
        averageDemand: '497.991',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:55 PM',
        averageDemand: '558.930',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:56 PM',
        averageDemand: '786.441',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:57 PM',
        averageDemand: '606.206',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:58 PM',
        averageDemand: '930.692',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:59 PM',
        averageDemand: '823.681',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:00 PM',
        averageDemand: '1479.582',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:01 PM',
        averageDemand: '922.827',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:02 PM',
        averageDemand: '792.983',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:03 PM',
        averageDemand: '707.567',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:04 PM',
        averageDemand: '714.240',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:05 PM',
        averageDemand: '630.226',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:06 PM',
        averageDemand: '499.274',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:07 PM',
        averageDemand: '271.194',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:08 PM',
        averageDemand: '846.384',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:09 PM',
        averageDemand: '929.262',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:10 PM',
        averageDemand: '617.297',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:11 PM',
        averageDemand: '548.557',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:12 PM',
        averageDemand: '710.750',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:13 PM',
        averageDemand: '449.031',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:14 PM',
        averageDemand: '876.801',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:15 PM',
        averageDemand: '668.210',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:16 PM',
        averageDemand: '500.299',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:17 PM',
        averageDemand: '509.133',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:18 PM',
        averageDemand: '927.283',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:19 PM',
        averageDemand: '679.094',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:20 PM',
        averageDemand: '619.330',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:21 PM',
        averageDemand: '692.342',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:22 PM',
        averageDemand: '699.987',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:23 PM',
        averageDemand: '755.742',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:24 PM',
        averageDemand: '859.393',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:25 PM',
        averageDemand: '861.975',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:26 PM',
        averageDemand: '797.322',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:27 PM',
        averageDemand: '1219.279',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:28 PM',
        averageDemand: '474.619',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:29 PM',
        averageDemand: '809.106',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:30 PM',
        averageDemand: '1124.394',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:31 PM',
        averageDemand: '585.306',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:32 PM',
        averageDemand: '623.931',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:36 PM',
        averageDemand: '360.368',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:40 PM',
        averageDemand: '580.924',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:45 PM',
        averageDemand: '356.516',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:50 PM',
        averageDemand: '172.238',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:54 PM',
        averageDemand: '340.954',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:00 PM',
        averageDemand: '429.731',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:03 PM',
        averageDemand: '212.551',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:10 PM',
        averageDemand: '416.467',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:12 PM',
        averageDemand: '479.661',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:20 PM',
        averageDemand: '599.834',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:21 PM',
        averageDemand: '455.594',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:30 PM',
        averageDemand: '829.704',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:39 PM',
        averageDemand: '120.974',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:40 PM',
        averageDemand: '241.947',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:48 PM',
        averageDemand: '217.709',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:50 PM',
        averageDemand: '523.400',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:57 PM',
        averageDemand: '138.803',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:00 PM',
        averageDemand: '449.497',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:06 PM',
        averageDemand: '524.336',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:10 PM',
        averageDemand: '487.552',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:15 PM',
        averageDemand: '479.105',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:20 PM',
        averageDemand: '463.824',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:24 PM',
        averageDemand: '526.307',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:30 PM',
        averageDemand: '591.691',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:33 PM',
        averageDemand: '221.900',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:40 PM',
        averageDemand: '382.178',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:42 PM',
        averageDemand: '596.606',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:50 PM',
        averageDemand: '501.372',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:51 PM',
        averageDemand: '118.687',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:00 PM',
        averageDemand: '1025.546',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:09 PM',
        averageDemand: '554.438',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:10 PM',
        averageDemand: '346.906',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:18 PM',
        averageDemand: '541.638',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:20 PM',
        averageDemand: '514.393',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:27 PM',
        averageDemand: '523.324',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:30 PM',
        averageDemand: '507.429',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:36 PM',
        averageDemand: '423.967',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:40 PM',
        averageDemand: '558.075',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:45 PM',
        averageDemand: '573.680',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:50 PM',
        averageDemand: '239.858',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:54 PM',
        averageDemand: '248.127',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:00 PM',
        averageDemand: '314.508',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:03 PM',
        averageDemand: '569.969',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:10 PM',
        averageDemand: '385.929',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:12 PM',
        averageDemand: '320.511',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:20 PM',
        averageDemand: '143.609',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:21 PM',
        averageDemand: '125.488',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:30 PM',
        averageDemand: '450.451',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:39 PM',
        averageDemand: '247.608',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:40 PM',
        averageDemand: '365.535',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:48 PM',
        averageDemand: '213.906',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:50 PM',
        averageDemand: '483.070',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:57 PM',
        averageDemand: '210.897',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:00 PM',
        averageDemand: '114.668',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:06 PM',
        averageDemand: '423.110',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:10 PM',
        averageDemand: '193.888',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:15 PM',
        averageDemand: '152.882',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:20 PM',
        averageDemand: '145.691',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:24 PM',
        averageDemand: '566.117',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:30 PM',
        averageDemand: '267.243',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:33 PM',
        averageDemand: '321.968',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:40 PM',
        averageDemand: '353.456',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:42 PM',
        averageDemand: '114.665',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:50 PM',
        averageDemand: '468.089',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:51 PM',
        averageDemand: '326.534',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:00 PM',
        averageDemand: '616.256',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:09 PM',
        averageDemand: '413.551',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:10 PM',
        averageDemand: '410.600',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:18 PM',
        averageDemand: '452.402',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:20 PM',
        averageDemand: '376.749',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:27 PM',
        averageDemand: '465.114',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:30 PM',
        averageDemand: '580.071',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:36 PM',
        averageDemand: '268.410',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:40 PM',
        averageDemand: '584.904',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:45 PM',
        averageDemand: '530.633',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:50 PM',
        averageDemand: '368.675',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:54 PM',
        averageDemand: '385.081',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:00 PM',
        averageDemand: '437.481',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:03 PM',
        averageDemand: '593.830',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:10 PM',
        averageDemand: '142.718',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:12 PM',
        averageDemand: '105.423',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:20 PM',
        averageDemand: '448.646',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:21 PM',
        averageDemand: '151.505',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:30 PM',
        averageDemand: '736.950',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:39 PM',
        averageDemand: '151.332',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:40 PM',
        averageDemand: '138.651',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:48 PM',
        averageDemand: '536.402',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:50 PM',
        averageDemand: '533.841',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:57 PM',
        averageDemand: '117.077',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:00 PM',
        averageDemand: '320.199',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:06 PM',
        averageDemand: '324.328',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:10 PM',
        averageDemand: '476.470',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:15 PM',
        averageDemand: '298.249',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:20 PM',
        averageDemand: '572.157',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:24 PM',
        averageDemand: '342.300',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:30 PM',
        averageDemand: '167.073',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:33 PM',
        averageDemand: '599.089',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:40 PM',
        averageDemand: '585.213',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:42 PM',
        averageDemand: '552.379',
        contractDemand: 1000,
      },
      {
        time: 'October 7, 2021 12:00 AM',
        averageDemand: '910.075',
        contractDemand: 1000,
      },
    ],
  },
  {
    plantId: 1,
    plantName: 'Demo Plant 2',
    contractDemand: 1000,
    graphData: [
      {
        time: 'October 6, 2021 12:00 AM',
        averageDemand: '566.105',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:09 AM',
        averageDemand: '311.787',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:10 AM',
        averageDemand: '467.285',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:18 AM',
        averageDemand: '466.426',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:20 AM',
        averageDemand: '150.149',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:27 AM',
        averageDemand: '362.976',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:30 AM',
        averageDemand: '265.658',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:36 AM',
        averageDemand: '359.415',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:40 AM',
        averageDemand: '443.337',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:45 AM',
        averageDemand: '562.549',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:50 AM',
        averageDemand: '492.068',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:54 AM',
        averageDemand: '462.106',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:00 AM',
        averageDemand: '305.079',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:03 AM',
        averageDemand: '423.185',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:10 AM',
        averageDemand: '483.958',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:12 AM',
        averageDemand: '526.373',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:20 AM',
        averageDemand: '501.677',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:21 AM',
        averageDemand: '364.100',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:30 AM',
        averageDemand: '785.878',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:39 AM',
        averageDemand: '440.416',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:40 AM',
        averageDemand: '569.945',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:48 AM',
        averageDemand: '187.399',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:50 AM',
        averageDemand: '554.579',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:57 AM',
        averageDemand: '302.904',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:00 AM',
        averageDemand: '156.732',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:06 AM',
        averageDemand: '214.162',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:10 AM',
        averageDemand: '591.675',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:15 AM',
        averageDemand: '460.932',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:20 AM',
        averageDemand: '163.647',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:24 AM',
        averageDemand: '139.849',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:30 AM',
        averageDemand: '514.777',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:33 AM',
        averageDemand: '523.218',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:40 AM',
        averageDemand: '580.282',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:42 AM',
        averageDemand: '255.407',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:50 AM',
        averageDemand: '376.107',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:51 AM',
        averageDemand: '487.142',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:00 AM',
        averageDemand: '682.864',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:09 AM',
        averageDemand: '147.179',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:10 AM',
        averageDemand: '543.930',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:18 AM',
        averageDemand: '583.825',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:20 AM',
        averageDemand: '380.916',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:27 AM',
        averageDemand: '486.716',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:30 AM',
        averageDemand: '522.535',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:36 AM',
        averageDemand: '213.588',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:40 AM',
        averageDemand: '466.187',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:45 AM',
        averageDemand: '306.378',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:50 AM',
        averageDemand: '349.079',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:54 AM',
        averageDemand: '390.173',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:00 AM',
        averageDemand: '395.551',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:03 AM',
        averageDemand: '343.368',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:10 AM',
        averageDemand: '589.527',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:12 AM',
        averageDemand: '399.755',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:20 AM',
        averageDemand: '589.100',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:21 AM',
        averageDemand: '344.581',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:30 AM',
        averageDemand: '506.604',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:39 AM',
        averageDemand: '425.688',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:40 AM',
        averageDemand: '243.007',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:48 AM',
        averageDemand: '532.235',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:50 AM',
        averageDemand: '307.822',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:57 AM',
        averageDemand: '161.238',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:00 AM',
        averageDemand: '472.854',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:06 AM',
        averageDemand: '592.731',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:10 AM',
        averageDemand: '386.167',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:15 AM',
        averageDemand: '147.941',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:20 AM',
        averageDemand: '170.916',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:24 AM',
        averageDemand: '339.843',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:30 AM',
        averageDemand: '219.940',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:33 AM',
        averageDemand: '242.066',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:40 AM',
        averageDemand: '109.462',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:42 AM',
        averageDemand: '296.521',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:50 AM',
        averageDemand: '282.884',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:51 AM',
        averageDemand: '492.930',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:00 AM',
        averageDemand: '512.722',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:09 AM',
        averageDemand: '409.457',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:10 AM',
        averageDemand: '420.991',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:18 AM',
        averageDemand: '360.652',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:20 AM',
        averageDemand: '172.187',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:27 AM',
        averageDemand: '381.390',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:30 AM',
        averageDemand: '563.846',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:36 AM',
        averageDemand: '173.535',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:40 AM',
        averageDemand: '545.678',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:45 AM',
        averageDemand: '401.622',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:50 AM',
        averageDemand: '230.671',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:54 AM',
        averageDemand: '274.925',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:00 AM',
        averageDemand: '549.140',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:03 AM',
        averageDemand: '147.233',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:10 AM',
        averageDemand: '101.491',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:12 AM',
        averageDemand: '586.037',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:20 AM',
        averageDemand: '397.074',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:21 AM',
        averageDemand: '508.614',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:30 AM',
        averageDemand: '752.078',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:39 AM',
        averageDemand: '279.222',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:40 AM',
        averageDemand: '293.203',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:48 AM',
        averageDemand: '483.873',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:50 AM',
        averageDemand: '279.317',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:57 AM',
        averageDemand: '380.908',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:00 AM',
        averageDemand: '487.268',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:06 AM',
        averageDemand: '597.997',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:10 AM',
        averageDemand: '487.453',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:15 AM',
        averageDemand: '402.905',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:20 AM',
        averageDemand: '474.827',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:24 AM',
        averageDemand: '260.248',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:30 AM',
        averageDemand: '546.615',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:33 AM',
        averageDemand: '590.555',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:40 AM',
        averageDemand: '147.824',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:42 AM',
        averageDemand: '244.682',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:50 AM',
        averageDemand: '145.435',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:51 AM',
        averageDemand: '478.137',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:00 AM',
        averageDemand: '594.291',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:09 AM',
        averageDemand: '523.316',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:10 AM',
        averageDemand: '348.896',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:18 AM',
        averageDemand: '375.202',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:20 AM',
        averageDemand: '443.168',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:27 AM',
        averageDemand: '231.209',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:30 AM',
        averageDemand: '276.959',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:36 AM',
        averageDemand: '214.084',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:40 AM',
        averageDemand: '278.337',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:45 AM',
        averageDemand: '350.848',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:50 AM',
        averageDemand: '160.751',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:54 AM',
        averageDemand: '198.642',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:00 AM',
        averageDemand: '234.548',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:03 AM',
        averageDemand: '270.730',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:10 AM',
        averageDemand: '285.795',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:12 AM',
        averageDemand: '515.232',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:20 AM',
        averageDemand: '201.215',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:21 AM',
        averageDemand: '527.999',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:30 AM',
        averageDemand: '716.096',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:39 AM',
        averageDemand: '129.059',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:40 AM',
        averageDemand: '461.179',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:47 AM',
        averageDemand: '567.475',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:48 AM',
        averageDemand: '1158.506',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:49 AM',
        averageDemand: '378.672',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:50 AM',
        averageDemand: '655.104',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:51 AM',
        averageDemand: '588.868',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:52 AM',
        averageDemand: '856.101',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:53 AM',
        averageDemand: '737.661',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:54 AM',
        averageDemand: '414.626',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:55 AM',
        averageDemand: '554.382',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:56 AM',
        averageDemand: '693.786',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:57 AM',
        averageDemand: '857.947',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:58 AM',
        averageDemand: '723.373',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:59 AM',
        averageDemand: '919.997',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:00 AM',
        averageDemand: '958.768',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:01 AM',
        averageDemand: '622.318',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:02 AM',
        averageDemand: '383.408',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:03 AM',
        averageDemand: '590.395',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:04 AM',
        averageDemand: '498.270',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:05 AM',
        averageDemand: '1111.565',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:06 AM',
        averageDemand: '1032.365',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:07 AM',
        averageDemand: '720.743',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:08 AM',
        averageDemand: '554.711',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:09 AM',
        averageDemand: '1139.502',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:10 AM',
        averageDemand: '1016.244',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:11 AM',
        averageDemand: '716.589',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:12 AM',
        averageDemand: '592.727',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:13 AM',
        averageDemand: '914.689',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:14 AM',
        averageDemand: '824.678',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:15 AM',
        averageDemand: '1385.433',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:16 AM',
        averageDemand: '813.229',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:17 AM',
        averageDemand: '821.124',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:18 AM',
        averageDemand: '742.036',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:19 AM',
        averageDemand: '558.076',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:20 AM',
        averageDemand: '1130.256',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:21 AM',
        averageDemand: '590.602',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:22 AM',
        averageDemand: '914.669',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:23 AM',
        averageDemand: '562.668',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:24 AM',
        averageDemand: '1110.043',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:25 AM',
        averageDemand: '867.587',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:26 AM',
        averageDemand: '591.398',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:27 AM',
        averageDemand: '860.022',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:28 AM',
        averageDemand: '693.629',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:29 AM',
        averageDemand: '724.864',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:30 AM',
        averageDemand: '796.991',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:31 AM',
        averageDemand: '543.058',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:32 AM',
        averageDemand: '571.104',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:33 AM',
        averageDemand: '947.784',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:34 AM',
        averageDemand: '885.933',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:35 AM',
        averageDemand: '957.315',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:36 AM',
        averageDemand: '739.439',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:37 AM',
        averageDemand: '898.313',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:38 AM',
        averageDemand: '516.044',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:39 AM',
        averageDemand: '585.431',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:40 AM',
        averageDemand: '1168.403',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:41 AM',
        averageDemand: '726.322',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:42 AM',
        averageDemand: '419.475',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:43 AM',
        averageDemand: '691.619',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:44 AM',
        averageDemand: '826.291',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:45 AM',
        averageDemand: '907.919',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:46 AM',
        averageDemand: '724.533',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:47 AM',
        averageDemand: '911.660',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:48 AM',
        averageDemand: '669.748',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:49 AM',
        averageDemand: '768.351',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:50 AM',
        averageDemand: '1236.797',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:51 AM',
        averageDemand: '1013.782',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:52 AM',
        averageDemand: '757.630',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:53 AM',
        averageDemand: '745.406',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:54 AM',
        averageDemand: '300.858',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:55 AM',
        averageDemand: '375.597',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:56 AM',
        averageDemand: '1082.461',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:57 AM',
        averageDemand: '760.833',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:58 AM',
        averageDemand: '567.337',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:59 AM',
        averageDemand: '703.231',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:00 PM',
        averageDemand: '1244.713',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:01 PM',
        averageDemand: '270.492',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:02 PM',
        averageDemand: '539.938',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:03 PM',
        averageDemand: '995.234',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:04 PM',
        averageDemand: '731.679',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:05 PM',
        averageDemand: '723.444',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:06 PM',
        averageDemand: '755.333',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:07 PM',
        averageDemand: '680.112',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:08 PM',
        averageDemand: '886.478',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:09 PM',
        averageDemand: '1094.220',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:10 PM',
        averageDemand: '1314.653',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:11 PM',
        averageDemand: '582.233',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:12 PM',
        averageDemand: '751.179',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:13 PM',
        averageDemand: '330.275',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:14 PM',
        averageDemand: '1037.824',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:15 PM',
        averageDemand: '968.240',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:16 PM',
        averageDemand: '584.316',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:17 PM',
        averageDemand: '687.457',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:18 PM',
        averageDemand: '1527.757',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:19 PM',
        averageDemand: '650.681',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:20 PM',
        averageDemand: '1103.976',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:21 PM',
        averageDemand: '854.035',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:22 PM',
        averageDemand: '291.824',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:23 PM',
        averageDemand: '544.031',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:24 PM',
        averageDemand: '656.852',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:25 PM',
        averageDemand: '899.789',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:26 PM',
        averageDemand: '991.447',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:27 PM',
        averageDemand: '793.826',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:28 PM',
        averageDemand: '919.940',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:29 PM',
        averageDemand: '657.287',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:30 PM',
        averageDemand: '1164.059',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:31 PM',
        averageDemand: '834.190',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:32 PM',
        averageDemand: '1030.548',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:33 PM',
        averageDemand: '798.781',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:34 PM',
        averageDemand: '721.171',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:35 PM',
        averageDemand: '513.383',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:36 PM',
        averageDemand: '753.043',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:37 PM',
        averageDemand: '672.528',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:38 PM',
        averageDemand: '669.138',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:39 PM',
        averageDemand: '620.312',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:40 PM',
        averageDemand: '463.535',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:41 PM',
        averageDemand: '593.182',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:42 PM',
        averageDemand: '672.818',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:43 PM',
        averageDemand: '1161.124',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:44 PM',
        averageDemand: '689.443',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:45 PM',
        averageDemand: '695.044',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:46 PM',
        averageDemand: '749.544',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:47 PM',
        averageDemand: '517.338',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:48 PM',
        averageDemand: '846.473',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:49 PM',
        averageDemand: '884.026',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:50 PM',
        averageDemand: '1016.850',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:51 PM',
        averageDemand: '751.303',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:52 PM',
        averageDemand: '593.012',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:53 PM',
        averageDemand: '894.611',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 12:54 PM',
        averageDemand: '1236.493',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:00 PM',
        averageDemand: '1328.647',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:01 PM',
        averageDemand: '694.083',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:02 PM',
        averageDemand: '712.080',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:03 PM',
        averageDemand: '1134.877',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:04 PM',
        averageDemand: '670.062',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:05 PM',
        averageDemand: '523.655',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:06 PM',
        averageDemand: '862.414',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:07 PM',
        averageDemand: '849.048',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:08 PM',
        averageDemand: '473.018',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:09 PM',
        averageDemand: '946.335',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:10 PM',
        averageDemand: '1488.310',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:11 PM',
        averageDemand: '592.966',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:12 PM',
        averageDemand: '953.863',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:13 PM',
        averageDemand: '655.252',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:14 PM',
        averageDemand: '873.896',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:15 PM',
        averageDemand: '309.030',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:16 PM',
        averageDemand: '592.500',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:17 PM',
        averageDemand: '881.016',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:18 PM',
        averageDemand: '262.882',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:19 PM',
        averageDemand: '562.945',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:20 PM',
        averageDemand: '1267.112',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:21 PM',
        averageDemand: '842.441',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:22 PM',
        averageDemand: '640.942',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:23 PM',
        averageDemand: '424.940',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:24 PM',
        averageDemand: '878.231',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:25 PM',
        averageDemand: '539.500',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:26 PM',
        averageDemand: '1076.076',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:27 PM',
        averageDemand: '853.902',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:28 PM',
        averageDemand: '507.244',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:29 PM',
        averageDemand: '978.907',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:30 PM',
        averageDemand: '1118.271',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:31 PM',
        averageDemand: '699.574',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:32 PM',
        averageDemand: '720.445',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:33 PM',
        averageDemand: '458.184',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:34 PM',
        averageDemand: '839.066',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:35 PM',
        averageDemand: '700.619',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:36 PM',
        averageDemand: '771.931',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:37 PM',
        averageDemand: '649.134',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:38 PM',
        averageDemand: '474.985',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:39 PM',
        averageDemand: '1082.049',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:40 PM',
        averageDemand: '950.378',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:41 PM',
        averageDemand: '686.572',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:42 PM',
        averageDemand: '457.913',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:43 PM',
        averageDemand: '740.193',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:44 PM',
        averageDemand: '657.665',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:45 PM',
        averageDemand: '520.262',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:46 PM',
        averageDemand: '514.407',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:47 PM',
        averageDemand: '725.199',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:48 PM',
        averageDemand: '1544.784',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:49 PM',
        averageDemand: '837.883',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:50 PM',
        averageDemand: '781.346',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:51 PM',
        averageDemand: '435.695',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:52 PM',
        averageDemand: '1081.334',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:53 PM',
        averageDemand: '746.703',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:54 PM',
        averageDemand: '938.511',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:55 PM',
        averageDemand: '389.199',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:56 PM',
        averageDemand: '285.100',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:57 PM',
        averageDemand: '1089.444',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:58 PM',
        averageDemand: '722.261',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 1:59 PM',
        averageDemand: '988.365',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:00 PM',
        averageDemand: '1194.726',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:01 PM',
        averageDemand: '896.349',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:02 PM',
        averageDemand: '693.608',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:03 PM',
        averageDemand: '868.430',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:04 PM',
        averageDemand: '614.811',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:05 PM',
        averageDemand: '727.483',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:06 PM',
        averageDemand: '1133.521',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:07 PM',
        averageDemand: '718.116',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:08 PM',
        averageDemand: '422.318',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:09 PM',
        averageDemand: '875.842',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:10 PM',
        averageDemand: '876.372',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:11 PM',
        averageDemand: '783.629',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:12 PM',
        averageDemand: '731.374',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:13 PM',
        averageDemand: '1058.362',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:14 PM',
        averageDemand: '817.766',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:15 PM',
        averageDemand: '1002.495',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:16 PM',
        averageDemand: '420.783',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:17 PM',
        averageDemand: '429.657',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:18 PM',
        averageDemand: '943.508',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:19 PM',
        averageDemand: '721.259',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:20 PM',
        averageDemand: '1488.169',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:21 PM',
        averageDemand: '703.950',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:22 PM',
        averageDemand: '400.943',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:23 PM',
        averageDemand: '365.440',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:24 PM',
        averageDemand: '569.151',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:25 PM',
        averageDemand: '1035.979',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:26 PM',
        averageDemand: '486.710',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:27 PM',
        averageDemand: '634.491',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:28 PM',
        averageDemand: '672.585',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:29 PM',
        averageDemand: '660.708',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:30 PM',
        averageDemand: '1458.499',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:31 PM',
        averageDemand: '992.252',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:32 PM',
        averageDemand: '991.018',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:33 PM',
        averageDemand: '936.386',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:34 PM',
        averageDemand: '952.194',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:35 PM',
        averageDemand: '1051.408',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:36 PM',
        averageDemand: '466.825',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:37 PM',
        averageDemand: '746.112',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:38 PM',
        averageDemand: '998.321',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:39 PM',
        averageDemand: '755.957',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:40 PM',
        averageDemand: '1172.570',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:41 PM',
        averageDemand: '722.951',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:42 PM',
        averageDemand: '845.606',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:43 PM',
        averageDemand: '611.127',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:44 PM',
        averageDemand: '831.153',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:45 PM',
        averageDemand: '617.437',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:46 PM',
        averageDemand: '587.528',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:47 PM',
        averageDemand: '237.492',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:48 PM',
        averageDemand: '700.633',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:49 PM',
        averageDemand: '451.689',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:50 PM',
        averageDemand: '1094.560',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:51 PM',
        averageDemand: '720.309',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:52 PM',
        averageDemand: '831.996',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:53 PM',
        averageDemand: '613.081',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:54 PM',
        averageDemand: '497.991',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:55 PM',
        averageDemand: '558.930',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:56 PM',
        averageDemand: '786.441',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:57 PM',
        averageDemand: '606.206',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:58 PM',
        averageDemand: '930.692',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 2:59 PM',
        averageDemand: '823.681',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:00 PM',
        averageDemand: '1479.582',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:01 PM',
        averageDemand: '922.827',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:02 PM',
        averageDemand: '792.983',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:03 PM',
        averageDemand: '707.567',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:04 PM',
        averageDemand: '714.240',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:05 PM',
        averageDemand: '630.226',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:06 PM',
        averageDemand: '499.274',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:07 PM',
        averageDemand: '271.194',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:08 PM',
        averageDemand: '846.384',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:09 PM',
        averageDemand: '929.262',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:10 PM',
        averageDemand: '617.297',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:11 PM',
        averageDemand: '548.557',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:12 PM',
        averageDemand: '710.750',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:13 PM',
        averageDemand: '449.031',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:14 PM',
        averageDemand: '876.801',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:15 PM',
        averageDemand: '668.210',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:16 PM',
        averageDemand: '500.299',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:17 PM',
        averageDemand: '509.133',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:18 PM',
        averageDemand: '927.283',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:19 PM',
        averageDemand: '679.094',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:20 PM',
        averageDemand: '619.330',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:21 PM',
        averageDemand: '692.342',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:22 PM',
        averageDemand: '699.987',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:23 PM',
        averageDemand: '755.742',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:24 PM',
        averageDemand: '859.393',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:25 PM',
        averageDemand: '861.975',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:26 PM',
        averageDemand: '797.322',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:27 PM',
        averageDemand: '1219.279',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:28 PM',
        averageDemand: '474.619',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:29 PM',
        averageDemand: '809.106',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:30 PM',
        averageDemand: '1124.394',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:31 PM',
        averageDemand: '585.306',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:32 PM',
        averageDemand: '623.931',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:36 PM',
        averageDemand: '360.368',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:40 PM',
        averageDemand: '580.924',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:45 PM',
        averageDemand: '356.516',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:50 PM',
        averageDemand: '172.238',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 3:54 PM',
        averageDemand: '340.954',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:00 PM',
        averageDemand: '429.731',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:03 PM',
        averageDemand: '212.551',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:10 PM',
        averageDemand: '416.467',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:12 PM',
        averageDemand: '479.661',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:20 PM',
        averageDemand: '599.834',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:21 PM',
        averageDemand: '455.594',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:30 PM',
        averageDemand: '829.704',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:39 PM',
        averageDemand: '120.974',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:40 PM',
        averageDemand: '241.947',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:48 PM',
        averageDemand: '217.709',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:50 PM',
        averageDemand: '523.400',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 4:57 PM',
        averageDemand: '138.803',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:00 PM',
        averageDemand: '449.497',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:06 PM',
        averageDemand: '524.336',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:10 PM',
        averageDemand: '487.552',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:15 PM',
        averageDemand: '479.105',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:20 PM',
        averageDemand: '463.824',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:24 PM',
        averageDemand: '526.307',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:30 PM',
        averageDemand: '591.691',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:33 PM',
        averageDemand: '221.900',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:40 PM',
        averageDemand: '382.178',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:42 PM',
        averageDemand: '596.606',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:50 PM',
        averageDemand: '501.372',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 5:51 PM',
        averageDemand: '118.687',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:00 PM',
        averageDemand: '1025.546',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:09 PM',
        averageDemand: '554.438',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:10 PM',
        averageDemand: '346.906',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:18 PM',
        averageDemand: '541.638',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:20 PM',
        averageDemand: '514.393',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:27 PM',
        averageDemand: '523.324',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:30 PM',
        averageDemand: '507.429',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:36 PM',
        averageDemand: '423.967',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:40 PM',
        averageDemand: '558.075',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:45 PM',
        averageDemand: '573.680',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:50 PM',
        averageDemand: '239.858',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 6:54 PM',
        averageDemand: '248.127',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:00 PM',
        averageDemand: '314.508',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:03 PM',
        averageDemand: '569.969',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:10 PM',
        averageDemand: '385.929',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:12 PM',
        averageDemand: '320.511',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:20 PM',
        averageDemand: '143.609',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:21 PM',
        averageDemand: '125.488',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:30 PM',
        averageDemand: '450.451',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:39 PM',
        averageDemand: '247.608',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:40 PM',
        averageDemand: '365.535',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:48 PM',
        averageDemand: '213.906',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:50 PM',
        averageDemand: '483.070',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 7:57 PM',
        averageDemand: '210.897',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:00 PM',
        averageDemand: '114.668',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:06 PM',
        averageDemand: '423.110',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:10 PM',
        averageDemand: '193.888',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:15 PM',
        averageDemand: '152.882',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:20 PM',
        averageDemand: '145.691',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:24 PM',
        averageDemand: '566.117',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:30 PM',
        averageDemand: '267.243',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:33 PM',
        averageDemand: '321.968',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:40 PM',
        averageDemand: '353.456',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:42 PM',
        averageDemand: '114.665',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:50 PM',
        averageDemand: '468.089',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 8:51 PM',
        averageDemand: '326.534',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:00 PM',
        averageDemand: '616.256',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:09 PM',
        averageDemand: '413.551',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:10 PM',
        averageDemand: '410.600',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:18 PM',
        averageDemand: '452.402',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:20 PM',
        averageDemand: '376.749',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:27 PM',
        averageDemand: '465.114',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:30 PM',
        averageDemand: '580.071',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:36 PM',
        averageDemand: '268.410',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:40 PM',
        averageDemand: '584.904',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:45 PM',
        averageDemand: '530.633',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:50 PM',
        averageDemand: '368.675',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 9:54 PM',
        averageDemand: '385.081',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:00 PM',
        averageDemand: '437.481',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:03 PM',
        averageDemand: '593.830',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:10 PM',
        averageDemand: '142.718',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:12 PM',
        averageDemand: '105.423',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:20 PM',
        averageDemand: '448.646',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:21 PM',
        averageDemand: '151.505',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:30 PM',
        averageDemand: '736.950',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:39 PM',
        averageDemand: '151.332',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:40 PM',
        averageDemand: '138.651',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:48 PM',
        averageDemand: '536.402',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:50 PM',
        averageDemand: '533.841',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 10:57 PM',
        averageDemand: '117.077',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:00 PM',
        averageDemand: '320.199',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:06 PM',
        averageDemand: '324.328',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:10 PM',
        averageDemand: '476.470',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:15 PM',
        averageDemand: '298.249',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:20 PM',
        averageDemand: '572.157',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:24 PM',
        averageDemand: '342.300',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:30 PM',
        averageDemand: '167.073',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:33 PM',
        averageDemand: '599.089',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:40 PM',
        averageDemand: '585.213',
        contractDemand: 1000,
      },
      {
        time: 'October 6, 2021 11:42 PM',
        averageDemand: '552.379',
        contractDemand: 1000,
      },
      {
        time: 'October 7, 2021 12:00 AM',
        averageDemand: '910.075',
        contractDemand: 1000,
      },
    ],
  },
];
