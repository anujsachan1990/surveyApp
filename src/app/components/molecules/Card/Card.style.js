import styled from 'styled-components'

export const CardContainerStyle = styled.div`
  text-align: center;
  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: ${props => props.theme.colors.green};
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card {
    display: block;
    position: relative;
    min-width: 250px;
    background-color: ${props => props.theme.colors.grey};
    border-radius: 4px;
    padding: 20px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: -16px;
      right: -16px;
      background: ${props => props.theme.colors.green};
      height: 32px;
      width: 32px;
      border-radius: 32px;
      transform: scale(1);
      transform-origin: 50% 50%;
      transition: transform 0.25s ease-out;
    }

    &:hover:before {
      transform: scale(21);
    }
    p {
      margin: 5px 0;
    }
  }

  .card:hover {
    p {
      transition: all 0.3s ease-out;
      color: rgba(255, 255, 255, 0.8);
    }
    h3 {
      transition: all 0.3s ease-out;
      color: ${props => props.theme.colors.white};
    }
    svg {
      text {
        fill: ${props => props.theme.colors.white};
        transition: all 0.3s ease-out;
      }
    }
  }
`
