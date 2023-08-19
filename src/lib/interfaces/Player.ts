import type { Album } from '$lib/interfaces/Album';
import type { Howl } from 'howler';
import type { Track } from './Track';

export interface Player {
	loaded: boolean;
	album?: Album;
	currentTrack?: Track;
	howlerInstance?: Howl;
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
