import { get } from 'svelte/store';
import { playerStore } from '$lib/player/playerStore';
import { playNextTrack } from '$lib/player/actions';

export const setEventHandlers = () => {
    const { howlerInstance } = get(playerStore);

    if (!howlerInstance) return;

    howlerInstance.on('play', () => {
        playerStore.update((state) => ({
            ...state,
            controls: {
                ...state.controls,
                isPlaying: true
            }
        }));
    });

    howlerInstance.on('pause', () => {
        playerStore.update((state) => ({
            ...state,
            controls: {
                ...state.controls,
                isPlaying: false
            }
        }));
    });

    howlerInstance.on('end', () => {
        playerStore.update((state) => ({
            ...state,
            controls: {
                ...state.controls,
                isPlaying: false
            }
        }));

        playNextTrack();
    });
};
