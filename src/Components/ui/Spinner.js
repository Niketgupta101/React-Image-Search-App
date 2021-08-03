import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '150px', margin: 'auto', display: 'block',position:'relative', top:'10vh' }}
      alt='Loading'
    />
  )
}

export default Spinner