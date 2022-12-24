import React from 'react'
import Card from '../components/Card'
import database from '../../toolsDb'
import Navbar from '../components/Navbar'

export default function index() {
	return (

		<div >
			<Navbar/>
      {database.map(key =>
        <Card id={key.id} title={key.title} description={key.description} url={key.url} />)}
			</div>


	)
}
