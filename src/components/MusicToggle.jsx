import { useEffect, useRef, useState } from "react";
import { site } from "../data/site.config";
import { useTranslation } from "../lib/useTranslation";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

export function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { music } = site;
  const t = useTranslation();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = () => {
      audio.currentTime = 20;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => setPlaying(true))
          .catch((error) => {
            console.log("Autoplay failed - browser policy restricts autoplay:", error.name);
            setPlaying(false);
          });
      }
    };

    if (audio.readyState >= 2) {
      playAudio();
    } else {
      audio.addEventListener("canplay", playAudio, { once: true });
      return () => audio.removeEventListener("canplay", playAudio);
    }
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.currentTime = 20;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => setPlaying(true))
        .catch((error) => {
          console.error("Play failed:", error);
          setPlaying(false);
        });
    }
  }

  return (
    <div className="fixed right-4 bottom-24 z-40">
      <audio
        ref={audioRef}
        src={asset(music.src)}
        preload="auto"
        loop
        crossOrigin="anonymous"
      />
      <button
        type="button"
        onClick={toggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-page text-accent-deep shadow-md"
        aria-pressed={playing}
        aria-label={playing ? t.pauseMusic : t.playMusic}
      >
        <Icon name={playing ? "pause" : "music"} />
      </button>
    </div>
  );
}
