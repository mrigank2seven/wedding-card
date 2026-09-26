import { useEffect, useRef, useState } from "react";
import { site } from "../data/site.config";
import { useTranslation } from "../lib/useTranslation";
import { asset } from "../lib/asset";
import { Icon } from "./Icon";

const SKIP_INTRO_SECONDS = 20;

export function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { music } = site;
  const t = useTranslation();

  const playAudio = (skipIntro = true) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (skipIntro) {
      audio.currentTime = SKIP_INTRO_SECONDS;
    }
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleFirstInteraction = () => {
      playAudio(true);
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    if (audio.readyState >= 2) {
      playAudio(true);
    } else {
      audio.addEventListener("canplay", () => playAudio(true), { once: true });
      document.addEventListener("click", handleFirstInteraction, { once: true });
      document.addEventListener("touchstart", handleFirstInteraction, { once: true });
      return () => {
        audio.removeEventListener("canplay", () => playAudio(true));
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("touchstart", handleFirstInteraction);
      };
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

    playAudio(false);
  }

  const handleAudioError = () => {
    setPlaying(false);
  };

  return (
    <div className="fixed right-4 bottom-24 z-40">
      <audio
        ref={audioRef}
        src={asset(music.src)}
        preload="auto"
        loop
        crossOrigin="anonymous"
        onError={handleAudioError}
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
