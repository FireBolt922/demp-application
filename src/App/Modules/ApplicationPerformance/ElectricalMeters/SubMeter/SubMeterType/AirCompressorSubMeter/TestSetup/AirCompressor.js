import { BASE_DOMAIN } from 'testSettings.config';

const verifyAirCompressorSubMeter = () => {
  it('Verify the Air Compressor submeter', async (done) => {
    // Go the application page
    await Promise.all([
      await page.goto(`${BASE_DOMAIN}org/enerlly`),
      await expect(page).toClick('[id="performance"]'),
      await expect(page).toClick('[id="application"]'),
    ]);
    // Check meter name in the application page
    await expect(page).toMatch('ht meter 1');
    // Click to expand
    page.click(
      'button[class="ant-table-row-expand-icon ant-table-row-expand-icon-collapsed"]',
    );
    await expect(page).toClick('a', { text: 'sub meter 4 Air Compressor' });
    done();
  });
  it('Verify the Monthly,Todays and Live Parameters', async (done) => {
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
    // Checks weather Monthly,Todays and Live Parameters contains all the parameters
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
      'R Phase Current',
      'Y Phase Current',
      'B Phase Current',
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
      'Energy Consumption',
      'Energy Cost',
      'GHG Emission',
      'Percentage Loading',
      'Max Active Power',
      'Max Total Current',
      'Average Power Factor',
      'Running Hours',
      'Off Hours',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  it('Verify the History Form in Air Compressor Sub Meter', async (done) => {
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
export { verifyAirCompressorSubMeter };
