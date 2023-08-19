import { get } from "svelte/store"
import { playerStore } from "$lib/player/playerStore"

export const seek = (target: number) => {
    const { howlerInstance } = get(playerStore)

    if (howlerInstance) {
        const isBeyondDuration = target > howlerInstance?.duration()

        const seekValue = isBeyondDuration ? howlerInstance?.duration() - 0.5 : target < 0 ? 0 : target;

        howlerInstance?.seek(seekValue)
    }
}
export default seek