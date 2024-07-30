import React from 'react';
import { createRoot } from 'react-dom/client'; // Step 1
import './index.css';
import reportWebVitals from './reportWebVitals';
import Preloader from './Components/Preloader';

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ff21bc", 
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#3fbcc0c6",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#3fbcc0c6",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
  "#ff21bc",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.pageX;
  coords.y = e.pageY - window.scrollY; // Adjust for vertical scroll position
});


function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// Updated rendering method
const root = createRoot(document.getElementById('root')); // Step 2
root.render(
  <React.StrictMode>
    <Preloader />
  </React.StrictMode>
);

reportWebVitals();