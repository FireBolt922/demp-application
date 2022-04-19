import { BASE_DOMAIN } from 'testSettings.config';

const verifyDGSubMeter = () => {
  it('Verify the dg sub meter.', async (done) => {
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
    await expect(page).toClick('a', { text: 'Sub Meter 2 DG' });
    await expect(page.title()).resolves.toMatch('Sub Meter');
    done();
  });
  it('Verify the Monthly and Live Parameters', async (done) => {
    const paramToCheck = [
      'Monthly Data',
      'Energy Generation',
      'Diesel Cost',
      'Running Hours',
      'Diesel Consumption',
      "Today's Data",
      'Running Hours',
    ];
    // Checks weather Monthly and Live Parameters contains all the parameters
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
      'Energy Generation',
      'Energy Cost',
      'Running Hours',
      'Diesel Consumption',
      'Diesel Cost',
      'Power Factor',
      'GHG Emission',
      'Lube Oil Consumption',
      'Energy in TOE',
    ];
    // Checks weather Verify the Yesterday's data contains all the parameters
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  it('Verify the History Form in DG Sub Meter', async (done) => {
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

export { verifyDGSubMeter };
