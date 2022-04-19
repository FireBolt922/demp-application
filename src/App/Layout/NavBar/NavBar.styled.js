import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import Flex from 'App/Common/UIComponents/Flex/Flex.styled';
import { margin } from 'Styles/box';

const { Sider, Footer } = Layout;
const { SubMenu } = Menu;
export const SideNavBar = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  margin-top: 50px;
`;

export const Logo = styled(Flex)`
  height: 25px;
  ${margin('L')}
  background-color: transparent;
`;

export const ChildComponentWrapper = styled.div`
  margin: 100px 16px 0;
  overflow: initial;
`;

export const ContentWrapper = styled.div`
  transition-duration: 0.5s;
  ${margin('L8', 'left')}
  ${margin('L1', 'right')}
  ${(props) =>
    props.collapsed ? `padding-left: 65px` : 'padding-left: 165px'};
  min-height: 90vh;
`;

export const TopNavBarCustomMenu = styled(Menu)`
  position: fixed;
  width: 100%;
  z-index: 3 !important;
  height: auto;
`;

export const CustomFooter = styled(Footer)`
  text-align: center;
  transition-duration: 0.5s;
  ${(props) =>
    props.collapsed ? `padding-left: 19vh;` : 'padding-left: 28vh'};
`;
// This is done to disable hover effect on Logo and use it for redirecting home page
// This is used to remove background on hover
export const CustomMenuItemForIcons = styled(Menu.Item)`
  background: none !important;
`;

// If the current path is Overview page then only margin:auto property will be applied
export const UserProfileSubMenu = styled(SubMenu)`
  ${(props) =>
    props.pathname === `/org/${props.orgName}` ? `margin-left: auto` : null}
`;

export const CustomSubMenu = styled(SubMenu)`
  margin-left: auto;
`;
