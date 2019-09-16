import { Card as Base, CardProps } from 'rebass';
import styled from 'styled-components';

interface ICardProps extends CardProps {
  inline?: boolean;
  position?: string;
  height?: string;
}

const Card = styled(Base)<ICardProps>`
  display: ${props => props.inline ? 'inline-block' : 'block'};
  position: ${props => props.position};
  height: ${props => props.height};
`;

export default Card;
