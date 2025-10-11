
export interface DownloadRequestItem {
    link: string
    downloadPage: string | null
    headers: DownloadRequestHeaders | null
    description: string | null,
    suggestedName: string | null,
    type: "hls" | "http"
}
export type DownloadRequestHeaders = Record<string, string>
