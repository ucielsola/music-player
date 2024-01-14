import { GraphQLClient } from 'graphql-request';

import type { Album, QueryResponse, QueryResponseAlbumImage, QueryResponseLink, QueryResponseSong } from '$lib/interfaces';

const getAlbum = async ({ url, albumId }: { url: string, albumId: string }): Promise<Album> => {
  const cms = new GraphQLClient(url);

  const query = `
 query Album {
  album(where: {id: "${albumId}"}) {
    title
    artist
    albumImages {
      image {
        altText
        url
      }
    }
    songs {
      id
      title
      duration
      file {
        url
      }
    }
    links {
      label
      url
      name
    }
  }
} `;

  const response: QueryResponse = await cms.request(query);

  const album: Album = {
    title: response.album.title,
    artist: response.album.artist,
    images: response.album.albumImages.map(mapAlbumImages).sort((a, b) => a.position - b.position),
    links: response.album.links.map(mapLinks).sort((a, b) => a.label.localeCompare(b.label)),
    tracklist: response.album.songs.map(mapSongs).sort((a, b) => a.position - b.position),
    releaseDate: response.album.releaseDate
  };

  return album;
};

export default getAlbum;


const mapAlbumImages = (albumImages: QueryResponseAlbumImage) => ({
  url: albumImages.image.url,
  altText: albumImages.image.altText,
  position: albumImages.image.position
})

const mapLinks = (links: QueryResponseLink) => ({
  url: links.url,
  name: links.name,
  label: links.label
})

const mapSongs = (song: QueryResponseSong) => ({
  title: song.title,
  id: song.id,
  src: song.file.url,
  position: song.position,
  duration: song.duration
})
