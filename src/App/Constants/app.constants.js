import React from 'react';

export const API_NETWORK_STATUS = Object.freeze({
  LOADING: 'loading',
  FAILURE: 'failure',
  SUCCESS: 'success',
});

export const DATA_TEXTS = Object.freeze({
  ERROR: 'Some Error Occured. Please try again',
});
export const ENERLLY_LOGO =
  'https://enerlly-logo.s3.ap-south-1.amazonaws.com/enerlly-logo.png';

export const ENERLLY_ICON =
  'https://enerlly-logo.s3.ap-south-1.amazonaws.com/enerlly-icon.png';

export const ENERLLY_LOGIN_LOGO =
  'https://enerlly-logo.s3.ap-south-1.amazonaws.com/login-logo.png';

// Used for comparing the designation received at login
export const CXO_DESIGNATIONS = 'CXO';
export const PRODUCTION_ENTRY_USER_DESIGNATION = 'PRODUCTION ENTRY USER';
export const PLANT_HEAD_DESIGNATION = 'PLANT HEAD';

// Used for Displaying the Designations.
export const DESIGNATIONS = {
  CXO: 'Admin',
  'PLANT HEAD': 'User',
  'PRODUCTION ENTRY USER': 'Production',
};
export const PAGE = Object.freeze({
  // Main pages which act as parent page
  HOME: '/',
  DASHBOARD: '/dashboard',
  PLANT_PERFORMANCE: '/plant-performance',
  APP_PERFORMANCE: '/meter-list',
  HT_METER: '/ht-meter',
  SUB_METER: '/sub-meter',
  GAS_METER: '/gas-meter',
  SUB_GAS_METER: '/sub-gas-meter',
  HISTORY: '/history',
  GENERATE_REPORT: '/report/request',
  DOWNLOAD_REPORT: '/report/all',
  APP_PRODUCTION: '/application-production',
  PLANT_PRODUCTION: '/plant-production',
  PROFILE: '/profile',
  CHANGE_PASSWORD: '/change-password',
});

export const ENERLLY_TAG_LINE = 'Energy Management & Analytics';
// Application Types
export const APPLICATION_TYPE = Object.freeze({
  DEFAULT: 1,
  DG_SET: 2,
  SOLAR: 3,
  TRANSFORMER: 4,
  AIR_COMPRESSOR: 5,
  PUMP: 6,
  COOLING_TOWER: 7,
  FAN_AND_BLOWER: 8,
  LIGHTNING: 9,
  INDUCTION_FURNACE: 10,
  RESISTIVE_HEATER_FURNACE: 11,
  PRESS_MACHINE: 12,
  MOTOR_BASED: 13,
  MIXED_LOAD: 14,
  UPS: 15,
  IBH_HT_SIDE: 16,
  IBH_SUB_SIDE: 17,
});

/*
 * React Tour
 * Created a separate object for each elements.
 */
export const FIRST_TIME_LOGGING = false;

// Plant Selector
const PLANT_SELECTOR_REACT_TOUR = {
  selector: '#plantName',
  content: function Component() {
    return (
      <div>
        <h3>
          <strong>Select Plant</strong>
        </h3>
        <p>
          To track the performance of equipment used in your plant, first select
          the plant for which report is required.
        </p>
      </div>
    );
  },
  style: {
    marginTop: '10px',
  },
};

// User Profile
const USER_PROFILE_REACT_TOUR = {
  selector: '#user-profile',
  content: function Component() {
    return (
      <div>
        <h3>
          <strong>Profile</strong>
        </h3>
        <p>
          Enter, change and update required personal information in the
          <strong> Profile</strong> section by tapping on the displayed username
          in the top right side of your screen. You can also edit/update your
          password by clicking on the
          <strong> Change Password</strong> option in the drop-down menu.
        </p>
      </div>
    );
  },
  style: {
    marginTop: '10px',
  },
};

// Setting
const SETTING_REACT_TOUR = {
  selector: '#setting',
  content: function Component() {
    return (
      <div>
        <h3>
          <strong>Setting</strong>
        </h3>
        <p>
          Tap on the gear icon in the top right corner to change or update
          settings. A drop-down menu will appear with the following options:
        </p>
        <ul>
          <li>
            <strong>Staff-</strong> The admin can add users to the plant.
            (Note:-
            <i>Only added users are permitted access to plant data.</i>)
          </li>
          <li>
            <strong>Plant-</strong> Click on this option to set
            <strong> Contract Demand</strong> of the plant, to update
            <strong> tariff</strong> of the plant and receive notification
            emails of plant data.
          </li>
        </ul>
      </div>
    );
  },
  style: {
    marginTop: '10px',
  },
};

// Home React Tour
const HOME_REACT_TOUR = {
  selector: '#home',
  content: function Component() {
    return (
      <div>
        <h3>
          <strong>Home</strong>
        </h3>
        <p>
          For users with one or more plants registered with Enerlly, click on
          <strong> Home Page</strong> to access plant-wise data summary.
        </p>
      </div>
    );
  },
};

// Dashboard React Tour
const DASHBOARD_REACT_TOUR = {
  selector: '#dashboard',
  content: function Component() {
    return (
      <div>
        <h3>
          <strong>Dashboard</strong>
        </h3>
        <p>
          Click on <strong>Dashboard</strong> option in the side bar to view and
          monitor real time data on
          <strong> Energy Consumption Summary</strong> and
          <strong> Key Performance Indicators</strong> for selected plant.
        </p>
      </div>
    );
  },
};

// Performance React Tour
const PERFORMANCE_REACT_TOUR = {
  selector: '#performance',
  content: function Component() {
    return (
      <div>
        <h3>
          <strong>Performance</strong>
        </h3>
        <p>
          Use this tool on the side bar to track data for the following
          parameters:
        </p>
        <ul>
          <li>
            <strong>Plant performance -</strong> to monitor data for overall
            performance of the Plant
          </li>
          <li>
            <strong>Application performance-</strong> to monitor data generated
            from various application types ( i.e.,
            <i> HT Meter, Sub Meter, Gas Meter and Sub Gas Meter</i>)
          </li>
        </ul>
      </div>
    );
  },
};

// History React Tour
const HISTORY_REACT_TOUR = {
  selector: '#history',
  content: function Component() {
    return (
      <div>
        <h3>
          <strong>History</strong>
        </h3>
        <p>
          To access data for past performance of the plant and/or individual
          applications, tap on <strong>History</strong> in the side bar. Data
          records for the following categories can be obtained here:
        </p>
        <ul>
          <li>
            <strong>Plant</strong>
          </li>
          <li>
            <strong>HT Meter</strong>
          </li>
          <li>
            <strong>Sub Meter</strong>
          </li>
          <li>
            <strong>Gas Meter</strong>
          </li>
          <li>
            <strong>Sub Gas Meter</strong>
          </li>
        </ul>
      </div>
    );
  },
};

// Report React Tour
const REPORT_REACT_TOUR = {
  selector: '#report',
  content: function Component() {
    return (
      <div>
        <h3>
          <strong>Reports</strong>
        </h3>
        <p>
          Click on <strong>Report</strong> to generate detailed documentation of
          performance data for various meters for the required period of time
          (i.e.,<i> daily, weekly or monthly</i>).
        </p>
      </div>
    );
  },
};

// Production React Tour
const PRODUCTION_REACT_TOUR = {
  selector: '#production',
  content: function Component() {
    return (
      <div>
        <h3>
          <strong>Production</strong>
        </h3>
        <p>
          Click on the <strong>Production</strong> tab to enter and update
          production data for the following:
        </p>
        <ul>
          <li>
            <strong>Plant Production-</strong> the user can enter and update
            data for the entire plant&apos;s production.
          </li>
          <li>
            <strong>Application Production-</strong> the user can enter and edit
            production data for various registered applications (i.e.,{' '}
            <i>HT Meter, Sub Meter, Gas Meter and Sub Gas Meter</i>).
          </li>
        </ul>
      </div>
    );
  },
};

/*
 * Admin Steps for React Tour
 * Pass the relative object into the array
 */
export const ADMIN_STEPS = [
  PLANT_SELECTOR_REACT_TOUR,
  USER_PROFILE_REACT_TOUR,
  SETTING_REACT_TOUR,
  HOME_REACT_TOUR,
  DASHBOARD_REACT_TOUR,
  PERFORMANCE_REACT_TOUR,
  HISTORY_REACT_TOUR,
  REPORT_REACT_TOUR,
  PRODUCTION_REACT_TOUR,
];
/*
 * User Steps for React Tour
 * Pass the relative object into the array
 */
export const USER_STEPS = [
  PLANT_SELECTOR_REACT_TOUR,
  USER_PROFILE_REACT_TOUR,
  DASHBOARD_REACT_TOUR,
  PERFORMANCE_REACT_TOUR,
  HISTORY_REACT_TOUR,
  REPORT_REACT_TOUR,
  PRODUCTION_REACT_TOUR,
];
/*
 * Production User Steps for React Tour
 * Pass the relative object into the array
 */
export const PRODUCTION_USER_STEPS = [
  PLANT_SELECTOR_REACT_TOUR,
  USER_PROFILE_REACT_TOUR,
  PRODUCTION_REACT_TOUR,
];
