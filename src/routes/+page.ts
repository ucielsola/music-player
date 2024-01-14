import type { Album } from "$lib/interfaces";
import { hydrateAlbum } from "$lib/player/actions/hydrateAlbum";

export async function load({ data }: { data: Album }) {
    hydrateAlbum(data);
}