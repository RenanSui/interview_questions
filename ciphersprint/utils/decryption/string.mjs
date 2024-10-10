export const decryptEncryptedPath = (encryptedPath, addedValue) => {
  let path = encryptedPath.replace('task_', '')
  let decryptedPath = ''

  for (let i = 0; i < path.length; i++) {
    const charCode = path.charCodeAt(i)
    const decryptedChar = String.fromCharCode(charCode - addedValue)
    decryptedPath += decryptedChar
  }

  return decryptedPath
}
