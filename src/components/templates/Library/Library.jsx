import React from 'react'
import './Library.scss'

import AsideNav from '../../molecules/AsideNav/AsideNav'
import LibraryResult from '../../organims/LibraryResult/LibraryResult'
import Player from '../../organims/Player/Player'

function Library() {
	return (
		<>
			<main className="artist-main">
				<AsideNav />
				<LibraryResult />
			</main>
			<Player />
		</>
	)
}

export default Library
