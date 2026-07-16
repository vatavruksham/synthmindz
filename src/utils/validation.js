/**
 * Validates that a value is not empty or whitespace-only.
 * @param {string} value
 * @returns {string|null} Error message or null if valid
 */
export function validateRequired(value) {
  if (!value || value.trim() === '') {
    return 'This field is required';
  }
  return null;
}

/**
 * Validates that a value is a properly formatted email address.
 * Also checks for required (non-empty) first.
 * @param {string} value
 * @returns {string|null} Error message or null if valid
 */
export function validateEmail(value) {
  const requiredError = validateRequired(value);
  if (requiredError) {
    return requiredError;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value.trim())) {
    return 'Please enter a valid email address';
  }
  return null;
}

/**
 * Validates that two password values match.
 * @param {string} password
 * @param {string} confirm
 * @returns {string|null} Error message or null if matching
 */
export function validatePasswordMatch(password, confirm) {
  if (password !== confirm) {
    return 'Passwords do not match';
  }
  return null;
}

/**
 * Validates a contact form data object.
 * @param {{ fullName: string, email: string, subject: string, message: string }} data
 * @returns {Object} Object with field->error entries, empty if valid
 */
export function validateContactForm(data) {
  const errors = {};

  const fullNameError = validateRequired(data.fullName);
  if (fullNameError) errors.fullName = fullNameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const subjectError = validateRequired(data.subject);
  if (subjectError) errors.subject = subjectError;

  const messageError = validateRequired(data.message);
  if (messageError) errors.message = messageError;

  return errors;
}

/**
 * Validates a login form data object.
 * @param {{ email: string, password: string }} data
 * @returns {Object} Object with field->error entries, empty if valid
 */
export function validateLoginForm(data) {
  const errors = {};

  const emailError = validateRequired(data.email);
  if (emailError) errors.email = emailError;

  const passwordError = validateRequired(data.password);
  if (passwordError) errors.password = passwordError;

  return errors;
}

/**
 * Validates a registration form data object.
 * @param {{ name: string, email: string, password: string, confirmPassword: string }} data
 * @returns {Object} Object with field->error entries, empty if valid
 */
export function validateRegisterForm(data) {
  const errors = {};

  const nameError = validateRequired(data.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const passwordError = validateRequired(data.password);
  if (passwordError) errors.password = passwordError;

  const confirmError = validateRequired(data.confirmPassword);
  if (confirmError) {
    errors.confirmPassword = confirmError;
  } else {
    const matchError = validatePasswordMatch(data.password, data.confirmPassword);
    if (matchError) errors.confirmPassword = matchError;
  }

  return errors;
}
