import { Card as Base, CardProps } from 'rebass';
import styled from 'styled-components';

interface ICardProps extends CardProps {
  inline?: boolean;
  position?: string;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  height?: string;
}

const Card = styled(Base)<ICardProps>`
  display: ${props => props.inline ? 'inline-block' : 'block'};
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  height: ${props => props.height};
`;

export default Card;
