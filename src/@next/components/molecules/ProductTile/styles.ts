import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin-top: 0.5rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 2.5rem;
  text-align: center;
  max-height: 40rem;
  transition: 0.3s;

  :hover {
    background-color: ${props => props.theme.colors.secondaryLight};
  }

  ${media.largeScreen`
    padding: 1.8rem;
  `}
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-weight: normal;
  ${textProps}
`;

export const Price = styled.p`
  ${textProps}
`;

export const Image = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;

  > img {
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
`;
