import { BASE_DOMAIN } from 'testSettings.config';

const verifyGasMeter = () => {
  it('Verify the Gas Meters.', async (done) => {
    // Open meter list page from the navigation bar
    await page.goto(`${BASE_DOMAIN}org/enerlly`);
    await expect(page).toClick('[id="performance"]');
    await expect(page).toClick('[id="application"]');
    await page.click('div[id="rc-tabs-0-tab-gas-meters"]');
    // Open meter list page from the navigation bars
    await expect(page).toMatch('gas flow meter 1');
    await expect(page).toMatch('gas flow meter 2');
    // Click on the Gas meter
    await Promise.all([
      await expect(page).toClick('a', { text: 'gas flow meter 1' }),
    ]);
    // check table headings
    const paramToCheck = [
      'Monthly Data',
      'Gas Consumption',
      'Gas Cost',
      'Todays Data',
      'Live Data',
      'Volumetric Flow',
      'Mass Flow',
      'Temperature',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );

    done();
  });
  it('Verify the Graph', async (done) => {
    const paramToCheck = ['Live Graph', 'Volumetric Flow', 'Previous', 'Next'];
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
      'Volumetric Flow',
      'Mass Flow',
      'Density',
      'Temperature',
      'Pressure',
    ];
    // Checks weather Graph selection contains all the parameters
    await Promise.all(
      graphParamToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    await Promise.all([page.click('div[title="Mass Flow"]')]);
    done();
  });

  it('Verify the yesterdays data', async (done) => {
    const paramToCheck = [
      'Gas Consumption',
      'Gas Cost',
      'Gas in TOE',
      'Gas in kCal/Day',
      'Running Hour',
      'Off Hour',
      'AVG Temperature',
      'AVG Pressure',
      'AVG Density',
      'GHG Emission',
      'Per Hour Consumption',
      'TOE Share',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    // Close Performance Menu

    done();
  });

  it('Verify the History Form in Gas Meter', async (done) => {
    // Verify the text of History Form
    await expect(page).toMatch('History');
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-06-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-06-02');
    await page.keyboard.press('Enter');
    // Submitting Form
    await Promise.all([page.click('[id="submit')]);
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');
    done();
  });
};

export { verifyGasMeter };
