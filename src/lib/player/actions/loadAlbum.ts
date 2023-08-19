import getAlbum from '$lib/api/getAlbum';
import { playerStore } from '$lib/player/playerStore';

const loadAlbum = async () => {
	playerStore.update((state) => ({
		...state,
		album: undefined,
		loaded: false
	}));

	try {
		const album = await getAlbum();

		playerStore.update((state) => ({
			...state,
			album,
			loaded: true
		}));
	} catch (error) {
		console.error(error);
	}
};

export default loadAlbum;
