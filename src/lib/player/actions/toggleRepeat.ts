import { playerStore } from '$lib/player/playerStore';

const toggleRepeat = () => {
	playerStore.update((state) => ({
		...state,
		controls: { ...state.controls, isRepeat: !state.controls.isRepeat, isShuffle: false }
	}));
};

export default toggleRepeat;
