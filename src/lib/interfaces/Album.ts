import type { Track } from '$lib/interfaces/Track';
import type { CoverImage } from '$lib/interfaces/CoverImage';
import type { Link } from '$lib/interfaces/Link';

export interface Album {
	title: string;
	artist: string;
	links: Link[];
	images: CoverImage[]
	tracklist: Track[];
	releaseDate: string;
}
