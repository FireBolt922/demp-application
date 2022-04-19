import {
  Descriptions,
  Col,
  Select,
  Divider,
  Row,
  Typography,
  Statistic,
  Empty,
  Button,
} from 'antd';
import styled from 'styled-components';
import { margin, padding } from 'Styles/box';
import { FONT_BOLD } from 'Styles/Variables';

const { Text, Title } = Typography;

export const CustomLink = styled.p`
  font-weight: ${FONT_BOLD};
  color: black;
  cursor: pointer;
  ${margin('L')};
  &:hover {
    color: #42aeef;
  }
`;

export const PlantLocation = styled.p`
  color: grey;
  ${margin('XXS', 'top')};
`;

export const CustomDescriptionTitle = styled(Descriptions.Item)`
  background-color: '#f0f0f0';
  text-align: 'center';
  font-weight: ${FONT_BOLD};
`;
export const ColPadding = styled(Col)`
  ${padding('XS')};
  text-align: ${(props) => props.align};
`;
export const CustomCol = styled(Col)`
  text-align: ${(props) => props.align};
`;
export const SelectDropDown = styled(Select)`
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
`;
export const DividerPadding = styled(Divider)`
  margin: 0px 0px 10px 0px;
`;

export const TopScrollDiv = styled.div`
  overflow: ${(props) => props.overflow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow-y: ${(props) => props.overflowY};
  overflow-x: ${(props) => props.overflowX};
`;

export const MiddleScrollDiv = styled.div`
  min-width: ${(props) => props.minWidth};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const CustomRow = styled(Row)`
  display: ${(props) => props.display};
  flex-wrap: ${(props) => props.flexWrap};
`;
export const CustomText = styled(Text)`
  fontsize: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.marginTop};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  z-index: ${(props) => props.zIndex};
`;

export const CustomTh = styled.th`
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  fontsize: ${(props) => props.fontsize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.background};
`;

export const CustomTd = styled.td`
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  fontsize: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  font-weight: ${(props) => props.fontWeight};
`;
export const CustomStatistics = styled(Statistic)`
  background-image: ${(props) => props.backgroundImage};
  background-repeat: ${(props) => props.backgroundRepeat};
  background-position: ${(props) => props.backgroundPosition};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
`;
export const CustomEmpty = styled(Empty)`
  margin-top: ${(props) => props.marginTop};
`;
export const CustomTitle = styled(Title)`
  fontsize: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
export const CustomButton = styled(Button)`
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
`;
export const CustomDivRupees = styled.div`
  position: ${(props) => props.position};
  text-align: ${(props) => props.textAlign};
  margin-top: ${(props) => props.marginTop};
`;
export const CustomBackgroundImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const WrapperPadding = styled(Col)`
  padding: 8px;
`;
