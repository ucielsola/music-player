import type { Album } from '$lib/interfaces/Album';

export interface Player {
	loaded: boolean;
	currentTrack: number;
	album?: Album;
	controls: {
		isPlaying: boolean;
		volume: number;
		currentTime: number;
		isShuffle: boolean;
		isMute: boolean;
		isRepeat: boolean;
		progress: number;
	};
}
