import { handleAddedToASCII, handleBase64EncodedMessagePack } from "./index.mjs";

export const getAddedValueAndText = (encryptionMethod) => {
  const addedResult = handleAddedToASCII(encryptionMethod);
  
  if (addedResult.addedValue !== null) {
    return {
      addedValue: addedResult.addedValue,
      base64Encoded: undefined,  // ensure this is always included
      modifiedText: addedResult.modifiedText
    };
  }

  const base64Result = handleBase64EncodedMessagePack(encryptionMethod);

  return {
    addedValue: null,  // addedValue is always null in this case
    base64Encoded: base64Result.base64Encoded || undefined,  // default to undefined if not set
    modifiedText: base64Result.modifiedText
  };
};

// export const getAddedValueAndText = (encryptionMethod) => {
//   const addedResult = handleAddedToASCII(encryptionMethod);
//   if (addedResult.addedValue !== null) {
//     return addedResult; // Return result if it's from the "added to ASCII" method
//   }

//   return handleBase64EncodedMessagePack(encryptionMethod);
// };

// export const getAddedValueAndText = (encryptionMethod) => {
//   const match = encryptionMethod.match(/(added (-?\d+) to ASCII value of each character)/);

//   if (match) {
//     const addedValue = parseInt(match[2], 10)
//     const modifiedText = encryptionMethod.replace(match[1], 'added to ASCII value of each character')
//     return { addedValue, modifiedText }
//   }

//   return { addedValue: null, modifiedText: encryptionMethod }
// }