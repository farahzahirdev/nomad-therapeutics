"use client";

import Image from "next/image";
import { useState } from "react";
import { TEAM_VIDEOS } from "@/lib/constants";

export default function MeetTeam() {
  return (
    <section id="meet-the-team" className="section-padding scroll-mt-28">
      <div className="container-main">
        <div className="nm-section-copy mx-auto max-w-2xl text-center">
          <p className="section-label section-label-center">Watch</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Meet the team, and see what a home visit looks like
          </h2>
        </div>

        <div className="nm-videos mt-12">
          {TEAM_VIDEOS.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  id,
  title,
  caption,
}: {
  id: string;
  title: string;
  caption: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return (
    <figure className="nm-video">
      <div className="nm-video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={thumb}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
            <button
              type="button"
              className="nm-video-play"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${title}`}
            >
              <span className="nm-video-play-icon" aria-hidden />
            </button>
          </>
        )}
      </div>
      <figcaption className="nm-video-cap">{caption}</figcaption>
    </figure>
  );
}
