import audioEventsReducer from '$lib/player/audioEventsReducer';
import keyCodesReducer from '$lib/player/keyCodesReducer';

const audioEvents: string[] = [
	'ended',
	'error',
	'play',
	'playing',
	'pause',
	'timeupdate',
	'canplay'
];

const addEventListeners = (element: HTMLAudioElement) => {
	audioEvents.forEach((ev) => {
		element.addEventListener(ev, audioEventsReducer);
	});

	document.addEventListener('keydown', keyCodesReducer);
};

export default addEventListeners;
