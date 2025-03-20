import React, { useState, useEffect, useRef } from 'react';
import AuthForm from '../components/AuthForm';

const IndexPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [animate, setAnimate] = useState(false);
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted (no actual API call):', formData);
  };

  const toggleForm = () => {
    setAnimate(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setAnimate(false);
    }, 300);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 200; // Increased particle count for a denser galaxy
    const particleColors = ['#4A90E2', '#50E3C2', '#B8E986', '#F8E71C', '#F5A623', '#D0021B']; // Galaxy colors

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = (Math.random() * 2) + 0.5; // Smaller sizes for galaxy effect
        this.speedX = (Math.random() * 1) - 0.5;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
        this.opacity = Math.random() * 0.6 + 0.4; // Opacity for a shimmering effect
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity; // Apply opacity
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1; // Reset opacity
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Add a subtle background gradient to enhance the galaxy effect
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 20, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animateParticles);
    }

    init();
    animateParticles();

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gradient-to-br from-gray-900 to-blue-900 bg-opacity-50 placeholder-gray-400 backdrop-filter backdrop-blur-md";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" style={{ pointerEvents: 'none' }} />
      <div className="relative w-full max-w-md z-10">
        {/* Updated the background overlay gradient for more galactic feel */}
        <div className="absolute top-0 -left-2 transform origin-bottom-left rotate-[-1deg] w-full h-full bg-gradient-to-br from-purple-500 to-blue-700 via-pink-500 to-indigo-500 rounded-md shadow-xl opacity-50"></div>
        <div className="relative rounded-md shadow-2xl overflow-hidden p-8 backdrop-filter backdrop-blur-md bg-white/10 border border-white/20">
          <h2 className="text-3xl font-extrabold mb-6 text-white text-center tracking-tight">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>

          <AuthForm onSubmit={handleSubmit} onChange={handleChange} values={formData}>
            <div className={`transition-opacity duration-300 ${isLogin ? 'opacity-100' : 'opacity-0 hidden'} ${animate ? 'animate-fade' : ''}`}>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="login-email">
                  Email
                </label>
                <input
                  className={inputStyle}
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="login-password">
                  Password
                </label>
                <input
                 className={inputStyle}
                  id="login-password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 w-full"
                type="submit"
              >
                Log In
              </button>
            </div>

            <div className={`transition-opacity duration-300 ${!isLogin ? 'opacity-100' : 'opacity-0 hidden'} ${animate ? 'animate-fade' : ''}`}>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="signup-name">
                  Name
                </label>
                <input
                  className={inputStyle}
                  id="signup-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="signup-email">
                  Email
                </label>
                <input
                  className={inputStyle}
                  id="signup-email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="signup-password">
                  Password
                </label>
                <input
                 className={inputStyle}
                  id="signup-password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 w-full"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <div className="flex items-center justify-center mt-6">
              <button
                className="inline-block align-baseline font-bold text-sm text-indigo-300 hover:text-indigo-100 focus:outline-none transition duration-300"
                type="button"
                onClick={toggleForm}
              >
                {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
              </button>
            </div>
          </AuthForm>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;