import { Box as Base, BoxProps } from 'rebass';
import styled from 'styled-components';

export interface CustomBoxProps extends BoxProps {
  flex?: string;
  withEllipsis?: boolean;
  noTransition?: boolean;

  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Box = styled(Base)<CustomBoxProps>`
  flex: ${props => props.flex};

  transition: ${props => !props.noTransition && `all 0.1s ease`};

  ${props => props.withEllipsis && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export default Box;
