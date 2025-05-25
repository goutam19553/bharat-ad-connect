<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How It Works - Your Ad Platform</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            overflow-x: hidden; /* Prevent horizontal scroll */
            background-color: #1f2937; /* Updated to Gray 800 */
            color: #e0e0e0; /* Light text color */
        }

        #webgl-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1; /* Send to background */
            opacity: 0.7; /* Slightly transparent */
        }

        .content-container {
            position: relative;
            z-index: 1; /* Ensure content is above background */
            padding: 2rem;
            max-width: 90%;
            margin: 0 auto;
        }

        h1 {
            font-size: 4.5rem; /* Made bigger as requested */
            font-weight: 700;
            text-align: center;
            margin-bottom: 5rem; /* Adjusted margin for larger size */
            background: linear-gradient(90deg, #8a2be2, #00ffff); /* Gradient text */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.05em;
            text-shadow: 0 0 15px rgba(138, 43, 226, 0.5); /* Subtle glow */
        }

        .step-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 5rem; /* Space between steps */
            position: relative;
        }

        .step-card {
            background: rgba(255, 255, 255, 0.08); /* Frosted glass effect */
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 1.5rem; /* More rounded */
            padding: 2.5rem;
            max-width: 700px;
            width: 100%;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .step-card:hover {
            transform: translateY(-8px) scale(1.01);
            box-shadow: 0 15px 40px rgba(0, 255, 255, 0.2); /* Subtle blue glow on hover */
        }

        .step-number-circle {
            min-width: 80px;
            min-height: 80px;
            border-radius: 50%;
            background: linear-gradient(45deg, #8a2be2, #00ffff); /* Gradient for number circle */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); /* Stronger glow */
            transition: transform 0.3s ease-in-out;
        }

        .step-card:hover .step-number-circle {
            transform: scale(1.1);
        }

        .step-content h2 {
            font-size: 2.2rem;
            font-weight: 600;
            color: #00ffff; /* Accent color for headings */
            margin-bottom: 0.8rem;
        }

        .step-content p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #c0c0c0;
        }

        /* Specific line positioning for vertical connection - now dotted */
        .line-vertical {
            width: 4px;
            height: 0; /* Will animate height */
            left: 50%;
            transform: translateX(-50%);
            /* top and bottom will be set by JS dynamically */
            /* Using repeating-linear-gradient for dotted effect */
            background: repeating-linear-gradient(to bottom,
                #8a2be2 0px, /* Start of dot color 1 */
                #00ffff 4px, /* Transition to dot color 2, 4px long dot */
                transparent 4px, /* Start of transparent gap */
                transparent 12px /* End of transparent gap, total 12px repeat cycle */
            );
            opacity: 0;
            border-radius: 0; /* No border-radius for a dotted line */
            z-index: -1; /* Behind the cards */
        }

        .final-message {
            font-size: 4rem; /* Big and impactful */
            font-weight: 700;
            text-align: center;
            margin-top: 8rem; /* Space from last step */
            margin-bottom: 8rem; /* Space from bottom */
            background: linear-gradient(90deg, #00ffff, #8a2be2); /* Reversed gradient for variety */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.05em;
            text-shadow: 0 0 20px rgba(0, 255, 255, 0.6); /* Stronger glow */
            opacity: 0; /* Initially hidden */
            transform: translateY(50px); /* Slide up effect */
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            h1 {
                font-size: 3rem; /* Adjusted for mobile */
                margin-bottom: 3rem;
            }

            .step-card {
                flex-direction: column;
                text-align: center;
                padding: 1.5rem;
            }

            .step-number-circle {
                min-width: 60px;
                min-height: 60px;
                font-size: 2rem;
                margin-bottom: 1rem;
            }

            .step-content h2 {
                font-size: 1.8rem;
            }

            .step-content p {
                font-size: 1rem;
            }

            .step-wrapper {
                margin-bottom: 3rem;
            }

            /* Adjust vertical line positioning for smaller screens */
            .line-vertical {
                left: 50%; /* Keep centered */
            }

            .final-message {
                font-size: 2.5rem; /* Adjusted for mobile */
                margin-top: 4rem;
                margin-bottom: 4rem;
            }
        }
    </style>
</head>
<body class="bg-gray-900 text-gray-100">
    <div id="webgl-background"></div>

    <div class="content-container min-h-screen flex flex-col justify-center items-center">
        <h1 class="mt-16">How It Works</h1>

        <div class="how-it-works-steps w-full flex flex-col items-center">
            <div class="step-wrapper" id="step-1-wrapper">
                <div class="step-card" id="step-1">
                    <div class="step-number-circle">1</div>
                    <div class="step-content">
                        <h2>Sign Up & Set Goals</h2>
                        <p>Create an advertiser account, choose ad type (wall, hoarding, transit, drone, etc.), and define your goals like location, budget & duration.</p>
                    </div>
                </div>
            </div>

            <div class="dotted-line line-vertical" id="line-1-2"></div>

            <div class="step-wrapper" id="step-2-wrapper">
                <div class="step-card" id="step-2">
                    <div class="step-number-circle">2</div>
                    <div class="step-content">
                        <h2>Browse & Select Ad Spaces</h2>
                        <p>Explore ad spaces on an interactive map. Filter by city, foot traffic, ratings. Preview in AR or 360° before booking.</p>
                    </div>
                </div>
            </div>

            <div class="dotted-line line-vertical" id="line-2-3"></div>

            <div class="step-wrapper" id="step-3-wrapper">
                <div class="step-card" id="step-3">
                    <div class="step-number-circle">3</div>
                    <div class="step-content">
                        <h2>Upload Your Ad Creatives</h2>
                        <p>Upload image/video creatives. Use our Ad Preview Tool to simulate your ad in real-world formats, walls, hoardings, and vehicles.</p>
                    </div>
                </div>
            </div>

            <div class="dotted-line line-vertical" id="line-3-4"></div>

            <div class="step-wrapper" id="step-4-wrapper">
                <div class="step-card" id="step-4">
                    <div class="step-number-circle">4</div>
                    <div class="step-content">
                        <h2>Confirm & Pay</h2>
                        <p>Get a clear summary, projected reach, and make secure payments. Instantly receive invoice & campaign dashboard access.</p>
                    </div>
                </div>
            </div>

            <div class="dotted-line line-vertical" id="line-4-5"></div>

            <div class="step-wrapper" id="step-5-wrapper">
                <div class="step-card" id="step-5">
                    <div class="step-number-circle">5</div>
                    <div class="step-content">
                        <h2>Track, Analyze & Optimize</h2>
                        <p>Use heatmaps & AI analytics to monitor performance. Pause/edit campaigns, download reports, and boost ROI with AI suggestions.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="final-message" id="final-message">
            YOUR AD IS READY
        </div>
    </div>

    <script>
        // Ensure GSAP and ScrollTrigger are registered
        gsap.registerPlugin(ScrollTrigger);

        // --- Three.js Background Setup ---
        let scene, camera, renderer, points, lines;
        let mouseX = 0, mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        function init3DBackground() {
            // Scene
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x1f2937); // Match updated body background

            // Camera
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 50;

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('webgl-background').appendChild(renderer.domElement);

            // Create a grid of points and connect them with lines
            const numPoints = 200;
            const pointGeometry = new THREE.BufferGeometry();
            const positions = [];
            const colors = [];
            const linePositions = [];

            const color1 = new THREE.Color(0x8a2be2); // Purple
            const color2 = new THREE.Color(0x00ffff); // Cyan

            // Generate random points
            for (let i = 0; i < numPoints; i++) {
                const x = (Math.random() - 0.5) * 200;
                const y = (Math.random() - 0.5) * 200;
                const z = (Math.random() - 0.5) * 200;
                positions.push(x, y, z);
                colors.push(color1.r, color1.g, color1.b); // Initial color for points
            }

            pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            const pointMaterial = new THREE.PointsMaterial({
                size: 0.5,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            });
            points = new THREE.Points(pointGeometry, pointMaterial);
            scene.add(points);

            // Connect nearby points with lines
            const maxDistance = 20; // Max distance for points to be connected
            for (let i = 0; i < numPoints; i++) {
                const p1 = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                for (let j = i + 1; j < numPoints; j++) {
                    const p2 = new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
                    if (p1.distanceTo(p2) < maxDistance) {
                        linePositions.push(p1.x, p1.y, p1.z);
                        linePositions.push(p2.x, p2.y, p2.z);
                    }
                }
            }

            const lineGeometry = new THREE.BufferGeometry();
            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
            const lineMaterial = new THREE.LineBasicMaterial({
                color: 0x00ffff, // Cyan lines
                transparent: true,
                opacity: 0.3,
                linewidth: 1 // Note: linewidth is not supported on all platforms
            });
            lines = new THREE.LineSegments(lineGeometry, lineMaterial);
            scene.add(lines);

            // Lights
            const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(0, 1, 0);
            scene.add(directionalLight);

            // Mouse interaction for camera rotation
            document.addEventListener('mousemove', onDocumentMouseMove, false);
            window.addEventListener('resize', onWindowResize, false);
        }

        function onDocumentMouseMove(event) {
            mouseX = (event.clientX - windowHalfX) * 0.005;
            mouseY = (event.clientY - windowHalfY) * 0.005;
        }

        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate3DBackground() {
            requestAnimationFrame(animate3DBackground);

            // Animate points and lines
            if (points) {
                points.rotation.x += 0.0005;
                points.rotation.y += 0.0008;
            }
            if (lines) {
                lines.rotation.x += 0.0005;
                lines.rotation.y += 0.0008;
            }

            // Smooth camera movement based on mouse
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }

        // --- GSAP ScrollTrigger Animations ---
        function setupScrollAnimations() {
            const steps = document.querySelectorAll('.step-card');
            const lines = document.querySelectorAll('.dotted-line');
            const finalMessage = document.getElementById('final-message');

            steps.forEach((step, index) => {
                // Animate steps into view
                gsap.fromTo(step,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 80%", // When top of step is 80% from top of viewport
                            end: "bottom 20%",
                            toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
                            // markers: true // Uncomment for debugging scroll triggers
                        }
                    }
                );

                // Animate dotted lines
                if (index < lines.length) {
                    const line = lines[index];
                    ScrollTrigger.create({
                        trigger: step,
                        start: "bottom center", // When the bottom of the current step hits the center of the viewport
                        onEnter: () => {
                            // Get the positions dynamically
                            const currentStepRect = step.getBoundingClientRect();
                            const nextStepRect = steps[index + 1] ? steps[index + 1].getBoundingClientRect() : null;

                            if (nextStepRect) {
                                // Position the line correctly between the two steps
                                const lineTop = currentStepRect.bottom + window.scrollY - 10; // 10px buffer
                                const lineHeight = (nextStepRect.top + window.scrollY) - lineTop + 20; // 20px buffer

                                gsap.set(line, {
                                    position: 'absolute',
                                    top: lineTop,
                                    height: 0, // Start with zero height
                                    opacity: 1 // Make visible
                                });

                                gsap.to(line, {
                                    height: lineHeight,
                                    duration: 1.5,
                                    ease: "power2.out",
                                    delay: 0.2 // Small delay after step appears
                                });
                            }
                        },
                        onLeaveBack: () => {
                            // Reverse the line animation when scrolling back up
                            gsap.to(line, {
                                height: 0,
                                duration: 0.8,
                                ease: "power2.in"
                            });
                        },
                        // markers: true
                    });
                }
            });

            // Animate the final message into view
            gsap.fromTo(finalMessage,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: finalMessage,
                        start: "top 80%", // When top of message is 80% from top of viewport
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                        // markers: true
                    }
                }
            );
        }

        // Initialize Three.js and animations when the window loads
        window.onload = function() {
            init3DBackground();
            animate3DBackground();
            setupScrollAnimations();
        };
    </script>
</body>
</html>
