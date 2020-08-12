import React from 'react'
import './ProfileHeader.scss'

import UserAvatar from '../../atoms/UserAvatar/UserAvatar'
import UserName from '../../atoms/UserName/UserName'
import UserIcon from '../../atoms/UserIcon/UserIcon'

function ProfileHeader() {
	return (
		<a class="header-user" href="#">
			<UserAvatar />
			<UserName />
            <UserIcon />
		</a>
	)
}

export default ProfileHeader