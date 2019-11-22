import React from 'react'
import { BounceLoader } from 'react-spinners'
import LoaderStyled from './Loader.style'

/**
 * @desc Loader is internaly ussing React Spiner https://www.npmjs.com/package/react-spinners
 * @todo Allow funcationality to use multiple Loaders
 */

const Loader = React.memo(function Loader({ ...props }) {
  return (
    <LoaderStyled {...props}>
      <BounceLoader size={100} color="#def1f4" />
    </LoaderStyled>
  )
})

export default Loader
