import { SHOW_LOADER, HIDE_LOADER } from '../constant'

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}
