import React from 'react';
import { Typography, Button } from 'antd';
import {
  ENERLLY_LOGIN_LOGO,
  ENERLLY_TAG_LINE,
} from 'App/Constants/app.constants';
import useRouter from 'react-hooks/router';
import { renderTemplate } from 'react-hooks/text';
import { MESSAGE_OPTIONS } from 'App/Common/UIComponents/SuccessMessage/SuccessMessage.constants';
import {
  Section,
  Logo,
} from 'App/Common/UIComponents/SuccessMessage/SuccessMessage.styled';
import { useHistory } from 'react-router-dom';

const { Title, Paragraph } = Typography;
function SuccessMessage() {
  const router = useRouter();
  const history = useHistory();
  function handleClick() {
    history.push({
      pathname: '/login',
    });
  }
  return (
    <Section>
      <Logo justifyCenter onClick={handleClick}>
        <img src={ENERLLY_LOGIN_LOGO} alt="enerlly logo" />
      </Logo>
      <Paragraph>{ENERLLY_TAG_LINE}</Paragraph>
      <Title level={5}>SUCCESS</Title>
      <Paragraph>
        {renderTemplate(MESSAGE_OPTIONS[router.query.event_type], router.query)}
      </Paragraph>
      <Button type="primary" onClick={handleClick}>
        Login
      </Button>
    </Section>
  );
}

export default SuccessMessage;
