export const replaceContents = (start: string, end: string, readme: string, contents: string) => {
  if (!readme.includes(start) || !readme.includes(end)) {
    console.log("Starting and ending string not found");
    return readme;
  }

  const startString = readme.split(start)[0];
  const endString = readme.split(end)[1];

  return `${startString}${start}${contents}${end}${endString}`;
};
