export function tagListTransformer(resp) {
  if (!resp) {
    return [];
  }
  return resp.results.map((data) => {
    return {
      id: data.id,
      name: data.name,
    };
  });
}
