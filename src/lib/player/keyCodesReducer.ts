import { get } from 'svelte/store';
import { playerStore } from '$lib/player/playerStore';
import { togglePlay, playNextTrack, playPrevTrack, toggleRepeat, toggleShuffle, seek } from '$lib/player/actions';

const keyCodes = {
	b: 'b',
	leftArrow: 'ArrowLeft',
	m: 'm',
	n: 'n',
	p: 'p',
	r: 'r',
	rightArrow: 'ArrowRight',
	s: 's',
	space: " "
};

const keyCodesArray = Object.values(keyCodes);

const keyCodesReducer = (e: KeyboardEvent): void => {
	const { controls } = get(playerStore);

	if (keyCodesArray.includes(e.key)) {
		let seekValue
		switch (e.key) {
			case keyCodes.leftArrow:
				seekValue = controls.currentTime - 3
				seek(seekValue)
				break;
			case keyCodes.rightArrow:
				seekValue = controls.currentTime + 3
				seek(seekValue)
				break;
			case keyCodes.space:
			case keyCodes.p:
				togglePlay()
				break;
			case keyCodes.b:
				playPrevTrack()
				break;
			case keyCodes.n:
				playNextTrack()
				break;
			case keyCodes.r:
				toggleRepeat()
				break;
			case keyCodes.s:
				toggleShuffle()
				break;
			default:
				break;
		}
	}
};

export default keyCodesReducer;
