import {InterceptedMediaResult, InterceptedMediaType} from "~/linkgrabber/LinkGrabberResponse";

export interface OnMediaInterceptedFromRequestListener {
    onMediaDetected(
        tabId: number,
        mediaResult: InterceptedMediaResult,
    ): void
}