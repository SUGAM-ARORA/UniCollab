import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Preloader from './Components/Preloader';

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "#3fbcc0c6",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "#3fbcc0c6",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
  "darkturquoise",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.pageX;
  coords.y = e.pageY;
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

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Preloader />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
