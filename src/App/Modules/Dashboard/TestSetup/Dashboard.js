import { BASE_DOMAIN } from 'testSettings.config';

const url = `${BASE_DOMAIN}dashboard`;

const verifyDashboard = () => {
  it('Verify the url and the Title of the Dashboard', async (done) => {
    await page.goto(`${BASE_DOMAIN}org/enerlly`);
    // Clicks on Dashboard in NavBar
    await expect(page).toClick('[id="dashboard"]');
    // Checks the url of the page
    expect(url).toBe(`${BASE_DOMAIN}dashboard`);
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('Dashboard');
    done();
  });

  it('Verify Yesterdays Date and Todays date', async (done) => {
    // Checks weather the page contains todays data
    await expect(page).toMatch(`Today's Data`);
    // Checks weather the page contains yesterdays data
    await expect(page).toMatch(`Yesterday's Data`);
    done();
  });

  // Check for the parameters in Monthly and Live Data
  it('Verify Monthly and Live Data', async (done) => {
    const paramToCheck = [
      'Present Energy Cost',
      'Power Factor',
      'Demand Utilization',
    ];

    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  // Check for the parameters in Yesterdays Analysis of PR and Reactive Energy
  it('Verify Yesterdays Analysis', async (done) => {
    const paramToCheck = [
      'Reactive Energy',
      'Energy Loss',
      'RKVAH (LEAD)',
      'RKVAH (LAG)',
      'Capacitor Size (LEAD)',
      'Capacitor Size (LAG)',
      'Monetary Loss',
      'Actual Power Factor',
    ];
    // Clicks on the Down Arrow
    await Promise.all([page.click('span[aria-label="down"]')]);

    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  // This parameters will be checked wether they are present in Dashboard
  it('Verify dashboard with all the dashboard parameters ', async (done) => {
    const paramsToCheck = [
      'Monthly Data',
      'Live Data',
      'Energy Consumption (kWh)',
      'Energy Cost (₹)',
      'Energy Consumption Per Hour',
      'Average Demand (kVA)',
      'Peak Demand (kVA)',
      'GHG Emission (tCO2)',
      'Average Current (Amps)',
      'Current Harmonics - ATHD (%)',
      'Voltage Harmonics - VTHD (%)',
      "Yesterday's Analysis of PF and Reactive Energy",
    ];
    // Checks weather dashboard contains all the parameters
    await Promise.all(
      paramsToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
};

export { verifyDashboard };
