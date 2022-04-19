import * as Accounts from 'App/Modules/Accounts';
import * as Admin from 'App/Modules/Admin';
import * as Report from 'App/Modules/Reports';
import * as Meters from 'App/Modules/ApplicationPerformance';
import * as History from 'App/Modules/History';
import Home from 'App/Modules/Home';
import SuccessMessage from 'App/Common/UIComponents/SuccessMessage';
import PlantPerformance from 'App/Modules/PlantPerformance';
import Productions from 'App/Modules/Productions';
import Dashboard from 'App/Modules/Dashboard';

class Route {
  constructor({
    path,
    component,
    title,
    onNavigation = false,
    exact = true,
    authRequired = true,
  }) {
    this.path = path;
    this.component = component;
    this.title = title;
    this.onNavigation = onNavigation;
    this.exact = exact;
    this.authRequired = authRequired;
  }
}

const routes = [
  // Accouts Releated Routes Here
  new Route({
    path: '/login',
    title: 'Login',
    component: Accounts.Login,
    authRequired: false,
  }),
  // Here auth is true because if user hits the / path he should be redirected to home page.
  // For doing this User must be logged in
  new Route({
    path: '/',
    title: 'Login',
    component: Accounts.Login,
    authRequired: true,
  }),
  new Route({
    path: '/register',
    title: 'Register',
    component: Accounts.Register,
    authRequired: false,
  }),
  new Route({
    path: '/forgot-password',
    title: 'Forgot Password',
    component: Accounts.ForgotPassword,
    authRequired: false,
  }),
  new Route({
    path: '/profile',
    title: 'Profile',
    component: Accounts.Profile,
  }),
  new Route({
    path: '/change-password',
    title: 'Change Password',
    component: Accounts.ChangePassword,
  }),
  new Route({
    path: '/reset-password',
    title: 'Reset Password',
    component: Accounts.ResetPassword,
    authRequired: false,
  }),
  new Route({
    path: '/verified-account',
    title: 'Verified',
    component: Accounts.VerifiedAccount,
    authRequired: false,
  }),
  new Route({
    path: '/enforced-reset-password',
    title: 'Forced Change Password',
    component: Accounts.EnforcedChangePassword,
    authRequired: false,
  }),
  new Route({
    path: '/plan-status',
    title: 'Plan Status',
    component: Accounts.PlanExpired,
    authRequired: false,
  }),
  // Home Page Releated Routes Here ( Home )
  new Route({
    path: '/org/:orgName',
    title: 'Home',
    component: Home,
  }),
  // Dashboard Route ( Dashboard )
  new Route({
    path: '/org/:orgName/:plantID/dashboard',
    title: 'Dashboard',
    component: Dashboard,
  }),
  // Admin Page Routes ( Staff Page not given to end-user yet )
  new Route({
    path: '/org/:orgName/:plantID/setting/staff',
    title: 'Staff',
    component: Admin.Staff,
  }),
  // Success Message Component from Common Module
  new Route({
    path: '/success',
    title: 'Success',
    component: SuccessMessage,
    authRequired: false,
  }),

  // Meters (Application Performance) Routes
  new Route({
    path: '/org/:orgName/:plantID/meter-list/:tab?',
    title: 'Meter List',
    component: Meters.MeterList,
  }),
];

export default routes;
