import { BASE_DOMAIN } from 'testSettings.config';

const verifySolarSubMeter = () => {
  it('Verify the solar sub meter.', async (done) => {
    // Open meter list page from the navigation bar
    await Promise.all([
      await page.goto(`${BASE_DOMAIN}org/enerlly`),
      await expect(page).toClick('[id="performance"]'),
      await expect(page).toClick('[id="application"]'),
    ]);
    // Assert that current page contains ht meter
    await expect(page).toMatch('ht meter 1');
    await expect(page).toMatch('ht meter 2');

    // Expand the ht meter list to see all sub meters.
    page.click(
      'button[class="ant-table-row-expand-icon ant-table-row-expand-icon-collapsed"]',
    );
    // Expand the ht meter list to see all sub meters.
    await expect(page).toClick('a', { text: 'Sub Meter 3 Solar' });
    await expect(page.title()).resolves.toMatch('Sub Meter');
    done();
  });
  it('Verify the Monthly and Live Parameters', async (done) => {
    const paramToCheck = [
      'Monthly Data',
      'Solar Energy Generation',
      'Energy Cost Saved',
      'Live Data',
      'Power Factor',
      'Active Power',
    ];
    // Checks weather Monthly and Live Parameters contains all the parameters
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  it('Verify the Energy Parameters', async (done) => {
    const paramToCheck = [
      'GHG Emission Reduced',
      'Trees Planted',
      'Energy in TOE',
    ];
    // Checks weather Energy Parameters contains all the parameters
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
  it("Verify the Yesterday's Data", async (done) => {
    const paramToCheck = [
      'Solar Energy Generation',
      'Energy Cost Saved',
      'Max Active Power',
      'Average Power Factor',
      'Max Current',
      'Sun Hours',
      'Percentage Loading',
      'Solar Share in Plant Consumption',
    ];
    // Checks weather Verify the Yesterday's data contains all the Parameters
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  it('Verify the History Form in Solar SubMeter', async (done) => {
    // Verify the text of History Form
    await expect(page).toMatch('History');
    await expect(page).toMatch('Submit');
    // closes the Performance tab
    await expect(page).toClick('[id="performance"]');
    done();
  });
};

export { verifySolarSubMeter };
