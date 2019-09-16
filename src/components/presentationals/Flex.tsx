import { Flex as Base, FlexProps } from 'rebass';
import styled from 'styled-components';

interface CustomFlexProps extends FlexProps {
  overflow?: string;
  maxHeight?: boolean;
}

const Flex = styled(Base)<CustomFlexProps>`
  overflow: ${props => props.overflow};
  height: ${props => props.maxHeight ? '100%' : undefined};
`;

export default Flex;
