import { N as e } from "./verifyPrepare-e26a1ce7.js";
function c(r) {
  switch (r) {
    case 1:
      return e("error.invalidSymbol", "Invalid symbol");
    case 2:
      return e("error.invalidNumberFormat", "Invalid number format");
    case 3:
      return e("error.propertyNameExpected", "Property name expected");
    case 4:
      return e("error.valueExpected", "Value expected");
    case 5:
      return e("error.colonExpected", "Colon expected");
    case 6:
      return e("error.commaExpected", "Comma expected");
    case 7:
      return e("error.closeBraceExpected", "Closing brace expected");
    case 8:
      return e("error.closeBracketExpected", "Closing bracket expected");
    case 9:
      return e("error.endOfFileExpected", "End of file expected");
    default:
      return "";
  }
}
export {
  c as g
};
