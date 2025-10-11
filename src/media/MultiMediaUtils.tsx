// Mapping of common media content types to file extensions
const CONTENT_TYPE_TO_EXTENSION: Record<string, string> = {
    // Video
    "video/mp4": "mp4",
    "video/webm": "webm",
    "video/ogg": "ogv",
    "video/quicktime": "mov",
    "video/x-msvideo": "avi",
    "video/x-flv": "flv",
    "video/mpeg": "mpeg",

    // Streaming / segments
    // "video/MP2T": "ts",      // HLS segments
    // "application/vnd.apple.mpegurl": "m3u8", // HLS playlist
    // "application/x-mpegURL": "m3u8",         // HLS playlist
    // "video/mp2t": "ts",       // lowercase variant

    // Audio
    "audio/mpeg": "mp3",
    "audio/ogg": "ogg",
    "audio/wav": "wav",
    "audio/webm": "webm",
    "audio/mp4": "m4a",
    "audio/aac": "aac",
    "audio/flac": "flac",
    "audio/x-flac": "flac"

    // Streaming / segments (ignored)
    // "audio/ts": "ts",
    // "audio/m4s": "m4s"
};

/**
 * Get file extension from content type.
 * Returns extension without dot, or null if unknown.
 */
export function getExtensionFromContentType(contentType: string): string | null {
    if (!contentType) return null;
    const type = contentType.toLowerCase().split(";")[0].trim();
    return CONTENT_TYPE_TO_EXTENSION[type] || null;
}
