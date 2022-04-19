import moment from 'moment';
// Will improve this component
export const GENERATE_URL_FOR_GETTING_PRODUCTION_WITH_START_DATE = (
  lastProductionDate,
) => {
  return `from=${moment(lastProductionDate)
    .clone()
    .startOf('month')
    .subtract(1, 'month')
    .format('YYYY-MM-DD')}&to=${moment(lastProductionDate)
    .clone()
    .endOf('month')
    .subtract(1, 'month')
    .format('YYYY-MM-DD')}`;
};

export const GENERATE_URL_FOR_GETTING_PRODUCTION_WITH_END_DATE = (
  lastProductionDate,
) => {
  return `from=${moment(lastProductionDate)
    .clone()
    .startOf('month')
    .add(1, 'month')
    .format('YYYY-MM-DD')}&to=${moment(lastProductionDate)
    .clone()
    .endOf('month')
    .add(1, 'month')
    .format('YYYY-MM-DD')}`;
};
