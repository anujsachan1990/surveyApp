/**
 * @desc Any Global Utility and Helpers
 */
import Theme from '../styles/styleConstants'

export const getAvgRating = arr => {
  let popularitySum = 0
  let itemsFound = 0
  const len = arr.length
  let item = null
  for (let i = 0; i < len; i++) {
    item = arr[i]
    if (item.response_content !== '') {
      popularitySum = parseInt(item.response_content, 10) + popularitySum
      itemsFound = itemsFound + 1
    }
  }
  return {
    avg: popularitySum / itemsFound,
    participant: itemsFound,
  }
}

export const setSurveyComplitionStatus = rate => {
  let status = ''
  if (rate === 100) {
    status = Theme.colors.lightGreen
  } else if (rate > 60 && rate < 100) {
    status = Theme.colors.yellow
  } else {
    status = Theme.colors.red
  }

  return status
}
