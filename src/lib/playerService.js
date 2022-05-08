import { writable, get } from 'svelte/store';
import { album } from './contentService';

let audio;

let _album;

let canResume = false;

const events = [
	'ended',
	'error',
	'play',
	'playing',
	'pause',
	'timeupdate',
	'canplay',
	'canplaythrough',
	'loadedmetadata'
];

const addAudioEvents = () => {
	events.forEach((ev) => {
		audio.addEventListener(ev, handlers);
	});
};

const handlers = (e) => {
	switch (e.type) {
		case 'ended':
			if (_album.songs.length === get(currentTrack)) return;
			Play(get(currentTrack) + 1);
			playing.set(true);
			break;
		case 'error':
			playing.set(false);
			break;
		case 'play':
			break;
		case 'playing':
			playing.set(true);
			break;
		case 'pause':
			canResume = true;
			playing.set(false);
			break;
		case 'timeupdate':
			currentTime.set(audio.currentTime * 1000);
			console.log(audio.currentTime * 1000);
			break;
		case 'canplay':
			break;
	}
};

export const createContext = () => {
	_album = get(album);
	audio = new Audio();
	addAudioEvents();

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Space' && get(playing)) {
			return Pause();
		} else {
			return Play();
		}
	});
};

export const playing = writable(false);

export const currentTrack = writable(false);

export const currentTime = writable(0);

export const trackLength = writable(0);

export const Play = (trackNum = 0) => {
	if (canResume && trackNum === get(currentTrack)) {
		canResume = false;
		return audio.play();
	}

	audio.src = _album.songs[trackNum].file.url;
	audio.crossOrigin = 'anonymous';
	audio.load();
	trackLength.set(audio.duration);
	audio.play().then(() => currentTrack.set(trackNum));
};

export const Pause = () => {
	audio.pause();
};
