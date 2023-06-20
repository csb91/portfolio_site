import { type NextRequest } from "next/server";
import { getRecentlyPlayed } from "@/lib/spotify";
import { Artist, Track } from "@/lib/interfaces";

export const config = {
  runtime: 'edge'
};

export default async function handler(req: NextRequest) {
  const response = await getRecentlyPlayed();
  const { items } = await response.json();

  const tracks = items.slice(0,5).map((item: any) => ({
    artist: item.track.artists.map((_artist: Artist) => _artist.name).join(', '),
    songUrl: item.track.external_urls.spotify,
    title: item.track.name,
    album: item.track.album.name,
    albumImageUrl: item.track.album.images[1].url
  }));

  return new Response(JSON.stringify({ tracks }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
    }
  })
}