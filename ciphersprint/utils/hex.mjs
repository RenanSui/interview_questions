export const removeNonHexCharacters = (input) => {
  return input.replace('task_', '').replace(/[^0-9a-f]/gi, '')
}

export const hexDecode = (hex) => {
  let result = '';
  for (let i = 0; i < hex.length; i += 2) {
    result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return result;
}

export const hexEncode = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16).padStart(2, '0');
  }
  return result;
}
