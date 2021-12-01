import { createErrorMsg, createInfoMsg, createSuccessMsg, createWarningMsg } from './message';
export const userModel = () => {
  return {
    createSuccessMsg,
    createErrorMsg,
    createInfoMsg,
    createWarningMsg
  }
}