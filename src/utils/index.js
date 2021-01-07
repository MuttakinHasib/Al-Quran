// Set in localStorage

export const setLocalStorage = (provider, data) => {
  localStorage.setItem(`${provider}`, JSON.stringify(data));
};

// Remove from localStorage

export const getLocalStorage = provider =>
  JSON.parse(localStorage.getItem(provider));
