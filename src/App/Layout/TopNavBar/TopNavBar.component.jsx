// This compoenet will used for loggedIn user for who we want to put restriction from routing through our system

import React from 'react';
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import LogoutFunctionality from 'App/Common/Functionalities/LogoutFunctionality';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import { CustomFooter } from './TopNavBar.styled';

const { SubMenu } = Menu;
const { Header } = Layout;
function NavBar({ children }) {
  function logout() {
    LogoutFunctionality();
    /**
     * Unable to reload Navbar with history.push()
     * hence using window.location.href
     * This will be fixed in next revisit
     */
    window.location.href = '/login';
  }
  const profileData = customLocalStorage.getItem('userInfo', {}, 'json');
  const userName = profileData.email;
  const [title, setTitle] = React.useState(
    customLocalStorage.getItem('plantName', null, 'string').slice(1, -1),
  );
  function selectPlant(data) {
    customLocalStorage.setValue('selectedPlant', parseInt(data.key, 10));
    const selectedTitle = data.key.split('+')[1];
    setTitle(selectedTitle);
  }

  // This is for Selected key

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ padding: 0 }}>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item
            plantName="Logout"
            style={{ float: 'right' }}
            icon={<PoweroffOutlined />}
            onClick={logout}
          />

          <SubMenu
            id="profile"
            key="SubMenu"
            icon={<UserOutlined />}
            plantName={userName}
            style={{ float: 'right' }}
          />
          <SubMenu
            key="plantName"
            title={title}
            onClick={selectPlant}
            style={{ float: 'right' }}
          />
        </Menu>
      </Header>

      {children}
      <CustomFooter>Powered By Inizent © 2021</CustomFooter>
    </Layout>
  );
}

export default NavBar;
