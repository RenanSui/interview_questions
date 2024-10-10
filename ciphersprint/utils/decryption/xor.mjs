import { hexDecode, hexEncode } from "../hex.mjs"

export const decryptWithXor = (encryptedPath, key) => {
  const hexString = encryptedPath.replace('task_', '')

  const decoded = hexDecode(hexString)
  const decrypted = xorDecrypt(decoded, key)
  const encoded = hexEncode(decrypted)

  return encoded
}


export function xorDecrypt(encrypted, key) {
  let decrypted = ''
  for (let i = 0; i < encrypted.length; i++) {
    decrypted += String.fromCharCode(encrypted.charCodeAt(i) ^ key.charCodeAt(i % key.length))
  }
  return decrypted
}
