const verifyRegisterPage = () => {
  it('Verify the register new user page content', async (done) => {
    //   Clicks on the Plant tab
    await Promise.all([
      await expect(page).toClick('a', { text: 'New Here? Create account' }),
      // Clicks on the Staff section
      await expect(page).toMatch('CREATE ACCOUNT'),
    ]);
    // check contract demand text
    done();
  });
};

export { verifyRegisterPage };
