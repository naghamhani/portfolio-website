// Prefix asset paths with the build-time basePath so raw <img>/href values
// resolve correctly under a sub-path deploy (e.g. GitHub Pages project site).
const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p: string): string => `${bp}/${String(p).replace(/^\/+/, "")}`;
