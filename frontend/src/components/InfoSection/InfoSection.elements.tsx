import styled from 'styled-components';

export const InfoSec = styled.div<{ lightBg?: boolean }>`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#101522')};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const InfoRow = styled.div<{ imgStart?: boolean }>`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const InfoColumn = styled.div`
  flex: 1;
  margin-bottom: 15px;
  padding: 0 15px;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TopLine = styled.div<{ lightTopLine?: boolean }>`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1<{ lightText?: boolean }>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p<{ lightTextDesc?: boolean }>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ImgWrapper = styled.div<{ start?: boolean }>`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const StyledButton = styled.button<{ primary?: boolean }>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
  white-space: nowrap;
  padding: 12px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #010606;
  }
`;
