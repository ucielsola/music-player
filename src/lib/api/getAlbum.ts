import { GraphQLClient } from 'graphql-request';

import type { Album, QueryResponse } from '$lib/interfaces';

const getAlbum = async ({ url, albumId }: { url: string, albumId: string }): Promise<Album> => {
  const cms = new GraphQLClient(url);

  const query = `
  query Album {
    album(where: {id: "${albumId}"}) {
      title
      artist
      releaseDate
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
      src: song.file.url,
      duration: song.duration
    })),
    releaseDate: response.album.releaseDate
  };

  return album;
};

export default getAlbum;
