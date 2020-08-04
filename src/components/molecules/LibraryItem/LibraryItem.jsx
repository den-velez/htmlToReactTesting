import React from 'react'

import './LibraryItem.scss'

import CoverAlbum from '../../atoms/CoverAlbum/CoverAlbum'

function LibraryItem() {
	return (
		<div className="artist_list-container-item">
			<CoverAlbum />
			<h3>Title</h3>
			<div className="artist_list-container-description">
				<p>3:33</p>
			</div>
		</div>
	)
}

export default LibraryItem
