import { get } from 'svelte/store';

import { playerStore } from '$lib/player/playerStore';

import { createNewHowlerInstance } from '$lib/player/actions/createNewHowlerInstance';

import type { Track } from '$lib/interfaces';

const playPrevTrack = () => {
    const { controls, currentTrack, howlerInstance, album } = get(playerStore)

    if (!currentTrack) return
    if (!album?.tracklist.length) return

    if (controls.isRepeat) {
        createNewHowlerInstance(currentTrack)
    } else {
        let currentTrackIndex = album.tracklist.findIndex((track: Track) => track.id === currentTrack.id)

        if (currentTrackIndex === -1) currentTrackIndex = 1

        const prevTrack: Track = album?.tracklist[currentTrackIndex - 1]

        createNewHowlerInstance(prevTrack)
    }

    const newHowlerInstance = get(playerStore).howlerInstance
    return newHowlerInstance?.play()
};

export default playPrevTrack;
