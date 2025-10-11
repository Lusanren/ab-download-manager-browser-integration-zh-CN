import {MasterPlaylist, MediaPlaylist} from "hls-parser/types";
import HLS from "hls-parser";

export function parseHLSSilently() {
    HLS.setOptions({
        silent: true,
    })
}

export function isPlayListEncrypted(playlist: MasterPlaylist) {
    return playlist
        .sessionKeyList
        .some(key => key.method && key.method !== "NONE");
}

export function isMediaPlayListEncrypted(playlist: MediaPlaylist) {
    return playlist.segments.some(
        segment =>
            segment.key &&
            segment.key.method &&
            segment.key.method !== "NONE"
    );
}

export const HLS_CONTENT_TYPES = [
    "application/x-mpegurl",
    "application/vnd.apple.mpegurl",
]
export const MAX_HLS_PLAYLIST_SIZE = 2 * 1024 * 1024 // 2MiB