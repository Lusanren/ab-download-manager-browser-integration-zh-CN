import {getFileNameFromHeader} from "~/utils/ExtractFileNameFromHeader";
import {getContentDisposition} from "~/utils/HeaderUtils";

export function getFileExtension(name: string): string {
    return name
        .split(".")
        .pop() ?? name
}

export function getFileNameWithoutExtension(name: string): string {
    if (!name) return name;
    const dotIndex = name.lastIndexOf('.');
    // ignore a leading dot (e.g. ".env") by requiring dotIndex > 0
    return dotIndex > 0 ? name.slice(0, dotIndex) : name;
}

export function getFileFromUrl(url: string): string | null {
    try {
        return new URL(url, "http://dummy.base")
            .pathname.split("/").pop() ?? null
    } catch (error) {
        return null;
    }
}

export function getFileFromHeaders(responseHeaders: Headers) {
    const value = getContentDisposition(responseHeaders)
    if (value == null) return null
    return getFileNameFromHeader(value)
}