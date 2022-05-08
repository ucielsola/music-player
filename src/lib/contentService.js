// api https://api-sa-east-1.graphcms.com/v2/cl2wb8fn61q2p01wbhuk6ggs4/master

import { get, readable, writable } from 'svelte/store';
import { GraphQLClient } from 'graphql-request';
const cms = new GraphQLClient(
	'https://api-sa-east-1.graphcms.com/v2/cl2wb8fn61q2p01wbhuk6ggs4/master'
);

const query = `
query Album {
  album(where: {id: "cl2wbh6k54m4s0bloufabj4ek"}) {
      artist
      title
      cover {
        url
      }
      back {
        url
      }
      songs {
        title
        duration
        file {
          url
        }
      }
    }
} `;

export let album = writable('');

export const getData = async () => {
	const res = await cms.request(query);
	album.set(await res.album);

	return new Promise((res, rej) => {
		if (get(album)) return res();
		return rej((err) => alert(err));
	});
};
