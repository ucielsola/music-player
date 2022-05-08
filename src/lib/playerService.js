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
			playing.set(true);
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
			progress.set(get(currentTime) / get(trackLength));
			break;
		case 'canplay':
			break;
	}
};

export const initPlayer = () => {
	_album = get(album);
	audio = new Audio();
	addAudioEvents();

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Space') {
			return get(playing) ? Pause() : Play();
		}
	});
};

export const playing = writable(false);

export const progress = writable(0);

export const currentTrack = writable(false);

export const currentTime = writable(0);

export const trackLength = writable(0);

export const Play = (trackNum = 0) => {
	if (canResume && trackNum === get(currentTrack)) {
		canResume = false;
		return audio.play();
	}
	let source = _album.songs[trackNum];
	audio.src = source.file.url;
	trackLength.set(source.duration);
	audio.crossOrigin = 'anonymous';
	audio.load();
	audio.play().then(() => currentTrack.set(trackNum));
};

export const Seek = (newPosition) => {
	audio.currentTime(newPosition);
};

export const Pause = () => {
	audio.pause();
};
