export const COMPETITIONS_PREFIX = "/competitions";
export const WINNERS_PREFIX = "/winners";
export const PARTICIPANTS_PREFIX = "/participants";
export const LOGIN_PREFIX = "/auth/login";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const COMPETITIONS_URL = `${BASE_URL}${COMPETITIONS_PREFIX}`;
export const WINNERS_URL = `${BASE_URL}${WINNERS_PREFIX}`;
export const PARTICIPANTS_URL = `${BASE_URL}${PARTICIPANTS_PREFIX}`;
export const LOGIN_URL = `${BASE_URL}${LOGIN_PREFIX}`;

export const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_URL;
