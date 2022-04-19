## `NavBar` Component

- This component is used when the user in `LoggedIn` and the user Token is Set in `customLocalStorage`.
- This component is interactive and contains all the tabs through which the user can route through the System.
- This `NavBar` is loaded only when the User is logged in.

## `NonLogged`

- This is the `NavBar` which is loaded when the used is not logged in.
- This `NavBar` dose not contain any Tab through which the user can navigate into the system.
- This `NavBar` is used for Modules in which `Auth` is not required
- Modules Like :
  - Login Page
  - Register Page
  - Forget Password Page
- In this `NavBar` we do not show the data which is related to the user.

## `TopNavBar`

- This `NavBar` is used when we want to make some enforced operation from the user.
- This `NavBar` only contains the username and the Organization name of the user.
- This module can only be used when the User is logged in to the system and we want some forceful operations to be done
- Examples for Forceful operation
  - Enforced Change Password
  - Enforced Logout
- For using this `TopNavBar` there must be `userToken` available in the customLocalStorage
