import type { Album, Meta } from '$lib/interfaces';
import type { Howl } from 'howler';
import type { Track } from './Track';

export interface Player {
	loaded: boolean;
	album?: Album;
	albumMeta: Meta[][];
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
