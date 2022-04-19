import {
  loginOperation,
  logoutOperation,
} from 'App/Modules/Accounts/Login/TestSetup/Login';
import { CXO_USER_CREDENTIALS } from 'testSettings.config';
import { verifyHomePage } from 'App/Modules/Home/TestSetup/HomePage';
import { verifyDashboard } from 'App/Modules/Dashboard/TestSetup/Dashboard';
import { verifyPlantPerformance } from 'App/Modules/PlantPerformance/TestSetup/PlantPerformance';
import { verifyMeterList } from 'App/Modules/ApplicationPerformance/MeterList/TestSetup/MeterListPage';
import { verifyHtMeter } from 'App/Modules/ApplicationPerformance/ElectricalMeters/HtMeter/TestSetup/HtMeterPage';
import { verifyDefaultSubMeter } from 'App/Modules/ApplicationPerformance/ElectricalMeters/SubMeter/SubMeterType/DefaultSubMeter/TestSetup/DefaultSubMeter';
import { verifyDGSubMeter } from 'App/Modules/ApplicationPerformance/ElectricalMeters/SubMeter/SubMeterType/DGSubMeter/TestSetup/DGSubMeter';
import { verifySolarSubMeter } from 'App/Modules/ApplicationPerformance/ElectricalMeters/SubMeter/SubMeterType/SolarSubMeter/TestSetup/SolarSubMeter';
import { verifyAirCompressorSubMeter } from 'App/Modules/ApplicationPerformance/ElectricalMeters/SubMeter/SubMeterType/AirCompressorSubMeter/TestSetup/AirCompressor';
import { verifyHistory } from 'App/Modules/History/TestSetup/History';
import { verifyReport } from 'App/Modules/Reports/Request/TestSetup/Report';
import { verifyDownloadReport } from 'App/Modules/Reports/RequestedReportList/TestSetup/RequestedReportList';
import { verifyPlantProduction } from 'App/Modules/Productions/PlantProduction/Testseup/PlantProduction';
import { verifyAppProduction } from 'App/Modules/Productions/ApplicationProduction/Testsetup/AppProduction';
import { verifyProfile } from 'App/Modules/Accounts/Profile/TestSetup/Profile';
import { verifyChangePassword } from 'App/Modules/Accounts/ChangePassword/TestSetup/ChangePassword';
import { verifyPlantSetting } from 'App/Modules/Admin/Settings/TestSetup/Settings';
import { verifyStaff } from 'App/Modules/Admin/Staff/TestSetup/Staff';
import { verifyGasMeter } from 'App/Modules/ApplicationPerformance/GasMeters/GasMeter/TestSetup/GasMeter';
import { verifyDefaultSubGasMeter } from 'App/Modules/ApplicationPerformance/GasMeters/ManageSubGasMeter/DefaultSubMasMeter/TestSetup/DefaultSubGasMeter';
import { verifyRegisterPage } from 'App/Modules/Accounts/Register/TestSetup/Register';
import { verifyForgotPassword } from 'App/Modules/Accounts/ForgotPassword/TestSetup/ForgotPassword';

jest.retryTimes(3);

describe('login ', () => loginOperation(CXO_USER_CREDENTIALS)); // Login TestCase
describe('owner-home-page', verifyHomePage); // Plant Summary TestCase
describe('dashboard', verifyDashboard); // Dashboard TestCase
describe('Plant Performance', verifyPlantPerformance); // Plant Performance TestCase
describe('meter list', verifyMeterList); // MeterList TestCase
describe('HT Meter', verifyHtMeter); // HT Meter TestCase
describe('Default Sub Meter', verifyDefaultSubMeter); // Default Sub Meter TestCase
describe('DG Sub Meter', verifyDGSubMeter); // DG Sub Meter TestCase
describe('Solar Sub Meter', verifySolarSubMeter); // Solar Sub Meter TestCase
describe('Air Compressor', verifyAirCompressorSubMeter); // Air Compressor Sub Meter TestCase
describe('Gas meter', verifyGasMeter); // Gas Meter Testcase
describe('Sub Gas Meter ', verifyDefaultSubGasMeter); // Sub Gas Meter Testcase
describe('history', verifyHistory); // History TestCase
describe('report', verifyReport);
describe('download report page', verifyDownloadReport); // test-case for download report iun reports
describe('Plant Production', verifyPlantProduction); // PlantProduction TestCase
describe('application production', verifyAppProduction);
describe('profile', verifyProfile); // Profile TestCase
describe('change-password', verifyChangePassword); // ChangePassword TestCase
describe('plant-config', verifyPlantSetting); // Plant TestCase
describe('staff', verifyStaff); // Staff TestCase
describe('logout ', logoutOperation); // Logout TestCase
describe('register', verifyRegisterPage);
describe('forgot password', verifyForgotPassword);
