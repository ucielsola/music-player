import addEventListeners from '$lib/player/actions/addEventListeners';

const createAudioContext = () => {
	const audioElement = new Audio();

	addEventListeners(audioElement);
};

export default createAudioContext;
