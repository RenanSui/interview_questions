export const handleBase64EncodedMessagePack = (encryptionMethod) => {
  const match = encryptionMethod.match(/(scrambled! original positions as base64 encoded messagepack: ([A-Za-z0-9+/=]+))/);

  if (match) {
    const base64Encoded = match[2];
    const modifiedText = 'scrambled! original positions as base64 encoded messagepack';
    return { addedValue: null, base64Encoded, modifiedText };
  }

  return { addedValue: null, modifiedText: encryptionMethod };
};