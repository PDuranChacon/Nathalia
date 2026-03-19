(function() {
            // Variables
            const particulasDiv = document.getElementById('particulas');
            const btnMensajes = document.getElementById('btnMensajes');
            const cajaMensajes = document.getElementById('cajaMensajes');
            
            // Elementos de audio
            const reproductor = document.getElementById('reproductorAudio');

            // MENSAJES CORTOS (cambia estos por los que quieras)
            const mensajes = [
                "💙 Amor no olvides todo lo que vivimos",
                "🌊 que no se apague el amor ",
                "💫 aun hay esparanza Nathalia",
                "✨ Nada está perdido, amor mío",
                "💕 Nathy, tú eres lo más importante",
                "🌟 Siempre voy a estar aquí",
                "💙 Te cuidare amor ",
                "🌊 Gracias por todo el tiempo que me diste",
                "💫 Tú y yo, siempre",
                "✨ Eres mi paz",
                "💕 Siempre hay otra oportunidad",
                "🌟 Nathy Nathy Nathy Nathy eres muy especial para mi "
            ];

            let indiceMensaje = 0;

            // Función para crear partículas
            function crearParticulas() {
                const simbolos = ['💙', '🌊', '💚', '✨', '💫'];
                for (let i = 0; i < 12; i++) {
                    setTimeout(() => {
                        const p = document.createElement('div');
                        p.className = 'particula';
                        p.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
                        p.style.left = Math.random() * 100 + '%';
                        p.style.fontSize = (1 + Math.random() * 2) + 'rem';
                        p.style.animationDuration = (3 + Math.random() * 4) + 's';
                        particulasDiv.appendChild(p);
                        setTimeout(() => p.remove(), 7000);
                    }, i * 40);
                }
            }

            // Botón de mensajes: cada clic muestra un mensaje corto
            btnMensajes.addEventListener('click', () => {
                // Mostrar mensaje aleatorio
                const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
                cajaMensajes.textContent = mensajeAleatorio;
                
                // Efecto visual
                cajaMensajes.style.backgroundColor = '#c2ebeb';
                setTimeout(() => {
                    cajaMensajes.style.backgroundColor = '#e0f2f2';
                }, 300);
                
                // Crear partículas
                crearParticulas();
            });

            // Intentar reproducir audio automáticamente (puede no funcionar en algunos navegadores)
            reproductor.volume = 0.5; // Volumen al 50%

            // Partículas de fondo automáticas
            setInterval(() => {
                if (Math.random() > 0.7) {
                    const p = document.createElement('div');
                    p.className = 'particula';
                    p.textContent = Math.random() > 0.5 ? '💙' : '🌊';
                    p.style.left = Math.random() * 100 + '%';
                    p.style.animationDuration = (5 + Math.random() * 5) + 's';
                    p.style.opacity = 0.2;
                    particulasDiv.appendChild(p);
                    setTimeout(() => p.remove(), 10000);
                }
            }, 800);

            // Mensaje en consola
            console.log('%c💙 PARA NATHALIA 💙', 'color: #1b7f7f; font-size: 16px; font-weight: bold;');
            console.log('%cNada está perdido. Siempre hay esperanza.', 'color: #0f5c5c; font-size: 14px;');

            // Contador de días
            const inicio = new Date('2023-09-23'); // Cambiar fecha
            const hoy = new Date();
            const dias = Math.floor((hoy - inicio) / (1000*60*60*24));
            
            if (dias > 0) {
                const diasDiv = document.createElement('div');
                diasDiv.style.margin = '15px 0 5px';
                diasDiv.style.fontSize = '0.95rem';
                diasDiv.style.color = '#1b7f7f';
                diasDiv.style.textAlign = 'center';
                diasDiv.style.background = '#ecfbfb';
                diasDiv.style.padding = '8px';
                diasDiv.style.borderRadius = '50px';
                diasDiv.style.border = '2px solid #aad0d0';
                diasDiv.innerHTML = `🌊 ${dias} días a tu lado 🌊`;
                
                // Insertar después del botón de WhatsApp
                const whatsappBtn = document.getElementById('whatsappBtn');
                whatsappBtn.parentNode.insertBefore(diasDiv, whatsappBtn.nextSibling);
            }

        })();
    