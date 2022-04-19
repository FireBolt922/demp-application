import { BASE_DOMAIN } from 'testSettings.config';

const verifyPlantSetting = () => {
  it('Verify the contract Demand', async (done) => {
    //   Clicks on the Plant tab
    await Promise.all([
      await page.goto(`${BASE_DOMAIN}org/enerlly`),
      await Promise.all([page.click('[id="setting"')]),
      // Clicks on the Staff section
      await Promise.all([page.click('[id="plant-setting"')]),
    ]);
    // check contract demand text
    await expect(page).toMatch('Contract Demand');
    done();
  });
  it('Verify the Tariff table', async (done) => {
    const tariffParamToVerify = ['Name', 'Description', 'Value'];
    // Checks the Content of the page
    await Promise.all(
      tariffParamToVerify.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  it('Verify the Notification Email Address table', async (done) => {
    const emailParamToVerify = ['Email', 'Contact', 'Status'];
    // Checks the Content of the page
    await Promise.all(
      emailParamToVerify.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
};

export { verifyPlantSetting };
