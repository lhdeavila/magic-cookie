import React from 'react'
import Card from '../components/Card'
import database from '../../toolsDb'
import Navbar from '../components/Navbar'

export default function index() {
	return (

		<div id="root">
			<Navbar/>
			<div id="pentesting-tools">
				{database.map(key =>
        <Card id={key.id} tool={key.tool} description={key.description} url={key.url} />)}
				</div>
			</div>


	)
}
