const verifyHomePage = () => {
  const verifyParameters = [
    'Parameters & Plant Name',
    'Energy Consumption Summary',
    'Energy Consumption (kWh)',
    'Energy Cost (₹)',
    'GHG Emission (tCO2)',
    'Peak Demand (kVA)',
    'Power Factor',
    'Key Performance Indicator',
    'Specific Energy Consumption (kWh/tonnes)',
    'Specific Energy Cost (₹/tonnes)',
    'Specific Energy Emission (tCO2/tonnes)',
    'Enerlly Plant 1',
    'Enerlly Plant 2',
  ];
  it('verify plant summary page', async (done) => {
    await expect(page).toClick('[id="home"]');
    await Promise.all(
      verifyParameters.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  it('Verify the dashboard parameters from home page routing.', async (done) => {
    // Click on Plant Name
    await expect(page).toClick('p', { text: 'Enerlly Plant 1' });
    // page redirection check
    await page.waitForNavigation();
    done();
  });
};
export { verifyHomePage };
