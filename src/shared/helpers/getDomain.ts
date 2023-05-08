export const getDomain = (url: string): string|null => {
  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
  const match = url.match(regex);
  const domain = match && match[1];
  return domain
}