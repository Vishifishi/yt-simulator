'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function VideoPlayer() {
  const searchParams = useSearchParams();
  const videoPrefix = 'https://storage.googleapis.com/raul-processed-yt-videos/';
  const videoSrc = searchParams.get('v');

  if (!videoSrc) {
    return <p>No video selected.</p>;
  }

  return <video controls src={`${videoPrefix}${videoSrc}`} />;
}

export default function Watch() {
  return (
    <div className="watch-page">
      <h1>Watch Page</h1>
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoPlayer />
      </Suspense>
    </div>
  );
}
