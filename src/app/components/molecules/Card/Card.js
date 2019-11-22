import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Progress from '../../atoms/Progress'
import { CardContainerStyle } from './Card.style'
import Locale from '../../../../locale'
import {
  setSurveyComplitionStatus,
  getTwoDecimalPlaces,
} from '../../../../utils'

const Card = ({ survey }) => {
  const {
    name,
    participant_count,
    response_rate,
    url,
    submitted_response_count,
  } = survey
  return (
    <CardContainerStyle>
      <Link to={url}>
        <div className="card">
          <h3>{name}</h3>
          <Progress
            progress={getTwoDecimalPlaces(response_rate) * 100}
            progressColor={setSurveyComplitionStatus(
              getTwoDecimalPlaces(response_rate) * 100
            )}
          />
          <p>
            {Locale.participationCount}
            {participant_count}
          </p>

          <p>
            {Locale.totalSubmission}
            {submitted_response_count}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </Link>
    </CardContainerStyle>
  )
}

Card.propTypes = {
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    participant_count: PropTypes.number.isRequired,
    response_rate: PropTypes.number.isRequired,
    submitted_response_count: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default memo(Card)
