import React from 'react';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Container,
  StyledButton
} from './InfoSection.elements';

import { Link } from 'react-router-dom';

interface InfoSectionProps {
  primary?: boolean;
  lightBg?: boolean;
  topLine?: string;
  lightTopLine?: boolean;
  lightText?: boolean;
  lightTextDesc?: boolean;
  headline?: string;
  description?: string;
  buttonLabel?: string;
  img?: string;
  alt?: string;
  imgStart?: boolean;
  start?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) => {
  return (
    <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <Link to="/sign-up">
                <StyledButton primary={primary}>{buttonLabel}</StyledButton>
              </Link>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
