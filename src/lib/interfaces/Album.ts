import type { CoverImage } from '$lib/interfaces/CoverImage';
import type { Link, Track, Meta } from '$lib/interfaces';

export interface Album {
	title: string;
	artist: string;
	links: Link[];
	images: CoverImage[]
	tracklist: Track[];
	releaseDate: string;
	albumMeta: Meta[][]
}
