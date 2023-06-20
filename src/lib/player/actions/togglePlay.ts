import { playerStore } from '$lib/player/playerStore';

const togglePlay = () => {
	playerStore.update((state) => ({
		...state,
		controls: { ...state.controls, isPlaying: !state.controls.isPlaying }
	}));
};

export default togglePlay;
