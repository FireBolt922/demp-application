import { BASE_DOMAIN } from 'testSettings.config';

const loginOperation = (USER_CREDENTIALS) => {
  it('login page with correct username and password', async (done) => {
    await page.screenshot({
      path: '__screenshots__/login_page_load.png',
    });
    await page.goto(BASE_DOMAIN);
    /* put username and password into input tags */
    await page.type('#loginForm_username', USER_CREDENTIALS.username);
    await page.type('#loginForm_password', USER_CREDENTIALS.password);
    await page.screenshot({
      path: '__screenshots__/login_fill_inputs.png',
    });

    /* click login button and wait for the page to be navigated */
    await Promise.all([
      page.click('button[name="loginSubmitButton"]'),
      page.waitForNavigation(),
    ]);
    await page.screenshot({
      path: '__screenshots__/login_success.png',
    });
    done();
  });
};

const logoutOperation = () => {
  it('Logout from website. Should redirect to login page.', async (done) => {
    // Find the logout element using selector tag.
    await Promise.all([
      page.click('span[aria-label="poweroff"]'),
      page.waitForNavigation(),
    ]);
    // Verify if the page is login page or not.
    await page.screenshot({
      path: '__screenshots__/logout_page_redirect.png',
    });
    done();
  });
};

export { loginOperation, logoutOperation };
