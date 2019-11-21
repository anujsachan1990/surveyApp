import { call, takeLatest, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { service } from '../../global'

import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  DISPLAY_LOADER,
  HIDE_LOADER,
} from '../components/templates/ProductListingPage/ProductListingPage.constants'

export function* onFetchRecords() {
  const { getProductsList } = service
  try {
    yield put({ type: DISPLAY_LOADER, isLoading: true })
    yield delay(3000)
    const data = yield call(fetch, getProductsList)
    const products = yield data.json()
    yield put({ type: LOAD_PRODUCTS_SUCCESS, products })
    yield put({ type: HIDE_LOADER, isLoading: false })
  } catch (e) {
    return 'No Record Found'
  }
}

export default function* watchRootSaga() {
  yield takeLatest(LOAD_PRODUCTS, onFetchRecords)
}
