import { useEffect, useState } from 'react';
import { getMedia } from '../api/media';

export const useSound = (word: string) => {
    const [media, setMedia] = useState<HTMLAudioElement>(new Audio());
    const [isLoadedSound, setLoadedSound] = useState(false);
    const [isPlayingSound, setPlayingSound] = useState(false);

    useEffect(() => {
        getMedia(word)
            .then(media => {
                setMedia(new Audio(media.data));
                setLoadedSound(true);
            })
    }, [word]);

    const handlePlay = () => {
        if (!isPlayingSound) {
            setPlayingSound(true);

            media
                .play()
                .then(() => {
                    setTimeout(() => {
                        setPlayingSound(false);
                    }, 1000)
                }).catch(() => {
                setPlayingSound(false);
            })
        }
    }

    return {
        handlePlay,
        isPlayingSound,
        isLoadedSound,
    }
}