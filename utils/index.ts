export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
export function excludePath(navigation: any[], exclude: string[]) {
  return navigation.filter((item) => {
    if (exclude.includes(item._path)) {
      return false;
    }
    return true;
  });
}
export function parsePath(path: string) {
  if (!path) return [];

  // 去掉前后的斜杠，然后分割路径
  return path.replace(/^\/|\/$/g, "").split("/");
}
