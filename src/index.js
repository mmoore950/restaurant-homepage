import "./styles.css";
import { loadhome } from './loadhome.js';
import { loadmenu } from "./loadmenu.js";

console.log('before loadhome');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Load home content initially
    loadhome();

    // Get the buttons
    const menuBtn = document.getElementById('menu');
    const homeBtn = document.getElementById('home');

    // Check if buttons exist before adding event listeners
    if (menuBtn) {
        menuBtn.addEventListener('click', loadmenu);
    } else {
        console.error("Menu button not found.");
    }

    if (homeBtn) {
        homeBtn.addEventListener('click', loadhome);
    } else {
        console.error("Home button not found.");
    }
});

console.log('after loadhome');

console.log("hello world")