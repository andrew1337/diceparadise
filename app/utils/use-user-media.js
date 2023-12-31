import {useEffect, useState} from "react";

const useUserMedia = (constraints) => {
    const [stream, setStream] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (stream) return;
        let didCancel = false;

        const getUserMedia = async () => {
            if (!didCancel) {
                try {
                    setStream(await navigator.mediaDevices.getUserMedia(constraints));
                } catch (e) {
                    setError(e);
                }
            }
        };
        const cancel = () => {
            didCancel = true;
            if (!stream) return;
            if (stream?.getVideoTracks) {
                stream.getVideoTracks().map((track) => track.stop());
            }
            if (stream?.getAudioTracks) {
                stream.getAudioTracks().map((track) => track.stop());
            }
            if (stream?.stop) {
                stream.stop();
            }
            // eslint-disable-next-line consistent-return
            return undefined;
        };
        getUserMedia();
        // eslint-disable-next-line consistent-return
        return cancel;
    }, [constraints, stream, error]);
    return {stream, error};
};

export default useUserMedia;
