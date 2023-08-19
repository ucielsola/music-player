import type { Track } from '$lib/interfaces/Track';

export interface Album {
	title: string;
	artist: string;
	cover: string;
	coverPlaceholder: string;
	back: string;
	backPlaceholder: string;
	platformLinks: Array<{
		url: string;
		name: string;
		label: string;
	}>;
	tracklist: Array<Track>;
	releaseDate: string;
}
