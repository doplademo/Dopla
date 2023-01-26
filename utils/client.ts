import { Screen } from "~/types/client";

const DESKTOP_WIDTH = 1024;

export function getScreen(): Screen {
    if(process.client) {
        const width = window.innerWidth;
        return width >= DESKTOP_WIDTH ? 'desktop' : 'mobile';
    }

    return null;
}