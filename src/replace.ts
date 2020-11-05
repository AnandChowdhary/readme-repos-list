export const replaceContents = (start: string, end: string, readme: string, contents: string) => {
  if (!readme.includes(start) || !readme.includes(end))
    throw new Error("Starting and ending string not found");

  const startString = readme.split(start)[0];
  const endString = readme.split(end)[1];

  return `${startString}${start}${contents}${end}${endString}`;
};
