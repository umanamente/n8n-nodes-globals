export function splitConstants(globalConstantsMultiline: string): { [key: string]: string } {

  // Check if the string is a JSON object
  try {
    const jsonObj = JSON.parse(globalConstantsMultiline.trim());
    return jsonObj as { [key: string]: string };
  } catch (e) {
    // Not a JSON object, continue with the old logic
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
}
