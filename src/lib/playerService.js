// import { writable, get } from 'svelte/store';
// import { album } from './contentService';

// let audio;

// let _album;

// export const playerState = writable({
// 	isPlaying: false,
// 	progress: 0,
// 	currentTime: 0,
// 	currentTrack: -1,
// 	onShuffle: false,
// 	onRepeat: false,
// 	isMuted: false,
// 	canResume: false
// });

// const events = ['ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay'];

// const addAudioEvents = () => {
// 	events.forEach((ev) => {
// 		audio.addEventListener(ev, handlers);
// 	});
// };

// const randomTrack = () => {
// 	//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
// 	const max = _album.songs.length;
// 	const min = 0;
// 	const random = Math.floor(Math.random() * (max - min + 1)) + min;
// 	return random != get(playerState).currentTrack ? random : randomTrack();
// };

// const handlers = (e) => {
// 	const { currentTrack, onRepeat, onShuffle, currentTime, trackLength } = get(playerState);
// 	switch (e.type) {
// 		case 'ended':
// 			if (_album.songs.length === currentTrack) return;
// 			if (onRepeat) return Play(currentTrack);
// 			if (onShuffle) return Play(randomTrack());
// 			Play(currentTrack + 1);
// 			playerState.set({ ...get(playerState), isPlaying: true, progress: 0 });
// 			break;
// 		case 'error':
// 			playerState.set({ ...get(playerState), isPlaying: false });
// 			break;
// 		case 'play':
// 			playerState.set({ ...get(playerState), isPlaying: true });
// 			break;
// 		case 'playing':
// 			playerState.set({ ...get(playerState), isPlaying: true });
// 			break;
// 		case 'pause':
// 			playerState.set({ ...get(playerState), isPlaying: false, canResume: true });
// 			break;
// 		case 'timeupdate':
// 			playerState.set({
// 				...get(playerState),
// 				currentTime: audio.currentTime * 1000,
// 				progress: currentTime / trackLength
// 			});
// 			break;
// 		case 'canplay':
// 			break;
// 	}
// };

// export const initPlayer = () => {
// 	_album = get(album);
// 	audio = new Audio();
// 	addAudioEvents();

// 	document.addEventListener('keydown', (e) => {
// 		if (e.code === 'Space') {
// 			return get(playerState).isPlaying ? Pause() : Play();
// 		}
// 	});
// };

// export const toggleShuffle = () => {
// 	let newState = !get(playerState).onShuffle;
// 	playerState.set({ ...get(playerState), onShuffle: newState, onRepeat: false });
// };

// export const toggleRepeat = () => {
// 	let newState = !get(playerState).onRepeat;
// 	playerState.set({ ...get(playerState), onRepeat: newState, onShuffle: false });
// };

// export const toggleMute = () => {
// 	let newState = !get(playerState).isMuted;
// 	audio.muted = newState;
// 	playerState.set({ ...get(playerState), isMuted: newState });
// };

// export const Play = (trackNum = 0) => {
// 	const { canResume, currentTrack } = get(playerState);

// 	if (canResume && trackNum === currentTrack) {
// 		playerState.set({ ...get(playerState), canResume: false });
// 		return audio.play();
// 	}

// 	let source = _album.songs[trackNum];
// 	audio.src = source.file.url;
// 	playerState.set({ ...get(playerState), trackLength: source.duration });
// 	audio.crossOrigin = 'anonymous';
// 	audio.load();
// 	audio.play().then(() => {
// 		playerState.set({ ...get(playerState), currentTrack: trackNum });
// 	});
// };

// export const Seek = (newPosition) => {
// 	audio.currentTime = (get(playerState).trackLength * newPosition) / 1000;
// };

// export const Next = () => {
// 	const { onShuffle, onRepeat, currentTrack } = get(playerState);
// 	if (onShuffle) return Play(randomTrack());
// 	if (onRepeat) return Play(currentTrack);
// 	let nextTrack = currentTrack === _album.songs.length - 1 ? 0 : currentTrack + 1;
// 	Play(nextTrack);
// };

// export const Previous = () => {
// 	const { onRepeat, currentTrack } = get(playerState);
// 	if (onRepeat) return Play(currentTrack);
// 	Play(currentTrack - 1);
// };

// export const Pause = () => {
// 	audio.pause();
// };
