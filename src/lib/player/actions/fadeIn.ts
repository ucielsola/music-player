import { get } from "svelte/store"
import { playerStore } from "$lib/player/playerStore"

export const fadeIn = (): Promise<boolean> | undefined => {
    const { howlerInstance } = get(playerStore)

    if (!howlerInstance) return
    const fadeDuration = 200
    const currentVolume = howlerInstance.volume()
    howlerInstance.fade(currentVolume, 1.0, fadeDuration)



    return new Promise(resolve => setTimeout(resolve, fadeDuration));
}

export default fadeIn