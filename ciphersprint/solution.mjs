import {
  decryptEncryptedPath,
  decryptWithXor,
  fetchData,
  getAddedValueAndText,
  handleBase64Decryption,
  handleMessagepackBase64Decryption,
  handleSha256De,
  removeNonHexCharacters
} from "./utils/index.mjs";

const apiUrl = 'https://ciphersprint.pulley.com'

const solution2 = async (encryptedPath = '', encryptionMethod = 'nothing') => {
  if (!encryptedPath || !encryptionMethod) {
    console.log('Invalid inputs:', { encryptedPath, encryptionMethod });
    return null;
  }

  const { addedValue, modifiedText, base64Encoded } = getAddedValueAndText(encryptionMethod);
  let nextUrl = ''
  let data = null

  switch (modifiedText) {
    case 'nothing':
      nextUrl = `${apiUrl}/${encryptedPath}`
      data = await fetchData(nextUrl)
      if (data) await solution2(data.encrypted_path, data.encryption_method)
      break;

    case 'encoded as base64':
      nextUrl = `${apiUrl}/task_${handleBase64Decryption(encryptedPath)}`
      data = await fetchData(nextUrl)
      if (data) await solution2(data.encrypted_path, data.encryption_method)
      break;

    case 'inserted some non-hex characters':
      nextUrl = `${apiUrl}/task_${removeNonHexCharacters(encryptedPath)}`
      data = await fetchData(nextUrl)
      if (data) await solution2(data.encrypted_path, data.encryption_method)
      break;

    case 'added to ASCII value of each character':
      nextUrl = `${apiUrl}/task_${decryptEncryptedPath(encryptedPath, addedValue)}`
      data = await fetchData(nextUrl)
      if (data) await solution2(data.encrypted_path, data.encryption_method)
      break;

    case 'hex decoded, encrypted with XOR, hex encoded again. key: secret':
      nextUrl = `${apiUrl}/task_${decryptWithXor(encryptedPath, 'secret')}`
      data = await fetchData(nextUrl)
      if (data) await solution2(data.encrypted_path, data.encryption_method)
      break;

    case 'scrambled! original positions as base64 encoded messagepack':
      nextUrl = `${apiUrl}/task_${handleMessagepackBase64Decryption(base64Encoded, encryptedPath)}`
      data = await fetchData(nextUrl)
      if (data) await solution2(data.encrypted_path, data.encryption_method)
      break;

    case 'hashed with sha256, good luck':
      nextUrl = `${apiUrl}/task_${await handleSha256De(encryptedPath)}`
      data = await fetchData(nextUrl)
      if (data) await solution2(data.encrypted_path, data.encryption_method)
      break;
  }
}

solution2('renanddtao@gmail.com')
