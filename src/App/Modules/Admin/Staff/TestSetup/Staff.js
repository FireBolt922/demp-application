const verifyStaff = () => {
  // The variables on page which are to be checked
  const variablesToVerify = [
    'Staff ID',
    'Username',
    'Designation',
    'Plants',
    'Actions',
  ];
  it('Verify the content of staff page', async (done) => {
    //   Clicks on the Staff tab
    await Promise.all([
      await Promise.all([page.click('[id="setting"')]),
      // Clicks on the Staff section
      await Promise.all([page.click('[id="staff"')]),
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

export { verifyStaff };
