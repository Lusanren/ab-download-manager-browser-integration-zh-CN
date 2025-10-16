import {BrowserTarget, getExtensionBrowserTarget, isFirefox} from "~/utils/ExtensionInfo";
import {DownloadLinkInterceptor} from "~/linkgrabber/DownloadLinkInterceptor";
import {Manifest2DownloadLinkInterceptor} from "~/linkgrabber/Manifest2DownloadLinkInterceptor";
import {run} from "~/utils/ScopeFunctions";
import {Manifest3DownloadLinkInterceptor} from "~/linkgrabber/Manifest3DownloadLinkInterceptor";
import {MediaRegistry} from "~/media/MediaRegistry";

export function redirectDownloadLinksToMe() {
    const downloadMediaRegistry = new MediaRegistry()
    downloadMediaRegistry.boot()
    const downloadLinkInterceptor: DownloadLinkInterceptor = run(() => {
        switch (getExtensionBrowserTarget()) {
            case BrowserTarget.chrome:
                return new Manifest3DownloadLinkInterceptor()
            case BrowserTarget.firefox:
                return new Manifest2DownloadLinkInterceptor()
        }
    })
    downloadLinkInterceptor.redirectDownloadsToExtension()
    downloadLinkInterceptor.setOnMediaDetectedListener(downloadMediaRegistry)
}