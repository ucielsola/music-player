import { get } from "svelte/store"
import { playerStore } from "$lib/player/playerStore"

export const fadeOut = (): Promise<boolean> | undefined => {
    const { howlerInstance } = get(playerStore)

    if (!howlerInstance) return
    const fadeDuration = 150
    const currentVolume = howlerInstance.volume()
    howlerInstance.fade(currentVolume, 0, fadeDuration)

    return new Promise(resolve => setTimeout(resolve, fadeDuration));
}

export default fadeOut