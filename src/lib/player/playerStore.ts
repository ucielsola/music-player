import { writable } from 'svelte/store';
import type { Player } from '$lib/interfaces';

const initialState: Player = {
	loaded: false,
	currentTrack: undefined,
	album: undefined,
	albumMeta: [],
	howlerInstance: undefined,
	controls: {
		isPlaying: false,
		volume: 0,
		currentTime: 0,
		isShuffle: false,
		isMute: false,
		isRepeat: false,
		progress: 0
	}
};

export const playerStore = Object.freeze(writable<Player>(initialState));
