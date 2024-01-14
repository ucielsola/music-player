export type QueryResponse = {
    album: {
        title: string;
        artist: string;
        links: QueryResponseLink[];
        songs: QueryResponseSong[];
        releaseDate: string;
        albumImages: QueryResponseAlbumImage[]
    };
};

export type QueryResponseLink = {
    url: string;
    name: string;
    label: string;
}

export type QueryResponseSong = {
    title: string;
    position: number;
    id: string;
    file: {
        url: string;
    };
    duration: number;
}

export type QueryResponseAlbumImage = {
    id: string,
    image: {
        altText: string
        id: string
        url: string
        position: number
    }
}