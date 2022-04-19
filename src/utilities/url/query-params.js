export default function stringifyUrlParam(data) {
  return Object.entries(data)
    .map((e) => e.join('='))
    .join('&');
}
