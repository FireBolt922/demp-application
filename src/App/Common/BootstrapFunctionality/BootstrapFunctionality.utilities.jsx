export const dummyBootstrapResponse = {
  userInfo: { email: 'testing@demo.com', id: 61 },
  acl: [
    {
      designationName: 'cxo',
      plantName: 'Demo Plant 1',
      plantId: 1,
      organisationSlugName: 'Demo',
    },
    {
      designationName: 'cxo',
      plantName: 'Demo Plant 2',
      plantId: 2,
      organisationSlugName: 'Demo',
    },
  ],
  enforcedResetPassword: false,
  enforcedLogout: false,
  organisationDetails: { planExpired: false, message: '' },
  plantFeatures: [
    {
      plantId: 2,
      meterCategory: {
        gas_flow_meters: {
          name: 'Gas Flow Meters',
          is_enabled: false,
          meter_types: { gas_flow_meter: false, sub_gas_flow_meter: false },
        },
        electrical_meters: {
          name: 'Electrical Meters',
          is_enabled: true,
          meter_types: { ht_meter: true, sub_meter: true },
        },
      },
      plantStartDate: '02-06-2021',
    },
    {
      plantId: 1,
      meterCategory: {
        gas_flow_meters: {
          name: 'Gas Flow Meters',
          is_enabled: true,
          meter_types: { gas_flow_meter: true, sub_gas_flow_meter: true },
        },
        electrical_meters: {
          name: 'Electrical Meters',
          is_enabled: true,
          meter_types: { ht_meter: true, sub_meter: true },
        },
      },
      plantStartDate: '02-06-2021',
    },
  ],
};
