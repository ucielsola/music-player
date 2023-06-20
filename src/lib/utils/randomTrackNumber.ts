const randomTrackNumber = (albumLength?: number): number => {
	if (!albumLength) return 0;
	return Math.floor(Math.random() * (albumLength + 1));
};
