import styled from 'styled-components'

export const SurveyDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  .surveyStatus {
    text-align: center;
    svg {
      width: 250px;
      height: 250px;
    }
  }
  .surveyQuestions {
    display: flex;
    flex-wrap: wrap;
    .header {
      background: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.white};
      margin-left: -40px;
      margin-right: -40px;
      margin-bottom: 30px;
      padding-top: 20px;
      padding-bottom: 20px;
      border-radius: 5px 5px 0px 0px;
    }
    .card {
      flex: 1 0 33%;
      background: ${props => props.theme.colors.grey};
      margin: 20px;
      padding: 0 40px 0;
      h2 {
        text-align: center;
        margin: 0;
      }
    }
    .question {
      margin-bottom: 30px;
    }
    .dv-star-rating {
      margin: 0 10px;
      top: 6px;
    }
  }
`
