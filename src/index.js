import React from 'react'
import ReactDOM from 'react-dom'

import './styles/globals.scss'

// import App from './components/pages/App'
// import TitleAside from './components/atoms/TitleAside/TitleAside'
import LogoHeader from './components/atoms/LogoHeader/LogoHeader'
import ProfileHeader from './components/molecules/ProfileHeader/ProfileHeader'

import ProfileImg from './components/atoms/ProfileImg/ProfileImg'
import ProfileInput from './components/atoms/ProfileInput/ProfileInput'
import ProfileButton from './components/atoms/ProfileButton/ProfileButton'

import UserAvatar from './components/atoms/UserAvatar/UserAvatar'
import UserName from './components/atoms/UserName/UserName'
import UserIcon from './components/atoms/UserIcon/UserIcon'

import Profile from './components/templates/Profile/Profile'

ReactDOM.render(<Profile />, document.getElementById('container'))
