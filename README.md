# ReCAPTCHA-Destroyer
Chrome Extension to autosolve ReCAPTCHA using Speech-to-Text APIs


![reCAPTCHA Destroyer](https://i.imgur.com/LkfQH0t.gif)

## Description
Google's reCAPTCHA system has attack capabilities written for the audio captcha. This chrome extension interacts with the target 
website and engage with the CAPTCHA, parsing out the necessary elements to begin the attack. 
It relies primarily on the audio captcha attack - by properly identifying spoken words, it can pass the reCAPTCHA programmatically
and fool the site into thinking extension is a human.

## How it Works
1]  When the website is loaded, the background script access all the DOM elements.  
2]  Checks for presence of Google's reCAPTCHA in anchor frame.  
3]  recaptcha_autoclick.js Autoclicks the Challenge Checkbox.  
4]  The solve script injects a button replacing the info icon.  
5]  User click this button if they want to autosolve reCAPTCHA.  
6]  Backgorund script prepares the audio challenge.   
7]  This audio is POST(ed) to selected Speech-to-Text API.  
8]  Upon GET(ting) the text back, the solve scripts inputs it.  
9]  Challenge is Auto-sumbitted.  
10] Voila!  

## Installation
1] Download and Extract the Zip for below URL :-  
[DOWNLOAD](https://anonymousfiles.io/F6K4VmtA/)   
2] Type url in Chrome Browser :- "chrome://extensions"     
3] Activate Developer Mode   
4] Click Button "Load unpacked"   
5] Browse and select the folder with file "manifest.json"   
6] Kickback and Relax   
    
## Disclaimer
I have no intension of uploading this to the Chrome Store.     
It is for my Personal Use and this is not my original idea.     
[INSPIRATION](https://pastebin.com/embed_js/ygkhRzYw)       
I liked the above projects and wanted to implement my own version from scratch as I was learning JS, HTML and CSS.  
I have implemented features which are more intuitive for my usage and inprocess learned substancially about the mentioned languages. 
    
Created for Educational Use Only ( Literally )
