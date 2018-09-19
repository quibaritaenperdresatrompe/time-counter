export default (number, length) => {
  var stringifyNumber = number.toString();
  while (stringifyNumber.length < length) {
    stringifyNumber = `0${stringifyNumber}`;
  }
  return stringifyNumber;
};
