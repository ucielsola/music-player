import { get } from 'svelte/store';
import { playerStore } from '$lib/player/playerStore';
import { createNewHowlerInstance, fadeOut, fadeIn } from '$lib/player/actions';

const togglePlay = async () => {
	const { loaded, controls, album, currentTrack, howlerInstance } = get(playerStore)

	if (!loaded) return
	if (!album?.tracklist.length) return

	if (!howlerInstance && !currentTrack) {
		const track = album.tracklist[0]
		createNewHowlerInstance(track)

		const newHowlerInstance = get(playerStore).howlerInstance

		return newHowlerInstance?.play()
	}

	if (howlerInstance && currentTrack) {
		if (controls.isPlaying) {
			await fadeOut()
			return howlerInstance.pause()
		} else {
			await fadeIn()
			return howlerInstance.play()
		}
	}
};

export default togglePlay;
