import { playerStore } from '$lib/player/playerStore';

const toggleMute = () => {
	playerStore.update((state) => ({
		...state,
		controls: { ...state.controls, isMute: !state.controls.isMute }
	}));
};

export default toggleMute;
