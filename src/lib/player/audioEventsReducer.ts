import { playerStore } from '$lib/player/playerStore';
import { get } from 'svelte/store';
import { togglePlay, setCurrentTrack } from '$lib/player/actions';

const audioEventsReducer = (e: Event): void => {
	const { currentTrack, album, controls } = get(playerStore);
	switch (e.type) {
		case 'ended':
			const isLastTrack = album?.tracklist.length === currentTrack;

			if (isLastTrack) {
				if (!controls.isRepeat && !controls.isShuffle) {
					togglePlay();
					break;
				}

				let nextTrackIndex = controls.isShuffle ? randomTrackNumber(album?.tracklist.length) : 0;

				setCurrentTrack(nextTrackIndex);
				break;
			}

			if (controls.isRepeat) {
				setCurrentTrack(currentTrack);
				break;
			}

			if (controls.isShuffle) {
				const nextTrackIndex = randomTrackNumber(album?.tracklist.length);
				setCurrentTrack(nextTrackIndex);
				break;
			}

			setCurrentTrack(currentTrack + 1);

			break;
		case 'error':
			if (controls.isPlaying) {
				togglePlay();
				break;
			}
			break;
		case 'play':
			togglePlay();
			break;
		case 'playing':
			break;
		case 'pause':
			togglePlay();
			break;
		case 'timeupdate':
			// playerState.set({
			// 	...get(playerState),
			// 	currentTime: audio.currentTime * 1000,
			// 	progress: currentTime / trackLength
			// });
			break;
		case 'canplay':
			break;
	}
};

export default audioEventsReducer;
