export const PARAMETER_LIST_FOR_ENERGY_CONSUMPTION = [
  { name: 'Energy Consumption (kWh)', label: 'energyConsumption' },
  { name: 'Energy Cost (₹)', label: 'energyCost' },
  { name: 'GHG Emission (tCO2)', label: 'ghgEmission' },
  { name: 'Power Factor', label: 'powerFactor' },
  { name: 'Peak Demand (kVA)', label: 'peakDemand' },
];
export const PARAMETER_LIST_FOR_KPI = [
  {
    name: 'Specific Energy Consumption (kWh/tonnes)',
    label: 'specificEnergyConsumption',
  },
  { name: 'Specific Energy Cost (₹/tonnes)', label: 'specificEnergyCost' },
  {
    name: 'Specific Energy Emission (tCO2/tonnes)',
    label: 'specificEnergyEmission',
  },
];
export const COLORS = ['#42A9EC', '#E5E5E5', '#FF0000'];

export const COLOR_PALETTES = [
  '#7D23EF',
  '#EF9D23',
  '#FB6F6F',
  '#00AEEF',
  '#EF2385',
  '#4DC894',
];

export const RUPEES_BACKGROUND = Object.freeze({
  MULTIPLE_PLANT:
    'https://enerlly-public-images.s3.ap-south-1.amazonaws.com/enerlly-app/home-page/two-plant-background.png',
  SINGLE_PLANT:
    'https://enerlly-public-images.s3.ap-south-1.amazonaws.com/enerlly-app/home-page/single-plant-background.png',
});
