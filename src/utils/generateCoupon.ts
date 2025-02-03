export const generateCouponCode = (
  length = 10,
  prefix = "",
  suffix = "",
  hasSpecialChars = false
): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const specialCharacters = "!@#$%^&*()_-+=<>?";

  const validCharacters = hasSpecialChars
    ? characters + specialCharacters
    : characters;
  let couponCode = "";

  for (let i = 0; i < length; i++) {
    couponCode += validCharacters.charAt(
      Math.floor(Math.random() * validCharacters.length)
    );
  }

  return prefix + couponCode + suffix;
};
