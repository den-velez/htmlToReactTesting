import React from 'react'
import './PlayerControl.scss'

import random from '../../../assets/random.png'
import prev from '../../../assets/prev.png'
import play from '../../../assets/play.png'
import next from '../../../assets/next.png'
import repeat from '../../../assets/repeat.png'

function PlayerControl() {
	return (
		<div className="player-panel">
			<div className="player-panel-icons">
				<span className="player-panel-icon">
					<img src={random} alt="" />
				</span>
				<span className="player-panel-icon">
					<img src={repeat} alt="" />
				</span>
				<span className="player-panel-icon">
					<img src={play} alt="" />
				</span>
				<span className="player-panel-icon">
					<img src={next} alt="" />
				</span>
				<span className="player-panel-icon">
					<img src={repeat} alt="" />
				</span>
			</div>
			<div className="player-panel-bar"></div>
		</div>
	)
}

export default PlayerControl
