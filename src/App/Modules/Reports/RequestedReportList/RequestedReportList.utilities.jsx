import moment from 'moment';
import { COLORS } from 'Styles/colors';

export const dummyRequestedReportData = {
  count: 18,
  next: null,
  previous: null,
  results: [
    {
      downloadLink: null,
      reportStatus: { state: 'Failed To Upload', color: 'red' },
      validUntil: 'Invalid date',
      shiftName: 'Daily report',
      createdAt: '2021-08-18',
      requestType: 'Plant Summary',
    },
    {
      downloadLink: null,
      reportStatus: { state: 'Failed To Upload', color: 'red' },
      validUntil: 'Invalid date',
      shiftName: 'first shift',
      createdAt: '2021-08-18',
      requestType: 'Measured Data',
    },
    {
      downloadLink: null,
      reportStatus: { state: 'Failed To Upload', color: 'red' },
      validUntil: 'Invalid date',
      shiftName: 'Daily report',
      createdAt: '2021-08-18',
      requestType: 'Plant Summary',
    },
    {
      downloadLink:
        'ganesh.localdownload_reports/enerlly/2021-07-23/ht-meter-1_application_data_last_seven_days_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 24, 2021 12:54 AM',
      shiftName: 'Daily report',
      createdAt: '2021-07-23',
      requestType: 'Application Data',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-23/ht-meter-2_application_data_monthly_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 23, 2021 10:51 PM',
      shiftName: 'Daily report',
      createdAt: '2021-07-23',
      requestType: 'Application Data',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/sub-meter-2-dg_application_data_last_seven_days_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 20, 2021 2:02 AM',
      shiftName: 'Daily report',
      createdAt: '2021-07-19',
      requestType: 'Application Data',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/plant_summary_last_seven_days_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 9:45 PM',
      shiftName: 'Daily report',
      createdAt: '2021-07-19',
      requestType: 'Plant Summary',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19//gas-flow-meter-4_application_data_monthly_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 9:29 PM',
      shiftName: 'Daily report',
      createdAt: '2021-07-19',
      requestType: 'Application Data',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19//plant_summary_monthly_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 9:26 PM',
      shiftName: 'Daily report',
      createdAt: '2021-07-19',
      requestType: 'Plant Summary',
    },
    {
      downloadLink: 'False',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 9:24 PM',
      shiftName: 'Daily report',
      createdAt: '2021-07-19',
      requestType: 'Plant Summary',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/plant_summary_last_seven_days_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 5:54 PM',
      shiftName: 'Daily report',
      createdAt: '2021-07-19',
      requestType: 'Plant Summary',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/plant_summary_monthly_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 5:51 PM',
      shiftName: 'Daily report',
      createdAt: '2021-07-19',
      requestType: 'Plant Summary',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/sub-meter-1-default_application_data_monthly_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 4:33 PM',
      shiftName: 'first shift',
      createdAt: '2021-07-19',
      requestType: 'Application Data',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/sub-meter-1-default_application_data_monthly_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 4:32 PM',
      shiftName: 'first shift',
      createdAt: '2021-07-19',
      requestType: 'Application Data',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/gas-flow-meter-2_application_data_monthly_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 4:27 PM',
      shiftName: 'second shift',
      createdAt: '2021-07-19',
      requestType: 'Application Data',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/ht-meter-1_measured_data_first-shift_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 4:26 PM',
      shiftName: 'first shift',
      createdAt: '2021-07-19',
      requestType: 'Measured Data',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/gas-flow-meter-3_application_data_last_seven_days_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 4:10 PM',
      shiftName: 'Daily report',
      createdAt: '2021-07-19',
      requestType: 'Application Data',
    },
    {
      downloadLink:
        'http://ganesh.local/download_reports/enerlly/2021-07-19/plant_summary_monthly_report.csv',
      reportStatus: { state: 'Expired', color: 'orange' },
      validUntil: 'Jul 19, 2021 4:09 PM',
      shiftName: 'Daily report',
      createdAt: '2021-07-19',
      requestType: 'Plant Summary',
    },
  ],
};

function getRequestType(reportType) {
  switch (reportType) {
    case 'download_measured_data':
      return 'Measured Data';
    case 'download_plant_summary':
      return 'Plant Summary';
    case 'download_application_data':
      return 'Application Data';
    case 'download_plant_data':
      return 'Plant Data';
    case 'uploading_to_storage':
      return 'Uploading';
    default:
      return 'Invalid Report Type';
  }
}
function modifyState(state, validUntil) {
  // This function will update the Status of the Report in displayable format
  switch (state) {
    case 'failed_to_upload':
      return { state: 'Failed To Upload', color: COLORS.RED };
    case 'uploaded':
      if (validUntil > moment(new Date()).format())
        return { state: 'Uploaded', color: COLORS.GREEN };
      return { state: 'Expired', color: COLORS.ORANGE };

    case 'pending':
      return { state: 'Pending', color: COLORS.BLUE };

    case 'new':
      return { state: 'New', color: COLORS.MAGENTA };

    default:
      return { state: 'Not Mentioned', color: COLORS.YELLOW };
  }
}
function resultForRequestedReport(responseOfReport) {
  return responseOfReport.map((item) => {
    return {
      downloadLink: item.download_link,
      reportStatus: modifyState(item.state, moment(item.valid_until).format()),
      validUntil: moment(item.valid_until).format('lll'),
      shiftName: item.request_details.parameters.shift_name,
      createdAt: moment(item.created_at).format('YYYY-MM-DD'),
      requestType: getRequestType(item.request_details.req_func),
    };
  });
}

export function getRequestDataTransformer(resp) {
  if (!resp) {
    return {};
  }
  return {
    count: resp.count,
    next: resp.next,
    previous: resp.previous,
    results: resultForRequestedReport(resp.results),
  };
}
