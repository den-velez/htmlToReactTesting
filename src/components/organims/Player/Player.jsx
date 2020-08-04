import React from 'react'
import './Player.scss'

import PlayerInfo from '../../molecules/PlayerInfo/PlayerInfo'
import PlayerControl from '../../molecules/PlayerControl/PlayerControl'

function Player() {
	return (
		<div className="player">
			<PlayerInfo />
			<PlayerControl />
		</div>
	)
}

export default Player
