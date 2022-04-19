import { BASE_DOMAIN } from 'testSettings.config';

const verifyHtMeter = () => {
  it('Verify the ht meter.', async (done) => {
    // Go to the application menu
    await Promise.all([
      await page.goto(`${BASE_DOMAIN}org/enerlly`),
      await expect(page).toClick('[id="performance"]'),
      await expect(page).toClick('[id="application"]'),
    ]);
    // Assert that current page contains ht meter
    await expect(page).toMatch('ht meter 1');
    await expect(page).toMatch('ht meter 3');

    // Expand the ht meter list to see all sub meters.
    await Promise.all([
      await expect(page).toClick('a', { text: 'ht meter 1' }),
    ]);
    await expect(page.title()).resolves.toMatch('HT Meter');
    done();
  });
  it('Verify the Monthly, Today and Live Parameters', async (done) => {
    const paramToCheck = [
      'Monthly Data',
      'Energy Consumption',
      'Energy Cost',
      'Todays Data',
      'Live Data',
      'Power Factor',
      'Current Total',
      'Percentage Loading',
    ];
    // Checks weather Monthly, Today and Live Parameters contains all the parameters
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  it('Verify the Graph', async (done) => {
    const paramToCheck = ['Live Graph', 'Power Factor', 'Previous', 'Next'];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    // Click on Previous Button
    await expect(page).toClick('[id="previous"]');
    // Click on Next Button
    await expect(page).toClick('[id="next"]');
    // Clicks on the Down Arrow
    await Promise.all([page.click('[id="dropdown"]')]);
    const graphParamToCheck = [
      'Power Factor',
      'KVA',
      'Voltage',
      'Current',
      'R Phase Current',
      'Y Phase Current',
      'B Phase Current',
      'kW',
    ];
    // Checks weather Graph selection contains all the parameters
    await Promise.all(
      graphParamToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    await Promise.all([page.click('div[title="KVA"]')]);
    done();
  });
  it("Verify the Yesterday's Transformer losses and Saving Potential", async (done) => {
    const paramToCheck = [
      'Load Condition',
      'KVA Loading',
      'Percentage Loading',
      'Fixed Losses, kWh',
      'Percentage Loss',
      'MIN',
      'MAX',
      'AVG',
      'Saving Potential',
      'Monetary Saving',
      'Energy Loss',
      'Monetary Loss',
    ];
    // Checks weather Verify the Yesterday's Transformer losses and Saving Potential contains all the parameters
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  it("Verify the Yesterday's Analysis of PF and Reactive Energy", async (done) => {
    const paramToCheck = [
      'Reactive Energy',
      'Energy Loss',
      'RKVAH (LEAD)',
      'Capacitor Size (LEAD)',
      'Actual Power Factor',
      'Monetary Loss',
      'RKVAH (LAG)',
      'Capacitor Size (LAG)',
    ];
    await expect(page).toClick('strong', {
      text: "Yesterday's Analysis of PF and Reactive Energy",
    });
    // Checks weather Yesterday's Analysis of PF and Reactive Energy contains all the parameters
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  it("Verify the Yesterday's Data", async (done) => {
    const paramToCheck = [
      'Energy Consumption',
      'Energy Cost',
      'GHG Emission',
      'Peak Demand',
      'Average Demand',
      'Current Harmonics - Athd',
      'Voltage Harmonics - Vthd',
      'Current Unbalance',
    ];
    // Checks weather Yesterday's Data contains all the parameters
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  it('Verify the History Form in HT Meter', async (done) => {
    // Verify the text of History Form
    await expect(page).toMatch('History');
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-03-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-03-02');
    await page.keyboard.press('Enter');
    // Submitting Form
    await Promise.all([page.click('button[name="Submit"]')]);
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');
    done();
  });
};

export { verifyHtMeter };
