import React from 'react'
import './Profile.scss'

import ProfileImg from '../../atoms/ProfileImg/ProfileImg'
import ProfileInput from '../../atoms/ProfileInput/ProfileInput'
import ProfileButton from '../../atoms/ProfileButton/ProfileButton'


function Profile() {
	return (
		<main class="profile">
			<ProfileImg />
            <ProfileInput />
            <ProfileInput />
            <ProfileButton />
		</main>
	)
}

export default Profile