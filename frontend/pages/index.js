import React from 'react'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import Head from 'next/head';

export default function index() {
	return (
		<>
		<Head>
<title> Pentesting tools</title>
</Head>
<div id="root">
	<Navbar/>
	<Dashboard/>
	</div>
		</>

	)
}
