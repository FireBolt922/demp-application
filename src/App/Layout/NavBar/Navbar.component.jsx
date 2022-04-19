import React, { useEffect, useState } from 'react';
import BootstrapFunctionality from 'App/Common/BootstrapFunctionality';
import {
  DashboardOutlined,
  FileDoneOutlined,
  RocketOutlined,
  ToolOutlined,
  PoweroffOutlined,
  AppstoreOutlined,
  UserOutlined,
  HomeOutlined,
  CloudDownloadOutlined,
  DatabaseOutlined,
  SettingOutlined,
  FireOutlined,
  ApartmentOutlined,
  PartitionOutlined,
  QuestionCircleOutlined,
  NodeIndexOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Popover, Button } from 'antd';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  CXO_DESIGNATIONS,
  PRODUCTION_ENTRY_USER_DESIGNATION,
  PAGE,
  Demo_LOGO,
} from 'App/Constants/app.constants';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import LogoutFunctionality from 'App/Common/Functionalities/LogoutFunctionality';
import {
  SideNavBar,
  Logo,
  ChildComponentWrapper,
  ContentWrapper,
  TopNavBarCustomMenu,
  CustomFooter,
  CustomMenuItemForIcons,
  UserProfileSubMenu,
  CustomSubMenu,
} from './NavBar.styled';

import './Navbar.css';

const { SubMenu } = Menu;
function NavBar({ children }) {
  BootstrapFunctionality();
  const history = useHistory();
  // Handle Sub Menu Dropdown active or Inactive
  const [openKeys, setOpenKeys] = useState(null);

  const location = useLocation();
  const url = location.pathname;

  const [collapsed, setCollapsed] = React.useState(false);
  function logout() {
    LogoutFunctionality();
    /**
     * Unable to reload Navbar with history.push()
     * hence using window.location.href functionality
     * This will be fixed in next revisit
     */
    window.location.href = '/login';
  }
  const userName = 'testing@demo.com';
  const designation = 'CXO';
  const orgName = 'demo';
  const plantID = customLocalStorage.getItem('selectedPlant');
  const [title, setTitle] = React.useState(
    customLocalStorage.getItem('plantName', null, 'string').slice(1, -1),
  );
  function selectPlant(data) {
    customLocalStorage.setValue('selectedPlant', parseInt(data.key, 10));
    const selectedTitle = data.key.split('+')[1];
    customLocalStorage.setValue('plantName', selectedTitle);
    setTitle(selectedTitle);
    window.location = url.replace(`${plantID}`, parseInt(data.key, 10));
  }

  function homePage() {
    if (designation === CXO_DESIGNATIONS) {
      history.push({
        pathname: `/org/${orgName}`,
      });
    } else {
      history.push({
        pathname: `org/${orgName}/${plantID}${PAGE.DASHBOARD}`,
      });
    }
  }
  // Get Feature List
  const plantFeatures = customLocalStorage.getItem('plantFeatures', [], 'json');
  let meterCategory;
  plantFeatures.map((items) => {
    if (Number(plantID) === Number(items.plantId)) {
      meterCategory = items.meterCategory;
      return true;
    }
    return false;
  });
  // This is for Selected key
  const [currentKey, setCurrentKey] = useState(null);
  const onClickHandle = (e) => {
    setCurrentKey(e.key);
  };
  useEffect(() => {
    // This switch case to set Active menu items
    setTitle(
      customLocalStorage.getItem('plantName', title, 'string').slice(1, -1),
    );
    switch (url) {
      case `/org/${orgName}`:
        setCurrentKey('1');
        break;
      case `/org/${orgName}/${plantID}${PAGE.DASHBOARD}`:
        setCurrentKey('2');
        break;
      case `/org/${orgName}/${plantID}${PAGE.PLANT_PERFORMANCE}`:
        setCurrentKey('3');
        setOpenKeys(['performance']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.APP_PERFORMANCE}`:
      case `/org/${orgName}/${plantID}${PAGE.APP_PERFORMANCE}/electrical-meters`:
      case `/org/${orgName}/${plantID}${PAGE.APP_PERFORMANCE}/gas-meter`:
        setCurrentKey('4');
        setOpenKeys(['performance']);
        break;
      case `/org/${orgName}/${plantID}/ht-meter`:
      case `/org/${orgName}/${plantID}/sub-meter`:
      case `/org/${orgName}/${plantID}/gas-meter`:
      case `/org/${orgName}/${plantID}${PAGE.SUB_GAS_METER}`:
        setCurrentKey('4');
        setOpenKeys(['performance']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.HISTORY}/${PAGE.PLANT_PERFORMANCE}`:
        setCurrentKey('5');
        setOpenKeys(['history']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.GENERATE_REPORT}`:
        setCurrentKey('6');
        setOpenKeys(['report']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.DOWNLOAD_REPORT}`:
        setCurrentKey('7');
        setOpenKeys(['report']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.PLANT_PRODUCTION}`:
        setCurrentKey('8');
        // When user logged in with production user then sub menu will be open.
        setOpenKeys(['production']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.APP_PRODUCTION}/ht-meter`:
      case `/org/${orgName}/${plantID}${PAGE.APP_PRODUCTION}/sub-meter`:
      case `/org/${orgName}/${plantID}${PAGE.APP_PRODUCTION}/gas-meter`:
      case `/org/${orgName}/${plantID}${PAGE.APP_PRODUCTION}/sub-gas-meter`:
        setCurrentKey('9');
        setOpenKeys(['production']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.HISTORY}/ht-meter`:
        setCurrentKey('10');
        setOpenKeys(['history']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-meter`:
        setCurrentKey('11');
        setOpenKeys(['history']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.HISTORY}/gas-meter`:
        setCurrentKey('12');
        setOpenKeys(['history']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.HISTORY}/sub-gas-meter`:
        setCurrentKey('13');
        setOpenKeys(['history']);
        break;
      case `/org/${orgName}/${plantID}${PAGE.HISTORY}/water-meter`:
        setCurrentKey('14');
        setOpenKeys(['history']);
        break;
      case `${PAGE.PROFILE}`:
        setCurrentKey('profile');
        break;
      case `${PAGE.CHANGE_PASSWORD}`:
        setCurrentKey('password');
        break;
      default:
        setCurrentKey(currentKey);
    }
  }, [setCurrentKey, orgName, plantID, url, currentKey, title]);

  // Sub Menu keys needs to add here for active or inactive dropdown
  const rootSubMenuKey = ['performance', 'history', 'report', 'production'];
  const onOpenChange = (keys) => {
    setOpenKeys(keys);
    if (openKeys) {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubMenuKey.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    }
  };

  // React Tour

  const helpPopUpTitle = <span>Help</span>;
  const content = (
    <div>
      <Button shape="round" type="primary">
        Get Tour
      </Button>
    </div>
  );
  // This Function is sorting step by the designation

  return (
    <>
      <Layout>
        <SideNavBar
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[currentKey]}
            onClick={onClickHandle}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
          >
            {designation === CXO_DESIGNATIONS ? (
              <Menu.Item
                key="1"
                style={{ float: 'right' }}
                onClick={homePage}
                icon={<HomeOutlined />}
                id="home"
              >
                <Link
                  to={{
                    pathname: `/org/${orgName}`,
                  }}
                >
                  Machine Status
                </Link>
              </Menu.Item>
            ) : null}
            {designation !== PRODUCTION_ENTRY_USER_DESIGNATION ? (
              <Menu.Item key="2" icon={<DashboardOutlined />} id="dashboard">
                <Link
                  to={{
                    pathname: `/org/${orgName}/${plantID}/meter-list`,
                  }}
                >
                  Machine List
                </Link>
              </Menu.Item>
            ) : null}
            <Menu.Item key="3" icon={<DashboardOutlined />} id="reports">
              <Link
                to={{
                  pathname: `/org/${orgName}/${plantID}/dashboard`,
                }}
              >
                Report
              </Link>
            </Menu.Item>
            <div style={{ position: 'fixed', bottom: '47px' }}>
              <Menu theme="dark" mode="inline">
                <Menu.Item key="223" icon={<QuestionCircleOutlined />}>
                  <Popover
                    placement="rightBottom"
                    title={helpPopUpTitle}
                    content={content}
                    trigger="click"
                  >
                    Help
                  </Popover>
                </Menu.Item>
              </Menu>
            </div>
          </Menu>
        </SideNavBar>
        <Layout>
          <TopNavBarCustomMenu theme="dark" mode="horizontal">
            {window.location.pathname !== `/org/${orgName}` ? (
              <CustomSubMenu
                id="plantName"
                key="plantName"
                title={title}
                onClick={selectPlant}
              >
                <Menu.Item key="1+Demo Plant 1" value="1+Demo Plant 1">
                  Demo Plant 1
                </Menu.Item>
                <Menu.Item key="2+Demo Plant 2" value="2+Demo Plant 2">
                  Demo Plant 2
                </Menu.Item>
              </CustomSubMenu>
            ) : null}
            <UserProfileSubMenu
              id="user-profile"
              key="SubMenuProfile"
              icon={<UserOutlined />}
              title={userName}
              pathname={window.location.pathname}
              orgName={orgName}
            >
              <Menu.Item key="profile" id="profile">
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="password" id="change-password">
                <Link to="/change-password">Change Password</Link>
              </Menu.Item>
            </UserProfileSubMenu>

            <CustomMenuItemForIcons
              title="Logout"
              icon={<PoweroffOutlined />}
              onClick={logout}
            />
          </TopNavBarCustomMenu>

          <ContentWrapper collapsed={collapsed}>
            <ChildComponentWrapper>{children}</ChildComponentWrapper>
          </ContentWrapper>
        </Layout>
      </Layout>
    </>
  );
}

export default NavBar;
