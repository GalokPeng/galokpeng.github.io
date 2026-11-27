import manifest from "./manifest.json";

export const SITE = manifest.site;
export const FILES = manifest.files;
export const FILE_IDS = Object.keys(FILES);
export const CHUNK = 20 * 1024 * 1024;
export const chunkKey = (file, index) => `sha256/${file.sha}/${index}`;
export const encodedName = (id) =>
  encodeURIComponent(FILES[id].name).replace(/[!'()*]/g, c =>
    "%" + c.charCodeAt(0).toString(16).toUpperCase());
