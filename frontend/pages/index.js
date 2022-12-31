import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import Navbar from '../components/Navbar'
import Head from 'next/head';
import ParticlesBox from '../components/Particles';

export default function index() {
	return (
		<>
		<Head>
<title> Pentesting tools</title>
<description> This site is an example of Nextjs proyect </description>
</Head>
<div id="particles">
	<ParticlesBox/>
	<Navbar/>
	<Dashboard/>
	<footer>
		<p>eleAche.</p><br/>
	<p>	This site is </p>
	</footer>
	</div>
		</>
	)
}
