import {DownloadRequestHeaders, DownloadRequestItem} from "~/interfaces/DownloadRequestItem";
import {sendMessage} from "webext-bridge/options";
import * as Configs from "~/configs/Config"

export async function addDownloads(downloadItems: Array<DownloadRequestItem>) {
    if (Configs.getLatestConfig().sendHeaders) {
        const headersOfLinks = await sendMessage("get_headers", downloadItems.map(i => i.link))
        downloadItems = downloadItems.map((value, index) => {
            // some download items might have headers so we use them instead
            return {
                ...value,
                headers: value.headers ?? headersOfLinks[index],
            } as DownloadRequestItem
        })
    } else {
        downloadItems = downloadItems.map((value, index) => {
            return {
                ...value,
                headers: null, // remove headers if user don't want to send headers
            } as DownloadRequestItem
        })
    }
    await sendMessage("add_download", downloadItems, "background")
}