export function splitConstants(globalConstantsMultiline: string): { [key: string]: string } {
  const lines = globalConstantsMultiline.split('\n');
  var retArr: { [key: string]: string } = {};
  for (const line of lines) {
    // trim the line
    const constant = line.trim();
    if (!constant) {
      continue;
    }
    // skip if it doesn't contain "="
    if (!constant.includes('=')) {
      continue;
    }
    // split only first "=" to allow values with "=" in them
    const [name, ...value] = constant.split('=');
    retArr[name.trim()] = value.join('=').trim();
  }
  return retArr;
}
