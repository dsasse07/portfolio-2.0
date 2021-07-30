export const convertToRGB = (str: string) => {
  if (!/^#[0-9a-f]{3,6}$/i.test(str)) {
    throw new Error(`Unable to convert ${str} to RGB value. Must begin with #`)
  }
  let hexGroups
  if (str.length === 4) {
    let fullString = str[1] + str[1] + str[2] + str[2] + str[3] + str[3]
    hexGroups = fullString.match(/[0-9a-f]{2}/gi)!
  } else {
    hexGroups = str.match(/[0-9a-f]{2}/gi)!
  }

  const rgb = [
    parseInt(hexGroups[0], 16),
    parseInt(hexGroups[1], 16),
    parseInt(hexGroups[2], 16),
  ]
  return rgb
}
