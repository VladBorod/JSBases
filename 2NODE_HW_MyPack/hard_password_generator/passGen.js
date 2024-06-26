'use strict';

function genPassword(len){
  let password = "";
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=~-.,";
  for (let i = 0; i < len; i++){
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
  }
  return password;
}

module.exports = { genPassword };