import { get } from 'svelte/store';
import { playerStore } from '$lib/player/playerStore';
import { playNextTrack } from '$lib/player/actions';
import { showToast } from '$lib/components/toasts/ToastWrapper.svelte';

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

        const { currentTrack } = get(playerStore);
        showToast({ text: currentTrack?.title || "", type: 'success' });
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
