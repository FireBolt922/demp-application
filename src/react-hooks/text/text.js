export function renderTemplate(templateString, obj) {
  const keys = Object.keys(obj);
  const func = Function(...keys, `return \`${templateString}\`;`);
  return func(...keys.map((k) => obj[k]));
}
