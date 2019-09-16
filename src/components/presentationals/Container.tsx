import styled from 'styled-components';

interface IContainerProps {
  px?: number;
}

const Container = styled.div<IContainerProps>`
  max-width: ${1720 / 16}em;
  padding: 0 ${props => (props.px ? props.px : 20) / 16}em;
  margin: 0 auto;
  height: 100%;
`;

export default Container;
