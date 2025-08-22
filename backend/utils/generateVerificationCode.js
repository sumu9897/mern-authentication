// Description: This utility function generates a random 6-digit verification code.
// It is used for user verification processes such as email or SMS confirmation.
// Generate a random 6-digit verification code
// This utility function generates a random 6-digit verification code.
/**
 * Generates a random 6-digit verification code.
 * @returns {string} A 6-digit string representing the verification code.
 */
export const generateVerificationToken = () =>  Math.floor(100000 + Math.random() * 900000).toString();
