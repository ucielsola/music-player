import { writable, get } from 'svelte/store';
import { album } from './contentService';

let audio;

let _album;

let canResume = false;

const events = ['ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay'];

const addAudioEvents = () => {
	events.forEach((ev) => {
		audio.addEventListener(ev, handlers);
	});
};

const randomTrack = () => {
	//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
	const max = _album.songs.length;
	const min = 0;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const handlers = (e) => {
	switch (e.type) {
		case 'ended':
			if (_album.songs.length === get(currentTrack)) return;
			if (get(isRepeat)) return Play(get(currentTrack));
			if (get(isShuffle)) return Play(randomTrack());
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

export const currentTrack = writable(-1);

export const currentTime = writable(0);

export const trackLength = writable(0);

export const isShuffle = writable(false);

export const isRepeat = writable(false);

export const isMuted = writable(false);

export const Shuffle = () => {
	let newState = !get(isShuffle);
	isShuffle.set(newState);
	isRepeat.set(false);
};

export const Repeat = () => {
	let newState = !get(isRepeat);
	isShuffle.set(false);
	isRepeat.set(newState);
};

export const Mute = () => {
	let newState = !get(isMuted);
	isMuted.set(newState);
	audio.muted = newState;
};

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
	audio.play().then(() => {
		currentTrack.set(trackNum);
	});
};

export const Seek = (newPosition) => {
	audio.currentTime = (get(trackLength) * newPosition) / 1000;
};

export const Next = () => {
	if (get(isShuffle)) return Play(randomTrack());
	if (get(isRepeat)) return Play(get(currentTrack));
	let nextTrack = get(currentTrack) === _album.songs.length - 1 ? 0 : get(currentTrack) + 1;
	Play(nextTrack);
};

export const Previous = () => {
	if (get(isRepeat)) return Play(get(currentTrack));
	Play(get(currentTrack) - 1);
};

export const Pause = () => {
	audio.pause();
};
