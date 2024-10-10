import { decode as decodeMsgPack } from '@msgpack/msgpack';

export const handleBase64Decryption = (encryptedPath) => {
  return atob(encryptedPath.replace('task_', ''))
}

export const handleMessagepackBase64Decryption = (base64Encoded, encryptedPath) => {
  const decodedBase64 = handleBase64Decryption(base64Encoded)
  const byteArray = Uint8Array.from(decodedBase64, c => c.charCodeAt(0))
  const deserializedData = decodeMsgPack(byteArray)

  let scrambledArray = encryptedPath.replace('task_', '').split('')
  let unscrambledArray = new Array(scrambledArray.length)

  deserializedData.forEach((pos, i) => {
    unscrambledArray[pos] = scrambledArray[i]
  })

  const unscrambledPath = unscrambledArray.join('')

  return unscrambledPath
}