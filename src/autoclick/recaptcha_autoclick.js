let isRecaptchaFrame = () => {
  return /https:\/\/www.google.com\/recaptcha\/api2\/anchor/.test(window.location.href);
};

let captchaInterval = setInterval(() => {
  if (isRecaptchaFrame()) {
    clearInterval(captchaInterval);
    document.getElementsByClassName('recaptcha-checkbox-border')[0].click();    
  }  
}, 500);


