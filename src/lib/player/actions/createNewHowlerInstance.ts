import { Howl } from 'howler';
import { playerStore } from '$lib/player/playerStore';
import type { Track } from '$lib/interfaces';
import { get } from 'svelte/store';

export const createNewHowlerInstance = (track: Track) => {
    const { howlerInstance } = get(playerStore)

    if (howlerInstance) howlerInstance.unload()

    playerStore.update(state => ({
        ...state,
        controls: {
            ...state.controls,
            isPlaying: false,
        }
    }))

    const newHowlerInstance = new Howl({
        src: [track.src],
        html5: true,
    })

    newHowlerInstance.load()

    playerStore.update(state => ({
        ...state,
        currentTrack: track,
        howlerInstance: newHowlerInstance,
    }))
}

export default createNewHowlerInstance;