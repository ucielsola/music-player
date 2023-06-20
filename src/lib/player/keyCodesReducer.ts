import { get } from 'svelte/store';
import { playerStore } from '$lib/player/playerStore';
import { togglePlay, setCurrentTrack, setVolume } from '$lib/player/actions';

const keyCodes = {
	downArrow: '40',
	leftArrow: '37',
	rightArrow: '39',
	space: '32',
	upArrow: '38',
	b: '66',
	m: '77',
	n: '78',
	p: '80',
	r: '82',
	s: '83'
};

const keyCodesArray = Object.values(keyCodes);

const keyCodesReducer = (e: KeyboardEvent): void => {
	const { currentTrack, album, controls } = get(playerStore);
	const keyCode = e.code;

	if (keyCodesArray.includes(keyCode)) {
		switch (keyCode) {
			case keyCodes.downArrow:
				// TODO: Implement volume down
				break;
			case keyCodes.leftArrow:
				// TODO: Implement seek backward
				break;
			case keyCodes.rightArrow:
				// TODO: Implement seek forward
				break;
			case keyCodes.space:
				// TODO: Implement play/pause
				break;
			case keyCodes.upArrow:
				// TODO: Implement volume up
				break;
			case keyCodes.b:
				// TODO: Implement back to previous track
				break;
			case keyCodes.m:
				// TODO: Implement mute/unmute
				break;
			case keyCodes.n:
				// TODO: Implement next track
				break;
			case keyCodes.p:
				// TODO: Implement play/pause
				break;
			case keyCodes.r:
				// TODO: Implement toggle repeat
				break;
			case keyCodes.s:
				// TODO: Implement toggle shuffle
				break;
			default:
				break;
		}
	}
};

export default keyCodesReducer;
