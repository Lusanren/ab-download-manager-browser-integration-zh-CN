import _ from "lodash";

export function getContentLength(headers: Headers): number | null {
    const x = headers.get("content-length")
    if (x == null) {
        return null
    }
    return _.toInteger(x)
}

export function getContentType(headers: Headers): string | null {
    return headers.get("content-type")
}

export function getContentDisposition(headers: Headers): string | null {
    return headers.get("content-disposition")
}