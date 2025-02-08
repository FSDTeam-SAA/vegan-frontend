/**
 * An array of routes that are accesible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
  "/",
  "/onboarding",
  "/onboarding/login",
  "/onboarding/signup",
];

export const protectedRoutes = ["/profit-calculator"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect loggedin users to homepage
 * @type {string[]}
 */

export const authRoutes = [
  "/onboarding",
  "/onboarding/login",
  "/onboarding/signup",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
