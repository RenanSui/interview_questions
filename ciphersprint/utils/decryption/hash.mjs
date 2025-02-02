export const handleSha256De = async (path) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(path.replace('task_', ''))

  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

  return hashHex
};