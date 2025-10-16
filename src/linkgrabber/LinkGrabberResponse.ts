export type InterceptedMediaType = "hls" | "http";
export type InterceptedMediaResult = {
    type: "media",
    mediaType: InterceptedMediaType,
    url: string,
    requestHeaders: Headers,
    responseHeaders: Headers,
}
