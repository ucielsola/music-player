import { playerStore } from '$lib/player/playerStore';

const toggleShuffle = () => {
	playerStore.update((state) => ({
		...state,
		controls: { ...state.controls, isShuffle: !state.controls.isShuffle, isRepeat: false }
	}));
};

export default toggleShuffle;
