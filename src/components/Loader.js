import React from 'react'
import loading from '../loading.gif'

export default function Loader() {
  return (
	<div className="text-center">
		<img src={loading} alt="Loading" /><br/>
		<strong>Loading...</strong>
	</div>
  )
}
