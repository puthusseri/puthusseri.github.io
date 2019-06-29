export const bindField = (field, {changeEvent = 'onChange', targetProperty = 'value', valueKey = 'value', afterSet}={}) => ({
  onBlur: () => {
    field.markAsFocused(false);
  },
  onFocus: () => {
    field.markAsFocused(true);
  },
  [changeEvent]: (e) => {
    let newValue;
    if (e && e.target) {
      const type = e.target.getAttribute('type');
      newValue = type === 'checkbox' ? (e.target.checked === true) : e.target[targetProperty];
    }
    else {
      newValue = e;
    }
    field.value = newValue;
  },
  [valueKey]: field.value
});

export const autofocus = {ref: elem => elem !== null && elem.focus()};

export const onEnter = cb => ({
  onKeyPress: e => {
    const {key, target:{value}, shiftKey} = e;
    if (key === 'Enter' && !shiftKey) {
      e.preventDefault();
      cb(value);
    }
  }
});