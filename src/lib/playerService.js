import { readable, writable, get } from 'svelte/store';
import { album } from './contentService';

const track = (url) => {
	return new Audio(url);
};

export const playing = readable(false, (set) => {
	set(track);
	return () => {};
});

export const Play = (trackNum) => {
	let _album = get(album);

	const url = _album.songs[trackNum].file.url;
	track(url)
		.play()
		.then(() => {});
};
