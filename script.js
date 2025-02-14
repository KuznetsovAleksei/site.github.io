const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
const textElement = document.getElementById('text');

let scale, offsetX, offsetY;

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Масштабируем сердечко в зависимости от размера экрана
    scale = Math.min(window.innerWidth / 200, window.innerHeight / 150);
    offsetX = (canvas.width - 150 * scale) / 2;
    offsetY = (canvas.height - 120 * scale) / 2;
}
setupCanvas();
const heartPath = [
    { x: 75, y: 40 },
    { x: 75, y: 37 },
    { x: 70, y: 25 },
    { x: 50, y: 10 },
    { x: 20, y: 10 },
    { x: 0, y: 30 },
    { x: 0, y: 60 },
    { x: 40, y: 95 },
    { x: 75, y: 120 },
    { x: 110, y: 95 },
    { x: 150, y: 60 },
    { x: 150, y: 30 },
    { x: 130, y: 10 },
    { x: 100, y: 10 },
    { x: 85, y: 20 },
    { x: 75, y: 37 },
    { x: 75, y: 40 }
];

let currentPoint = 0;

function drawHeart() {
    if (currentPoint >= heartPath.length) {
        textElement.classList.add('visible');
        createFallingHearts();
        return;
    }

    const point = heartPath[currentPoint];
    ctx.lineTo(point.x * scale + offsetX, point.y * scale + offsetY);
    ctx.stroke();

    createSparkles(point.x * scale + offsetX, point.y * scale + offsetY);

    currentPoint++;
    requestAnimationFrame(drawHeart);
}

function createSparkles(x, y) {
    for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 10;
        const sparkleX = x + Math.cos(angle) * radius;
        const sparkleY = y + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(sparkleX, sparkleY, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ff77aa';
        ctx.fill();
    }
}

function createFallingHearts() {
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const size = Math.random() * 20 + 20;
        const speed = Math.random() * 2 + 6;

        const heart = {
            x: x,
            y: -size,
            size: size,
            speed: speed
        };

        fallingHearts.push(heart);
    }, 50);

    animateFallingHearts();
}

const fallingHearts = [];

function animateFallingHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let i = 0; i < heartPath.length; i++) {
        const point = heartPath[i];
        ctx.lineTo(point.x * scale + offsetX, point.y * scale + offsetY);
    }
    ctx.strokeStyle = '#ff77aa';
    ctx.lineWidth = 3;
    ctx.stroke();

    for (let i = 0; i < fallingHearts.length; i++) {
        const heart = fallingHearts[i];
        heart.y += heart.speed;

        ctx.beginPath();
        ctx.moveTo(heart.x, heart.y);
        ctx.bezierCurveTo(
            heart.x - heart.size / 2, heart.y - heart.size / 4,
            heart.x - heart.size / 4, heart.y - heart.size / 2,
            heart.x, heart.y - heart.size / 2
        );
        ctx.bezierCurveTo(
            heart.x + heart.size / 4, heart.y - heart.size / 2,
            heart.x + heart.size / 2, heart.y - heart.size / 4,
            heart.x, heart.y
        );
        ctx.closePath();
        ctx.fillStyle = '#ff1493';
        ctx.fill();

        if (heart.y > canvas.height) {
            fallingHearts.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animateFallingHearts);
}

ctx.strokeStyle = '#ff1493';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(heartPath[0].x * scale + offsetX, heartPath[0].y * scale + offsetY);

drawHeart();
window.addEventListener('resize', () => {
    setupCanvas();
    currentPoint = 0; // Сброс анимации сердечка
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(heartPath[0].x * scale + offsetX, heartPath[0].y * scale + offsetY);
    drawHeart();
});