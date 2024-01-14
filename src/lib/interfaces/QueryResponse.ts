export type QueryResponse = {
    album: {
        title: string;
        artist: string;
        links: QueryResponseLink[];
        songs: QueryResponseSong[];
        releaseDate: string;
        albumImages: QueryResponseAlbumImage[]
        albumMeta: QueryResponseMeta[]
    };
};

export type QueryResponseMeta = {
    id: string;
    meta: {
        id: string;
        name: string;
        property: string;
        content: string;
    }[]
}



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
    image: {
        altText: string
        id: string
        url: string
        position: number
    }
}