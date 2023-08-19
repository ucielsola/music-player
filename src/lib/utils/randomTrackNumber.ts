export const randomTrackNumber = (albumLength: number = 0): number => {
	if (!albumLength) return 0;
	return Math.floor(Math.random() * (albumLength + 1));
};
