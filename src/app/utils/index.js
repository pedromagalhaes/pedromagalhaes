
import storage, { setUserTokens as setUserCookies } from './storage'
import silentLogger from './logger'
import { handleClientPath, handleServerPath, cmsPageUrl } from './urlHelpers'
import { findObjByKey } from './objectHelpers'
import validateAxiosResponse from './validateAxiosResponse'

const logger = silentLogger

export {
  storage,
  setUserCookies,
  logger,
  handleClientPath,
  handleServerPath,
  cmsPageUrl,
  findObjByKey,
  validateAxiosResponse
}
