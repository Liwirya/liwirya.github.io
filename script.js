document.addEventListener('DOMContentLoaded', function() {
            const backgroundMusic = document.getElementById('background-music');
            const profileImg = document.getElementById('profile-img');
            
            backgroundMusic.play().catch(e => {
                console.log("Autoplay was prevented. Music will play on first user interaction.");
                const playMusicOnInteraction = () => {
                    backgroundMusic.play().then(() => {
                        console.log("Music started playing");
                        profileImg.classList.add('rotating');
                    }).catch(e => {
                        console.log("Could not play music:", e);
                    });
                    document.removeEventListener('click', playMusicOnInteraction);
                    document.removeEventListener('touchstart', playMusicOnInteraction);
                };
                
                document.addEventListener('click', playMusicOnInteraction);
                document.addEventListener('touchstart', playMusicOnInteraction);
            });
            
            backgroundMusic.addEventListener('play', function() {
                profileImg.classList.add('rotating');
            });

            function updateClocks() {
                const now = new Date();
                
                const wibTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
                document.getElementById('wib-clock').textContent = formatTime(wibTime);
                
                const witaTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Makassar"}));
                document.getElementById('wita-clock').textContent = formatTime(witaTime);
                
                const witTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Jayapura"}));
                document.getElementById('wit-clock').textContent = formatTime(witTime);
            }

            function formatTime(date) {
                return date.toTimeString().slice(0, 8);
            }

            setInterval(updateClocks, 1000);
            updateClocks(); 
            
            const observerOptions = {
                threshold: 0.3
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBars = entry.target.querySelectorAll('.progress-bar');
                        progressBars.forEach((bar, index) => {
                            setTimeout(() => {
                                bar.style.opacity = '1';
                            }, index * 200);
                        });
                    }
                });
            }, observerOptions);

            const skillSection = document.querySelector('#skills');
            if (skillSection) {
                observer.observe(skillSection);
            }

            const profileContainer = document.querySelector('.profile-glow');
            if (profileContainer) {
                profileContainer.style.animation = 'float 3s ease-in-out infinite';
            }
        });