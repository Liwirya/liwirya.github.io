tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        'sans': ['Poppins', 'sans-serif']
                    },
                    colors: {
                        'neon-blue': '#00c2ff',
                        'neon-purple': '#9d4edd',
                        'neon-turquoise': '#48e5c2',
                        'dark-bg': '#0a0e17',
                        'dark-card': '#131a2a',
                        'dark-border': '#222b45'
                    },
                    animation: {
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                        'float': 'float 3s ease-in-out infinite',
                        'progress': 'progress 1.5s ease-out forwards',
                        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                        'rotate-slow': 'rotateSlow 20s linear infinite',
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(30px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        pulseGlow: {
                            '0%, 100%': { boxShadow: '0 0 15px rgba(72, 229, 194, 0.4)' },
                            '50%': { boxShadow: '0 0 25px rgba(72, 229, 194, 0.8)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        progress: {
                            '0%': { width: '0%' },
                            '100%': { width: 'var(--progress-width)' },
                        },
                        slideInLeft: {
                            '0%': { opacity: '0', transform: 'translateX(-50px)' },
                            '100%': { opacity: '1', transform: 'translateX(0)' },
                        },
                        slideInRight: {
                            '0%': { opacity: '0', transform: 'translateX(50px)' },
                            '100%': { opacity: '1', transform: 'translateX(0)' },
                        },
                        rotateSlow: {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' },
                        }
                    }
                }
            }
        }