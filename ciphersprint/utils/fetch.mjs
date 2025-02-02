export const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log({ data })
    return data
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error)
    return null
  }
}