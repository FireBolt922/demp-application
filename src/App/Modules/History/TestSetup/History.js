import { BASE_DOMAIN } from 'testSettings.config';

const verifyHistory = () => {
  /**
   * ===============================================
   * Plant Performance History
   * ===============================================
   */
  it('Verify the Plant Performance History', async (done) => {
    await page.goto(`${BASE_DOMAIN}org/enerlly`);
    // Open History page from the navigation bar
    await expect(page).toClick('[id="history"]');
    // Click on Plant Performance Menu
    await expect(page).toClick('[id="plant-performance"]');
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');
    // Content of the page
    await expect(page).toMatch('History');
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-03-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-03-02');
    await page.keyboard.press('Enter');
    // Submit Details
    await Promise.all([page.click('button[id="submit"]')]);

    done();
  });
  it('Verify the Plant Performance History Parameters', async (done) => {
    const paramToCheck = [
      'Specific Energy Consumption',
      'Specific Energy Cost',
      'Total Energy Consumption',
      'Specific Emission',
      'Plant Load Factor',
      'Production',
      'Energy in TOE',
      'GHG Emission',
    ];
    // Checks weather Plant Performance History contains all the parameters
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  it('Verify the Plant Energy Consumption Summary Parameters', async (done) => {
    // Click on Plant Energy Consumption Summary Toggle
    await expect(page).toClick('strong', {
      text: 'Plant Energy Consumption Summary',
    });
    // Checks weather Plant Energy Consumption Summary contains all the parameters
    const paramToCheck = [
      'Meter Name',
      'Energy Consumption Summary (kWh)',
      'Percentage Share (%)',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  it('Verify the Power Factor Analysis Parameters', async (done) => {
    // Click on Power Factor Analysis Toggle
    await expect(page).toClick('strong', {
      text: 'Power Factor Analysis',
    });
    // Checks weather Power Factor Analysis contains all the parameters
    const paramToCheck = [
      'Reactive Energy',
      'Energy Loss',
      'RKVAH(LEAD)',
      'Capacitor Size (LEAD)',
      'Power Factor',
      'Monetary Loss',
      'RVAH(LAG)',
      'Capacitor Size (LAG)',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  it('Verify the Power Quality Parameters', async (done) => {
    // Checks weather Power Quality contains all the parameters
    const paramToCheck = [
      'Current Harmonics in ATHD',
      'Voltage Harmonics in VTHD',
      'Average Power Factor',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  it('Verify the Power Factor (LEAD/LAG) Parameters', async (done) => {
    // Checks weather Power Factor (LEAD/LAG) contains all the parameters
    const paramToCheck = [
      'Max Power Factor',
      'Min Power Factor',
      'Avg Power Factor',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    await expect(page).toClick('[id="history"]');
    done();
  });
  /**
   * ===============================================
   * HT Meter History
   * ===============================================
   */
  it('Verify the HT Meter History', async (done) => {
    // Go to the home page
    await page.goto(`${BASE_DOMAIN}org/enerlly`);
    // Open History page from the navigation bar
    await Promise.all([
      await expect(page).toClick('[id="history"]'),
      // Click on HT Meter Tab
      await expect(page).toClick('[id="ht-meter"]'),
    ]);
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');
    // Click on meter list dropdown
    await expect(page).toClick('[id="select"]');
    // Selecting HT Meter
    await Promise.all([page.click('div[title="ht meter 1"]')]);
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-03-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-03-02');
    await page.keyboard.press('Enter');
    // Submitting form
    await Promise.all([page.click('button[id="submit"]')]);
    done();
  });

  it('Verify the HT Meter History Parameters', async (done) => {
    // Checks weather HT Meter History  contains all the parameters
    const paramToCheck = [
      'Energy Consumption',
      'Average Active Power',
      'Average Demand',
      'GHG Emission',
      'Load Factor',
      'Current Harmonics',
      'Energy Cost',
      'Average Power Factor',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  it('Verify the Key Performance Indicator Parameters', async (done) => {
    // Checks weather Key Performance Indicator contains all the parameters
    const paramToCheck = [
      'Key Specific Energy Consumption',
      'Key Specific Energy Cost',
      'Key Specific Energy Emission',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  it('Verify the Analysis of PF and Reactive Energy Parameters', async (done) => {
    // Checks weather Analysis of PF and Reactive Energy contains all the parameters
    const paramToCheck = [
      'Reactive Energy',
      'Energy Loss',
      'RKVAH (Lead)',
      'RKVAH (Lag)',
      'Actual Power Factor',
      'Monetary Loss',
      'Capacitor Size (Lead)',
      'Capacitor Size (Lag)',
    ];
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  it('Verify the Power Quality Parameters', async (done) => {
    // Checks weather Power Quality contains all the parameters
    const paramToCheck = [
      'Current Harmonics ATHD',
      'Voltage Harmonics VTHD',
      'Current Unbalance',
    ];
    // Checks weather Plant Performance History contains all the parameters
    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    // Close History dropdown
    await Promise.all([await expect(page).toClick('[id="history"]')]);
    done();
  });
  /**
   * ===============================================
   * Sub Meter History
   * Type - Default Sub Meter
   * ===============================================
   */
  it('Verify the Default Sub Meter History', async (done) => {
    // Go to the home page
    await page.goto(`${BASE_DOMAIN}org/enerlly`);
    // Open History page from the navigation bar
    await expect(page).toClick('[id="history"]');
    await expect(page).toClick('[id="submeter"]');
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');

    // Click on meter list dropdown
    await expect(page).toClick('[id="select"]');
    // Selecting Default Sub Meter
    await Promise.all([page.click('div[title="Sub Meter 1 Default"]')]);
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-03-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-03-02');
    await page.keyboard.press('Enter');
    // Submitting Form
    await Promise.all([page.click('button[id="submit"]')]);
    done();
  });

  it('Verify the Default Sub Meter History Parameters', async (done) => {
    // Checks weather Default Sub Meter History contains all the parameters
    const paramToCheck = [
      'Energy Consumption',
      'Average Active Power',
      'Average Demand Total',
      'GHG Emission',
      'Energy Cost',
      'Average Power Factor',
      'Run Hours',
      'Percentage Loading',
    ];

    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  /**
   * ===============================================
   * Sub Meter History
   * Type - DG Sub Meter
   * ===============================================
   */
  it('Verify the DG Sub Meter History Parameters', async (done) => {
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');
    // Clicks on the Down Arrow
    await expect(page).toClick('[id="select"]');
    // Selecting DG Sub Meter
    await Promise.all([page.click('div[title="Sub Meter 2 DG"]')]);
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-03-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-03-02');
    await page.keyboard.press('Enter');
    // Submitting Form
    await Promise.all([page.click('button[id="submit"]')]);
    done();
  });
  it('Verify the DG Sub Meter History Parameters', async (done) => {
    // Checks weather DG Sub Meter History contains all the parameters
    const paramToCheck = [
      'DG Energy Generation',
      'DG Energy Cost',
      'DG Operation Hours',
      'Diesel Consumption',
      'Percentage Loading',
      'Lube Oil Consumption',
      'Power Factor',
      'GHG Emission',
    ];

    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    // Close History Menu
    await Promise.all([
      await expect(page).toClick('span', { text: 'History' }),
    ]);
    done();
  });
  /**
   * ===============================================
   * Sub Meter History
   * Type - Solar Sub Meter
   * ===============================================
   */
  it('Verify the Solar Sub Meter History Parameters', async (done) => {
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');
    // Clicks on the Down Arrow
    await expect(page).toClick('[id="select"]');
    // Selecting Solar Sub Meter
    await Promise.all([page.click('div[title="Sub Meter 3 Solar"]')]);
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-03-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-03-02');
    await page.keyboard.press('Enter');
    // Submitting Form
    await Promise.all([page.click('button[id="submit"]')]);
    done();
  });
  it('Verify the Solar Sub Meter History Parameters', async (done) => {
    // Checks weather Solar Sub Meter History contains all the parameters
    const paramToCheck = [
      'Solar Energy Generation',
      'Peak Power Generated',
      'Emission Reduced',
      'Energy Cost Saved',
      'Energy in TOE',
      'Trees Planted',
      'Solar Share in Plant Consumption',
      'Sun Hours',
    ];

    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    // Close History Menu
    await Promise.all([await expect(page).toClick('[id="history"]')]);
    done();
  });

  /**
   * ===============================================
   * Sub Meter History
   * Type - Air Compressor Sub Meter
   * ===============================================
   */
  it('Verify the Air Compressor Sub Meter History Parameters', async (done) => {
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');
    // Clicks on the Down Arrow
    await expect(page).toClick('[id="select"]');
    // Selecting Air Compressor Sub Meter
    await Promise.all([page.click('div[title="sub meter 4 Air Compressor"]')]);
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-03-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-03-02');
    await page.keyboard.press('Enter');
    // Submitting Form
    await Promise.all([page.click('button[name="Submit"]')]);
    done();
  });

  it('Verify the Air Compressor Sub Meter History Parameters', async (done) => {
    // Checks weather Air Compressor Sub Meter History contains all the parameters
    const paramToCheck = [
      'Energy Consumption',
      'Average Active Power',
      'Average Demand Total',
      'GHG Emission',
      'Energy Cost',
      'Average Power Factor',
      'Run Hours',
      'Percentage Loading',
    ];

    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });

  it('Verify the Motor History Analysis Parameters', async (done) => {
    // Checks weather Motor History Analysis contains all the parameters
    const paramToCheck = [
      'Motor History Analysis',
      'Percentage Unloading',
      'Unloading Hours',
      'Energy Loss',
      'Monetary Loss',
    ];

    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
  /**
   * ===============================================
   * GasFlow Meter History
   * ===============================================
   */
  it('Verify the GasFlow Meter History', async (done) => {
    // Go to the home page
    await page.goto(`${BASE_DOMAIN}org/enerlly`);
    // Open History page from the navigation bar
    await Promise.all([
      await expect(page).toClick('[id="history"]'),
      await expect(page).toClick('[id="gasmeter"]'),
    ]);
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');

    // Click on meter list dropdown
    await expect(page).toClick('[id="select"]');
    // Selecting Default Sub Meter
    await Promise.all([page.click('div[title="gas flow meter 1"]')]);
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-06-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-06-02');
    await page.keyboard.press('Enter');
    // Submitting Form
    await Promise.all([page.click('button[id="submit"]')]);
    done();
  });

  it('Verify the Gas Meter History Parameters', async (done) => {
    // Checks weather Default Sub Meter History contains all the parameters
    // Checks weather Gas Meter History contains all the parameters
    const paramToCheck = [
      'Gas Consumption',
      'Gas Cost',
      'Gas Energy in kCal',
      'Running Hours',
      'Off Hours',
      'GHG Emission',
      'AVG Temperature',
      'AVG Pressure',
      'AVG Density',
    ];

    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    // Close History Menu
    await expect(page).toClick('[id="history"]');
    done();
  });
  /**
   * ===============================================
   * Sub Gas Flow Meter History
   * ===============================================
   */
  it('Verify the Sub GasFlow Meter History', async (done) => {
    // Go to the home page
    await page.goto(`${BASE_DOMAIN}org/enerlly`);
    // Open History page from the navigation bar
    await Promise.all([
      await expect(page).toClick('[id="history"]'),
      await expect(page).toClick('[id="subgasmeter"]'),
    ]);
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('History');

    // Click on meter list dropdown
    await expect(page).toClick('span', { text: 'Select Meter' });

    // Selecting Default Sub Meter
    await Promise.all([page.click('div[title="sub gas flow meter 1"]')]);
    // Put Dates
    await page.type('input[placeholder="Start date"]', '2021-06-01');
    await page.keyboard.press('Enter');
    await page.type('input[placeholder="End date"]', '2021-06-02');
    await page.keyboard.press('Enter');
    // Submitting Form
    await Promise.all([page.click('button[name="Submit"]')]);
    done();
  });
  it('Verify the Sub Gas Meter History Parameters', async (done) => {
    // Checks weather Default Sub Gas Meter History contains all the parameters
    const paramToCheck = [
      'Gas Consumption',
      'Gas Cost',
      'Gas Energy in kCal',
      'Running Hours',
      'Off Hours',
      'GHG Emission',
      'AVG Temperature',
      'AVG Pressure',
      'AVG Density',
    ];

    await Promise.all(
      paramToCheck.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    // Close History Menu
    await expect(page).toClick('[id="history"]');
    done();
  });
};

export { verifyHistory };
