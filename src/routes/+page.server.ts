
import { ALBUM_ID, CMS_URL } from '$env/static/private';

import getAlbum from '$lib/api/getAlbum';

export async function load() {
    try {
        return await getAlbum({ url: CMS_URL, albumId: ALBUM_ID });
    } catch (error) {
        console.error(error);
    }
}