import { get } from 'svelte/store';

import { playerStore } from '$lib/player/playerStore';

import { fadeOut, createNewHowlerInstance } from '$lib/player/actions';

import type { Track } from '$lib/interfaces';
import { randomTrackNumber } from '$lib/utils/randomTrackNumber';

const playNextTrack = async () => {
    const { controls, currentTrack, howlerInstance, album } = get(playerStore);

    if (!howlerInstance) return;
    if (!currentTrack) return;
    if (!album?.tracklist.length) return;

    await fadeOut();

    if (controls.isRepeat) {
        createNewHowlerInstance(currentTrack);
    }

    const currentTrackIndex = album.tracklist.findIndex(
        (track: Track) => track.id === currentTrack.id
    );

    if (controls.isShuffle) {
        let randomTrackIndex = randomTrackNumber(album.tracklist.length);

        while (randomTrackIndex === currentTrackIndex) {
            randomTrackIndex = randomTrackNumber(album.tracklist.length);
        }

        const randomTrack: Track = album?.tracklist[randomTrackIndex];

        createNewHowlerInstance(randomTrack);
    } else {
        const isLast = currentTrackIndex === album?.tracklist.length - 1;

        const nextTrackIndex = isLast ? 0 : currentTrackIndex + 1;

        createNewHowlerInstance(album?.tracklist[nextTrackIndex]);
    }

    const newHowlerInstance = get(playerStore).howlerInstance;
    return newHowlerInstance?.play();
};

export default playNextTrack;
