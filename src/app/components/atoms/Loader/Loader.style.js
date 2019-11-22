import styled from 'styled-components'

export default styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.1);
  > div {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    > div {
      &:first-child {
        background: ${props => props.theme.colors.green};
      }
      &:last-child {
        background: ${props => props.theme.colors.red};
      }
    }
  }
`
