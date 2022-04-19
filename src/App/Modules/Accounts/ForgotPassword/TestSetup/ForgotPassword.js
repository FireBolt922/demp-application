import { BASE_DOMAIN } from 'testSettings.config';

const verifyForgotPassword = () => {
  it('Verify the forgot password page content', async (done) => {
    //   Clicks on the Plant tab
    await Promise.all([
      await page.goto(`${BASE_DOMAIN}/login`),
      await expect(page).toClick('a', { text: 'Forgot password?' }),
      // Clicks on the Staff section
      await expect(page).toMatch('FORGOT PASSWORD'),
    ]);
    // check contract demand text
    done();
  });
};

export { verifyForgotPassword };
