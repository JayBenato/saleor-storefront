import { styled } from "@styles";

export const ShippingMethodForm = styled.form`
  display: grid;
  grid-gap: 20px;
`;

export const Title = styled.h3`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0 1.6rem 0;
`;

export const Tile = styled.label<{ checked: boolean }>`
  display: block;
  background-color: ${props => props.theme.colors.light};
  padding: 20px;
  ${props => props.checked && `border: 2px solid #ff9b42ff;`}
  cursor: pointer;
`;

export const TileTitle = styled.span`
  font-size: ${props => props.theme.typography.smallFontSize};
`;

export const Price = styled.span`
  color: #ff9b42ff;
`;

export const Wrapper = styled.div``;

export const SubTitle = styled.h4`
  padding: 0.6rem 0 1.4rem 0;
  font-size: ${props => props.theme.typography.baseFontSize};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  color: rgba(50, 50, 50, 0.6);
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid
    ${props => props.theme.colors.baseFontColorTransparent};
  margin: 0 0 20px 0;
`;

export const List = styled.ul`
  list-style-type: circle;
  margin-left: 20px;
`;
