import React from 'react';
import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import Portfolio from "./Components/Portfolio/portfolio";
import Socials from "./Components/Socials/socials";
import Education from "./Components/Education/education";
import FadeInOutView from './FadeInOutView';
import './App.css';

// Canvas setup for this
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Background particles
const particles = [];
const particleCount = 130;

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        let moveFactor = window.scrollY / 1000; // Use window.scrollY directly
        this.x -= this.speedX + moveFactor;
        this.y -= this.speedY + moveFactor;

        if (this.x < 0 || this.x > canvas.width) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.speedY *= -1;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
    }
}

// Create particles
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
}

animate();

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="scrollContainer">
                <FadeInOutView>
                    <div className="scrollPadding">
                        <Intro />
                    </div>
                </FadeInOutView>
                <FadeInOutView>
                    <div className="scrollPadding">
                        <Education />
                    </div>
                </FadeInOutView>
                <FadeInOutView>
                    <div className="scrollPadding">
                        <Portfolio />
                    </div>
                </FadeInOutView>
                <FadeInOutView>
                    <div className="scrollPadding">
                        <Socials />
                    </div>
                </FadeInOutView>
            </div>
        </div>
    );
}

export default App;