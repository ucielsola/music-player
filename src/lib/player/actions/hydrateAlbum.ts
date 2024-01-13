import type { Album } from "$lib/interfaces";
import { playerStore } from "$lib/player/playerStore"

export const hydrateAlbum = (album: Album) => {
    if (album === undefined) return

    playerStore.update((state) => ({
        ...state,
        album,
        loaded: true
    }));
}