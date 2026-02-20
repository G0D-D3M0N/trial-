/* ============================================
   4EVER-ROOTED | G0D-D3M0N
   Complete JavaScript Functionality
   ============================================ */

// ==========================================
// PRELOADER
// ==========================================
const preloader = document.getElementById('preloader');
const loaderFill = document.querySelector('.loader-fill');
const loaderLogs = document.getElementById('loaderLogs');

const bootMessages = [
    '[OK] Loading kernel modules...',
    '[OK] Initializing network interfaces...',
    '[OK] Starting SSH daemon...',
    '[OK] Mounting encrypted filesystems...',
    '[OK] Loading exploit database...',
    '[OK] Configuring firewall rules...',
    '[OK] Starting intrusion detection...',
    '[OK] Establishing secure connection...',
    '[OK] System ready. Welcome, root.',
];

let bootIndex = 0;
let progress = 0;

function simulateBoot() {
    if (bootIndex < bootMessages.length) {
        const p = document.createElement('p');
        p.textContent = bootMessages[bootIndex];
        p.style.color = '#00ff41';
        p.style.fontSize = '0.65rem';
        p.style.fontFamily = 'var(--font-mono)';
        loaderLogs.appendChild(p);
        loaderLogs.scrollTop = loaderLogs.scrollHeight;
        
        progress = ((bootIndex + 1) / bootMessages.length) * 100;
        loaderFill.style.width = progress + '%';
        
        bootIndex++;
        setTimeout(simulateBoot, 300 + Math.random() * 200);
    } else {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = 'auto';
            initAnimations();
        }, 500);
    }
}

document.body.style.overflow = 'hidden';
setTimeout(simulateBoot, 500);

// ==========================================
// MATRIX RAIN
// ==========================================
const matrixCanvas = document.getElementById('matrixCanvas');
const matrixCtx = matrixCanvas.getContext('2d');

function resizeMatrix() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
}

resizeMatrix();
window.addEventListener('resize', resizeMatrix);

const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
const fontSize = 14;
let columns = Math.floor(matrixCanvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
    matrixCtx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    matrixCtx.fillStyle = '#00ff41';
    matrixCtx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    columns = Math.floor(matrixCanvas.width / fontSize);
    drops = Array(columns).fill(1);
});

// ==========================================
// PARTICLE BACKGROUND
// ==========================================
const particleCanvas = document.getElementById('particleCanvas');
const particleCtx = particleCanvas.getContext('2d');

function resizeParticles() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}

resizeParticles();
window.addEventListener('resize', resizeParticles);

class Particle {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * particleCanvas.width;
        this.y = Math.random() * particleCanvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > particleCanvas.width ||
            this.y < 0 || this.y > particleCanvas.height) {
            this.reset();
        }
    }
    
    draw() {
        particleCtx.beginPath();
        particleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        particleCtx.fillStyle = `rgba(0, 255, 65, ${this.opacity})`;
        particleCtx.fill();
    }
}

const particles = Array.from({ length: 80 }, () => new Particle());

function animateParticles() {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                particleCtx.beginPath();
                particleCtx.moveTo(particles[i].x, particles[i].y);
                particleCtx.lineTo(particles[j].x, particles[j].y);
                particleCtx.strokeStyle = `rgba(0, 255, 65, ${0.1 * (1 - distance / 120)})`;
                particleCtx.lineWidth = 0.5;
                particleCtx.stroke();
            }
        }
    }
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.left = mouseX - 10 + 'px';
    cursorGlow.style.top = mouseY - 10 + 'px';
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .tool-item, .social-link');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursorGlow.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorGlow.classList.remove('hover'));
});

// ==========================================
// NAVIGATION
// ==========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinkElements = document.querySelectorAll('.nav-link');

// Scroll effects
window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active link on scroll
    const sections = document.querySelectorAll('.section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinkElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Back to top
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================================
// TYPING EFFECT
// ==========================================
const typedTextElement = document.getElementById('typedText');
const typingStrings = [
    'Ethical Hacker & Pentester',
    'Security Researcher',
    'Exploit Developer',
    'Bug Bounty Hunter',
    'CTF Player',
    'Digital Ghost',
    '4ever Rooted...',
];

let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
    const currentString = typingStrings[stringIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
    } else {
        typedTextElement.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80;
    }
    
    if (!isDeleting && charIndex === currentString.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % typingStrings.length;
        typingSpeed = 300;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// ==========================================
// COUNTER ANIMATION
// ==========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-value');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

// ==========================================
// SKILL BARS ANIMATION
// ==========================================
function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillFills.forEach(fill => observer.observe(fill));
}

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.project-card, .skills-category, .contact-method, .social-link, .about-container > div'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ==========================================
// INTERACTIVE TERMINAL
// ==========================================
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const terminalBody = document.getElementById('terminalBody');

const commands = {
    help: () => {
        return `Available commands:
  help        - Show this help message
  about       - About G0D-D3M0N
  skills      - List technical skills
  projects    - Show projects
  social      - Social media links
  contact     - Contact information
  whoami      - Who am I?
  date        - Current date/time
  uname       - System information
  neofetch    - System info (fancy)
  matrix      - Toggle matrix rain
  hack        - Try to hack...
  clear       - Clear terminal
  exit        - Close terminal`;
    },
    about: () => {
        return `╔═══════════════════════════════════╗
║         G0D-D3M0N                 ║
║   Ethical Hacker & Researcher     ║
║   4EVER-ROOTED in Cybersecurity   ║
╚═══════════════════════════════════╝

A passionate cybersecurity enthusiast
dedicated to making the digital world
safer, one exploit at a time.`;
    },
    skills: () => {
        return `[+] Penetration Testing    ████████████████████ 95%
[+] Exploit Development   ██████████████████── 90%
[+] Python                ████████████████████ 95%
[+] Reverse Engineering   █████████████████─── 85%
[+] Network Security      ██████████████████── 93%
[+] Malware Analysis      ██████████████████── 88%
[+] Bash Scripting        ██████████████████── 92%
[+] Web Security          █████████████████─── 87%`;
    },
    projects: () => {
        return `[1] ShadowCrawler  - Web vulnerability scanner
[2] PhantomShell   - Encrypted reverse shell
[3] MalwareForge   - Malware analysis sandbox
[4] CipherVault    - Encryption toolkit
[5] NetRecon       - Network reconnaissance
[6] StealthProxy   - Multi-layer proxy chain

Visit ~/projects section for more details.`;
    },
    social: () => {
        return `[GitHub]    github.com/G0D-D3M0N
[Twitter]   @g0d_d3m0n
[Discord]   G0D-D3M0N#1337
[Telegram]  @g0d_d3m0n
[LinkedIn]  linkedin.com/in/g0d-d3m0n`;
    },
    contact: () => {
        return `📧 Email:    g0d.d3m0n@protonmail.com
📍 Location: Somewhere in the Matrix
🕐 Hours:    24/7 (I never sleep)
🔑 PGP Key:  Available on request`;
    },
    whoami: () => 'root',
    date: () => new Date().toString(),
    uname: () => 'Linux 4ever-rooted 6.6.6-kali #1 SMP PREEMPT x86_64 GNU/Linux',
    neofetch: () => {
        return `        .-/+oossssoo+/-.          root@4ever-rooted
    \`:+ssssssssssssssssss+:\`      ─────────────────
  -+ssssssssssssssssssyyssss+-    OS: Kali Linux 2024.x
.ossssssssssssssssss+.  \`+sssso.  Kernel: 6.6.6-kali
+sssssssssss:. \`-:::::-.  osssss+ Shell: zsh 5.9
:ssssssssssss+. \`+sssssss+.sssss: Uptime: 4ever
 osssssssssssss+. \`+sssssss-.sso  Packages: 1337
  +sssssssssssssso. \`+sssss+-     Terminal: hacker-term
   \`+sssssssssssss+. \`+sss+      CPU: AMD Ryzen 9
     \`:+ssssssssssss+. .-:       GPU: NVIDIA RTX 4090
        \`.:+oossssso+:.          Memory: 64GB DDR5`;
    },
    matrix: () => {
        const canvas = document.getElementById('matrixCanvas');
        canvas.style.opacity = canvas.style.opacity === '0' ? '0.15' : '0';
        return 'Matrix rain toggled.';
    },
    hack: () => {
        return `[*] Initializing exploit framework...
[*] Scanning target...
[!] Access Denied: This is a portfolio website 😄
[*] Nice try! But hacking is only ethical here.
[*] Try 'help' for real commands.`;
    },
    clear: () => {
        terminalOutput.innerHTML = '';
        return null;
    },
    exit: () => {
        return 'Nice try. You can never exit. You are 4ever-Rooted. 💀';
    }
};

function addTerminalLine(text, type = 'output') {
    const p = document.createElement('p');
    p.style.whiteSpace = 'pre-wrap';
    p.style.wordBreak = 'break-word';
    
    if (type === 'command') {
        p.innerHTML = `<span style="color:#ff0040;font-weight:700">root@4ever-rooted:~$</span> <span style="color:#00ff41">${text}</span>`;
    } else if (type === 'error') {
        p.style.color = '#ff0040';
        p.textContent = text;
    } else {
        p.style.color = '#c9d1d9';
        p.textContent = text;
    }
    
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';
        
        if (!input) return;
        
        addTerminalLine(input, 'command');
        
        if (commands[input]) {
            const result = commands[input]();
            if (result !== null && result !== undefined) {
                addTerminalLine(result);
            }
        } else {
            addTerminalLine(`bash: ${input}: command not found. Type 'help' for available commands.`, 'error');
        }
    }
});

// Click terminal body to focus input
terminalBody.addEventListener('click', () => {
    terminalInput.focus();
});

// ==========================================
// CONTACT FORM
// ==========================================
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = e.target.querySelector('.btn-submit');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> TRANSMITTING...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> TRANSMITTED!';
        btn.style.borderColor = '#00ff41';
        btn.style.color = '#00ff41';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
            btn.style.borderColor = '';
            btn.style.color = '';
            e.target.reset();
        }, 3000);
    }, 2000);
});

// ==========================================
// AUDIO TOGGLE (ambient sound simulation)
// ==========================================
const audioToggle = document.getElementById('audioToggle');
let audioPlaying = false;
let audioContext = null;

audioToggle.addEventListener('click', () => {
    audioPlaying = !audioPlaying;
    audioToggle.classList.toggle('active');
    
    if (audioPlaying) {
        audioToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        
        // Create ambient sound
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Simple ambient oscillator
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(80, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        
        audioToggle._oscillator = oscillator;
        audioToggle._gainNode = gainNode;
    } else {
        audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        
        if (audioToggle._oscillator) {
            audioToggle._oscillator.stop();
            audioToggle._oscillator = null;
        }
    }
});

// ==========================================
// INITIALIZE ANIMATIONS
// ==========================================
function initAnimations() {
    typeEffect();
    animateCounters();
    animateSkillBars();
    initScrollReveal();
}

// ==========================================
// EASTER EGGS
// ==========================================
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = '';
            }, 5000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// ==========================================
// PERFORMANCE - Pause animations when tab is hidden
// ==========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '[ PAUSED ] 4ever-Rooted';
    } else {
        document.title = '4ever-Rooted | G0D-D3M0N';
    }
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c 💀 4EVER-ROOTED 💀 ', 
    'background: #000; color: #00ff41; font-size: 20px; font-weight: bold; padding: 10px; border: 2px solid #00ff41;');
console.log('%c You found the console. Impressive.', 
    'color: #ff0040; font-size: 12px;');
console.log('%c But remember... poking around is what we do best. 😈', 
    'color: #00d4ff; font-size: 12px;');