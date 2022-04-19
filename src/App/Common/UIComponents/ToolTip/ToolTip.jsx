import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { CustomTooltip } from './ToolTip.styled';

/**
 *
 * @param [string] [title which needs to be displayed on hover of the tooltip]
 * @returns A tooltip icon which gives a message which is passed in above param, when hovered over it
 */
function ToolTip({ titleOfToolTip }) {
  return (
    <CustomTooltip placement="bottom" title={titleOfToolTip}>
      <QuestionCircleOutlined />
    </CustomTooltip>
  );
}
ToolTip.protoTypes = {
  titleOfToolTip: PropTypes.string.isRequired,
};
export default ToolTip;
