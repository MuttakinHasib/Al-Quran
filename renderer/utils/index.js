// Set in localStorage
// const app = require('electron').remote.app;
export const setLocalStorage = (provider, data) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(`${provider}`, JSON.stringify(data));
  }
};

// Remove from localStorage

export const getLocalStorage = provider => {
  if (typeof localStorage !== "undefined") {
    JSON.parse(localStorage.getItem(provider));
  }
};

// var appVersion = require('electron').remote.app.getVersion();
// console.log(appVersion);
