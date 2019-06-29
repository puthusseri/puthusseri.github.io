import {requiredFn, validateEmailFn, minCharsFn, regexFn, minArrayLengthFn} from './validation-utils';

import _ from 'lodash';

export const required = (errorMessage) => ({
  errorMessage: errorMessage || 'required',
  fn: requiredFn
});

export const requiredEmail = (errorMessage) => ({
  errorMessage: errorMessage || 'a valid email is required',
  fn: field => requiredFn(field) && validateEmailFn(field.value)
});

export const minArrayLength = (minLength, errorMessage) => ({
  errorMessage,
  fn: field => minArrayLengthFn(field, minLength)
});

export const minChars = (minLimit, errorMessage) => ({
  errorMessage: errorMessage || `must be minimum ${minLimit} chars`,
  fn: field => requiredFn(field) && minCharsFn(minLimit)(field)
});

export const regex = (regex, errorMessage) => ({
  errorMessage: errorMessage || 'invalid value',
  fn: field => requiredFn(field) && regexFn(regex)(field)
});

export const multiple = ({errorMessage, validations}) => ({
  errorMessage,
  fn: field => _.every(validations, validate => validate(field))
});

export const confirmPassword = (fieldName, errorMessage) => ({
  errorMessage,
  fn: (field, fields) => {
    return requiredFn(field) === true && field.value === fields[fieldName].value;
  }
})