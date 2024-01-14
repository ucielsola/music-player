import { get } from 'svelte/store';

import { playerStore } from '$lib/player/playerStore';

import { fadeOut, createNewHowlerInstance } from '$lib/player/actions';

import type { Track } from '$lib/interfaces';

const playTrack = async (track: Track) => {
    const { album, howlerInstance } = get(playerStore)

    if (!album?.tracklist.length) return

    fadeOut()

    howlerInstance?.once('fade', () => {

        createNewHowlerInstance(track)

        const newHowlerInstance = get(playerStore).howlerInstance
        return newHowlerInstance?.play()
    })
};

export default playTrack;
