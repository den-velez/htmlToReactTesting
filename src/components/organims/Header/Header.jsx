import React from 'react'
import './Header.scss'

import LogoHeader from '../../atoms/LogoHeader/LogoHeader'
import ProfileHeader from '../../molecules/ProfileHeader/ProfileHeader'

function Header() {
	return (
		<header class="header">
			<LogoHeader />
			<ProfileHeader />
		</header>
	)
}

export default Header