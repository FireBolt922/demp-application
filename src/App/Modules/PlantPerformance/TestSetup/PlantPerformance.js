import { BASE_DOMAIN } from 'testSettings.config';

const verifyPlantPerformance = () => {
  it('Verify the Plant Performance', async (done) => {
    // Clink on Plant Performance from navbar
    await Promise.all([
      await page.goto(`${BASE_DOMAIN}org/enerlly`),
      await expect(page).toClick('[id="performance"]'),
      await expect(page).toClick('[id="plant"]'),
    ]);
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('Plant Performance');

    // Content of the page
    await expect(page).toMatch('History');

    done();
  });
};

export { verifyPlantPerformance };
