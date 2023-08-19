export type QueryResponse = {
    album: {
        title: string;
        artist: string;
        cover: {
            url: string;
        };
        coverPlaceholder: {
            url: string;
        };
        back: {
            url: string;
        };
        backPlaceholder: {
            url: string;
        };
        platformLinks: Array<{
            url: string;
            name: string;
            label: string;
        }>;
        songs: Array<{
            title: string;
            id: string;
            file: {
                url: string;
            };
            duration: number;
        }>;
        releaseDate: string;
    };
};