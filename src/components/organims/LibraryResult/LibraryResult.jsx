import React from 'react'

import './LibraryResult.scss'
import TitleCategory from '../../atoms/TitleCategory/TitleCategory'
import LibraryItem from '../../molecules/LibraryItem/LibraryItem'

function LibraryResult() {
	return (
		<section className="artist_list">
			<TitleCategory />
			<LibraryItem />
			<LibraryItem />
			<LibraryItem />
			<LibraryItem />
			<LibraryItem />
		</section>
	)
}

export default LibraryResult
