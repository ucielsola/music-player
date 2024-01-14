import { get } from "svelte/store"
import { playerStore } from "$lib/player/playerStore"

export const fadeOut = () => {
    const { howlerInstance } = get(playerStore)

    if (!howlerInstance) return
    const fadeDuration = 150
    const currentVolume = howlerInstance.volume()
    howlerInstance.fade(currentVolume, 0, fadeDuration)
}

export default fadeOut