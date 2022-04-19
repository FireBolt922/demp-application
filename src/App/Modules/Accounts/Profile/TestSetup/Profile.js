const verifyProfile = () => {
  // The variables on page which are to be checked
  const variablesToVerify = [
    'Basic Profile',
    'Organization',
    'Plant Name',
    'Designation',
    'User ID',
    'Email',
  ];
  //   This test checks Title of the page and the data
  it('Verify the content of profile page', async (done) => {
    //   Clicks on the Profile tab
    await Promise.all([
      await Promise.all([page.click('[id="user-profile"]')]),
      // Clicks on the Profile section
      await expect(page).toClick('[id="profile"'),
    ]);

    // Checks the Content of the page
    await Promise.all(
      variablesToVerify.map(async (item) => {
        await expect(page).toMatch(item);
      }),
    );
    done();
  });
};

export { verifyProfile };
