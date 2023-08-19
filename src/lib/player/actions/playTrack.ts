import { get } from 'svelte/store';

import { playerStore } from '$lib/player/playerStore';

import { fadeOut, createNewHowlerInstance } from '$lib/player/actions';

import type { Track } from '$lib/interfaces';

const playTrack = async (track: Track) => {
    const { album } = get(playerStore)

    if (!album?.tracklist.length) return

    await fadeOut()

    createNewHowlerInstance(track)

    const newHowlerInstance = get(playerStore).howlerInstance
    return newHowlerInstance?.play()
};

export default playTrack;
