 let rainbowEnabled = false;

        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        // Function to create and animate social media icons
        function createSocialMediaIcon(imageSrc, link) {
            const icon = document.createElement('img');
            icon.src = imageSrc;
            icon.classList.add('social-media-icon');
            icon.style.left = Math.random() * (window.innerWidth - 50) + 'px';
            icon.style.top = Math.random() * (window.innerHeight - 50) + 'px';
            document.body.appendChild(icon);

            icon.addEventListener('click', () => {
                window.location.href = link;
            });

            function moveIcon() {
                const newX = parseFloat(icon.style.left) + Math.random() * 1;
                if (newX > window.innerWidth) {
                    icon.style.left = '-40px';
                    icon.style.top = Math.random() * (window.innerHeight - 50) + 'px';
                } else {
                    icon.style.left = newX + 'px';
                }

                requestAnimationFrame(moveIcon);
            }

            icon.addEventListener('mouseenter', () => {
                cancelAnimationFrame(icon.animationId);
            });

            icon.addEventListener('mouseleave', () => {
                icon.animationId = requestAnimationFrame(moveIcon);
            });

            icon.animationId = requestAnimationFrame(moveIcon);
        }

        createSocialMediaIcon('images/discord.svg', 'https://discord.gg/W5PZSxaMgk');
        createSocialMediaIcon('images/yticon.png', 'https://www.youtube.com/@lenn106');
        createSocialMediaIcon('images/github.png', 'https://github.com/lenn106');

        // Rainbow switch functionality
        const rainbowSwitch = document.getElementById('rainbow-switch');
        const profileContainer = document.querySelector('.profile-container');

        rainbowSwitch.addEventListener('click', () => {
            if (!rainbowEnabled) {
                rainbowEnabled = true;
                profileContainer.classList.add('rainbow-effect');
                rainbowSwitch.textContent = 'Disable Rainbow';
                playRainbowMusic();
            } else {
                rainbowEnabled = false;
                profileContainer.classList.remove('rainbow-effect');
                rainbowSwitch.textContent = 'Enable Rainbow';
                pauseRainbowMusic();
            }
        });

        // Rainbow music
        let audio = new Audio('sound/rainbow.mp3');
        audio.loop = true;

        function playRainbowMusic() {
            audio.play();
        }

        function pauseRainbowMusic() {
            audio.pause();
        }
