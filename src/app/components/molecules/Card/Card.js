import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import Circle from 'react-circle'
import { CardContainerStyle } from './Card.style'

const Card = props => {
  const {
    name,
    participant_count,
    response_rate,
    url,
    submitted_response_count,
  } = props.survey
  return (
    <CardContainerStyle>
      <Link to={url}>
        <div className="card">
          <h3>{name}</h3>
          <Circle progress={response_rate.toFixed(2) * 100} />

          <p>
            {'Participation Count: '}
            {participant_count}
          </p>

          <p>
            {'Total Submission: '}
            {submitted_response_count}
          </p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </Link>
    </CardContainerStyle>
  )
}

export default memo(Card)
