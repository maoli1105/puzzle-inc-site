
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const FloatingPieces: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // パーティクルの設定
    const particlesArray: Particle[] = [];
    const numberOfParticles = 40; // ピースの数

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      baseSpeedX: number;
      baseSpeedY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 8 + 2; // 2px - 10px size squares
        this.baseSpeedX = Math.random() * 0.4 - 0.2; // slow movement
        this.baseSpeedY = Math.random() * 0.4 - 0.2;
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        this.opacity = Math.random() * 0.2 + 0.05; // very subtle opacity
      }

      update(mouseX: number, mouseY: number) {
        // マウスインタラクション: マウスに近いと少し避けるような動き
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 200;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          this.speedX -= forceDirectionX * force * 0.5;
          this.speedY -= forceDirectionY * force * 0.5;
        } else {
            // 徐々に元の速度に戻る
            if (this.speedX !== this.baseSpeedX) {
                this.speedX += (this.baseSpeedX - this.speedX) * 0.02;
            }
            if (this.speedY !== this.baseSpeedY) {
                this.speedY += (this.baseSpeedY - this.speedY) * 0.02;
            }
        }

        this.x += this.speedX;
        this.y += this.speedY;

        // 画面端の処理（ループ）
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(150, 150, 150, ${this.opacity})`;
        // 四角いピースを描画
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    let mouse = { x: -1000, y: -1000 };
    
    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.x;
        mouse.y = e.y;
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        init();
    });

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mouse.x, mouse.y);
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" 
      style={{ mixBlendMode: 'overlay' }}
    />
  );
};

export default FloatingPieces;
