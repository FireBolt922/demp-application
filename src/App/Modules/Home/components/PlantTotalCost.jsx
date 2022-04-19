import React from 'react';
import PropTypes from 'prop-types';
import ApiSuspense from 'App/Common/UIComponents/ApiSuspense';
import { Typography } from 'antd';
import Wrapper from 'App/Common/UIComponents/Wrapper';
import { RUPEES_BACKGROUND } from '../HomePage.constants';
import {
  CustomText,
  CustomDivRupees,
  CustomBackgroundImage,
} from '../HomePage.styled';

const { Title } = Typography;

function PlantTotalCost({ totalCost, metaData }) {
  const numberOfPlants = 2;
  return (
    <>
      {numberOfPlants > 1 ? (
        <>
          {numberOfPlants === 2 ? (
            <Wrapper>
              <ApiSuspense meta={metaData}>
                <Title level={5}>Total Energy Cost</Title>
                <CustomText
                  position="absolute"
                  top="60%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex="1"
                  color=" #00AEEF"
                  fontWeight="bold"
                  fontSize="24px"
                >
                  {totalCost}
                </CustomText>
                <CustomDivRupees position="relative" textAlign="center">
                  <CustomBackgroundImage
                    src={RUPEES_BACKGROUND.MULTIPLE_PLANT}
                    alt="background-img"
                    width="100%"
                    height="118px"
                  />
                </CustomDivRupees>
              </ApiSuspense>
            </Wrapper>
          ) : (
            <Wrapper height={numberOfPlants > 1 ? '195px' : '316px'}>
              <ApiSuspense meta={metaData}>
                <Title level={5}>Total Energy Cost</Title>
                <CustomText
                  position="absolute"
                  top="60%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex="1"
                  color=" #00AEEF"
                  fontWeight="bold"
                  fontSize="24px"
                >
                  {totalCost}
                </CustomText>
                <CustomDivRupees position="relative" textAlign="center">
                  <CustomBackgroundImage
                    src={RUPEES_BACKGROUND.MULTIPLE_PLANT}
                    alt="background-img"
                    width="100%"
                    height="142px"
                  />
                </CustomDivRupees>
              </ApiSuspense>
            </Wrapper>
          )}
        </>
      ) : (
        <Wrapper height={numberOfPlants > 1 ? '188px' : '316px'}>
          <ApiSuspense meta={metaData}>
            <Title level={5}>Total Energy Cost</Title>

            <CustomText
              position="absolute"
              top="55%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex="1"
              color=" #00AEEF"
              fontWeight="bold"
              fontSize="24px"
            >
              {totalCost}
            </CustomText>
            <CustomDivRupees
              position="relative"
              textAlign="center"
              marginTop="34px"
            >
              <CustomBackgroundImage
                src={RUPEES_BACKGROUND.SINGLE_PLANT}
                alt="background-img"
                width="100%"
                height="200px"
              />
            </CustomDivRupees>
          </ApiSuspense>
        </Wrapper>
      )}
    </>
  );
}
PlantTotalCost.propTypes = {
  totalCost: PropTypes.string.isRequired,
  metaData: PropTypes.object.isRequired,
};

export default PlantTotalCost;
