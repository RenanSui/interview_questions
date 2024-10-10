export const handleAddedToASCII = (encryptionMethod) => {
  const match = encryptionMethod.match(/(added (-?\d+) to ASCII value of each character)/);
  
  if (match) {
    const addedValue = parseInt(match[2], 10);
    const modifiedText = encryptionMethod.replace(match[1], 'added to ASCII value of each character');
    return { addedValue, modifiedText };
  }

  return { addedValue: null, modifiedText: encryptionMethod };
};