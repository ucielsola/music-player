import type { Album } from '$lib/interfaces';
import { GraphQLClient } from 'graphql-request';

type QueryResponse = {
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

const cms = new GraphQLClient(
	'https://api-sa-east-1.graphcms.com/v2/cl2wb8fn61q2p01wbhuk6ggs4/master'
);

const query = `
query Album {
  album(where: {id: "cl2wbh6k54m4s0bloufabj4ek"}) {
      back {
        url
      }
      backPlaceholder {
        url
      }
      cover {
        url
      }
      coverPlaceholder {
        url
      }
      platformLinks
      songs {
        title
        id
        file {
          url
        }
        duration
      }
    }
} `;

const getAlbum = async (): Promise<Album> => {
	const response: QueryResponse = await cms.request(query);

	const album: Album = {
		title: response.album.title,
		artist: response.album.artist,
		cover: response.album.cover.url,
		coverPlaceholder: response.album.coverPlaceholder.url,
		back: response.album.back.url,
		backPlaceholder: response.album.backPlaceholder.url,
		platformLinks: response.album.platformLinks,
		tracklist: response.album.songs.map((song) => ({
			title: song.title,
			id: song.id,
			file: song.file.url,
			duration: song.duration
		})),
		releaseDate: response.album.releaseDate
	};

	return album;
};

export default getAlbum;
