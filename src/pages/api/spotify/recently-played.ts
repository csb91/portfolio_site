import { type NextRequest } from "next/server";
import { getRecentlyPlayed } from "@/lib/spotify";

export const config = {
  runtime: 'edge'
};

export default async function handler(req: NextRequest) {
  const response = await getRecentlyPlayed();
  const { items } = await response.json();

  const tracks = items.slice(0,10).map((track) => ({
    artist: track.track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.track.external_urls.spotify,
    title: track.track.name,
    album: track.track.album.name,
    albumImageUrl: track.track.album.images[1].url
  }));

  return new Response(JSON.stringify({ tracks }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
    }
  })
}