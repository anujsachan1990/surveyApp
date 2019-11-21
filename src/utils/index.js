/**
 * @desc Any Global Utility and Helpers
 */

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
