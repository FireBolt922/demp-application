const verifyChangePassword = () => {
  // The variables on page which are to be checked
  const variablesToVerify = [
    'Change Password',
    'Current Password',
    'New Password',
    'Confirm New Password',
  ];
  //   This test checks Title of the page and the data
  it('Verify the title and data of change password page', async (done) => {
    //   Clicks on the Change Password tab
    await Promise.all([
      await Promise.all([page.click('[id="user-profile"]')]),
      // Clicks on the Change Password section
      await expect(page).toClick('[id="change-password"]'),
    ]);

    // Checks the Content of the page
    await Promise.all(
      variablesToVerify.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    // Checks the title of the page
    await expect(page.title()).resolves.toMatch('Change Password');
    done();
  });
};

export { verifyChangePassword };
