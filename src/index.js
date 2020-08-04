import React from 'react'
import ReactDOM from 'react-dom'

import './styles/globals.scss'

// import App from './components/pages/App'
// import TitleAside from './components/atoms/TitleAside/TitleAside'
import CoverAlbum from './components/atoms/CoverAlbum/CoverAlbum'
import TitleCategory from './components/atoms/TitleCategory/TitleCategory'

import LibraryItem from './components/molecules/LibraryItem/LibraryItem'
import LibraryResult from './components/organims/LibraryResult/LibraryResult'
import Library from './components/templates/Library/Library'

ReactDOM.render(<Library />, document.getElementById('container'))
