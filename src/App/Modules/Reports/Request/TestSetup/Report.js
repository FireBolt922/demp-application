import { BASE_DOMAIN } from 'testSettings.config';

const url = `${BASE_DOMAIN}report/request`;
const verifyReport = () => {
  it('Verify all the initiative of page.', async (done) => {
    // Open Report page from the navigation bar
    await expect(page).toClick('[id="report"]');
    await expect(page).toClick('[id="generate"]');
    // Check the URL of the component
    expect(url).toBe(`${BASE_DOMAIN}report/request`);
    // Check the Title of the component
    await expect(page.title()).resolves.toMatch('Request report');
    await expect(page).toClick('[id="meter-category"]');
    await Promise.all([page.click('div[title="Electrical Meters"]')]);

    await expect(page).toClick('[id="report-type"]');
    await Promise.all([page.click('div[title="Measured Data"]')]);

    await expect(page).toClick('[id="shift"]');
    await Promise.all([page.click('div[title="first shift"]')]);

    await expect(page).toClick('[id="meter-type"]');
    await Promise.all([page.click('div[title="HT Meter"]')]);

    await expect(page).toClick('[id="meter-name"]');
    await Promise.all([page.click('div[title="ht meter 1"]')]);

    await page.type('input[placeholder = "Select date"]', '2021-07-01');
    await page.keyboard.press('Enter');

    await expect(page).toClick('[id="generate-report"]');

    done();
  });
};

export { verifyReport };
