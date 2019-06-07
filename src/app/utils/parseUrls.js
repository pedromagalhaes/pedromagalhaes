const getDomainFromUrl = (url) => {
  let parsedUrl = url
  parsedUrl = url.split('/')
  parsedUrl = `${parsedUrl[0]}//${parsedUrl[2]}`
  return parsedUrl
}

export default getDomainFromUrl
