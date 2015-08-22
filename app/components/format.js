export function toUKDate (dateString) {
  return dateString.split('-').reverse().join('/');
}

export function toDDMM (dateString) {
  if (typeof dateString !== 'string') {
    throw new Error('First argument must be a string');
  }

  if (dateString.split('-').length !== 3) {
    throw new Error('dateString parameter must be in ISO-8601 format (yyyy-mm-dd)');
  }

  return dateString.split('-').reverse().slice(0,2).join('/');
}

export function toPounds (amount) {
  amount = parseFloat(amount);
  return `£${amount.toFixed(2)}`;
}
