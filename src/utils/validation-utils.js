import {toJS} from 'mobx';
import _ from 'lodash';

export const isEmptyValue = (val, trim = true) => {
  return val === undefined || val === null || ((trim === false || !_.isString(val)) ? false : (val !== undefined && val.trim && val.trim() === ''))
}

export const validateEmailFn = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailResult = re.test(email);
  return emailResult;
}

export const requiredFn = (field) => {
  const isString = typeof field.value === 'string';
  const valid = field !== undefined && field.value !== undefined && field.value !== null && field.value !== "" && (isString ? field.value.trim().length > 0 : true);
  return valid;
};

export const minArrayLengthFn = (field, minLength) => {
  const isArray = _.isArray(toJS(field.value));
  const notUndefined = field.value !== undefined;
  const biggerLength = field.value && (field.value.length >= minLength);
  return notUndefined && isArray && biggerLength;
}

export const minCharsFn = minLimit => field => field.value.length >= minLimit;
export const regexFn = regex => field => regex.test(field.value);
