import { BASE_DOMAIN } from 'testSettings.config';

const verifyMeterList = () => {
  it('Verify all the ht meter and sub meter listed.', async (done) => {
    // Open meter list page from the navigation bar
    await Promise.all([
      await page.goto(`${BASE_DOMAIN}org/enerlly`),
      await expect(page).toClick('[id="performance"]'),
      await expect(page).toClick('[id="application"]'),
    ]);
    // Match table Headings
    await expect(page).toMatch('Primary Energy Sources');
    await expect(page).toMatch('Auxiliary Sources');
    // check Primary Energy Sources table data
    await expect(page).toMatch('ht meter 1');
    await expect(page).toMatch('ht meter 2');
    // check Auxiliary table data
    await expect(page).toMatch('Sub Meter 2 DG');
    await expect(page).toMatch('Sub Meter 3 Solar');
    // Expand the ht meter list to see all sub meters.
    page.click(
      'button[class="ant-table-row-expand-icon ant-table-row-expand-icon-collapsed"]',
    );
    // Check if the sub meter list is loaded or not.
    await expect(page).toMatch('Sub Meter 1 Default');
    await expect(page).toMatch('sub meter 4 Air Compressor');
    await expect(page).toMatch('sub meter 5');
    done();
  });
};

export { verifyMeterList };
