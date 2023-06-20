import { playerStore } from '$lib/player/playerStore';

const setCurrentTrack = (trackIndex: number) => {
	playerStore.update((state) => ({
		...state,
		currentTrack: trackIndex
	}));
};

export default setCurrentTrack;
