import { BASE_DOMAIN } from 'testSettings.config';

const verifyDownloadReport = () => {
  const paramToCheck = [
    'Requested At',
    'Valid Till',
    'Report Status',
    'Shift Name',
    'Request Type',
    'Download Link',
  ];
  it('Verify all the content of requested report page.', async (done) => {
    // Open Report page from the navigation bar

    await Promise.all([
      await page.goto(`${BASE_DOMAIN}org/enerlly`),
      await expect(page).toClick('[id="report"]'),
      await expect(page).toClick('[id="download"]'),
    ]);
    // Check the Title of the component
    await expect(page.title()).resolves.toMatch('Requested reports');
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    // closes the report tab
    await expect(page).toClick('[id="report"]');
    done();
  });
};

export { verifyDownloadReport };
