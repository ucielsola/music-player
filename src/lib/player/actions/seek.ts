import { get } from "svelte/store"
import { playerStore } from "../playerStore"

export const seek = (target: number) => {
    const { howlerInstance } = get(playerStore)

    howlerInstance?.seek(target)
}
export default seek