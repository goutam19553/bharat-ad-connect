// HowItWorks.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'; // Import Three.js
import { gsap } from 'gsap'; // Import gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

// IMPORTANT: Ensure this line is present and the path is correct relative to this file.
import './HowItWorks.css'; // <--- This line imports the CSS for the component

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
    // Refs for DOM elements
    const webglBackgroundRef = useRef<HTMLDivElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const finalMessageRef = useRef<HTMLDivElement>(null);

    // Three.js variables
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let points: THREE.Points;
    let lines: THREE.LineSegments;
    let mouseX = 0;
    let mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    // --- Three.js Background Setup ---
    const init3DBackground = () => {
        if (!webglBackgroundRef.current) return;

        // Scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1f2937); // Match body background

        // Camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 50;

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Append renderer.domElement to the ref'd div
        if (webglBackgroundRef.current.firstChild) {
            webglBackgroundRef.current.removeChild(webglBackgroundRef.current.firstChild);
        }
        webglBackgroundRef.current.appendChild(renderer.domElement);

        // Create a grid of points and connect them with lines
        const numPoints = 200;
        const pointGeometry = new THREE.BufferGeometry();
        const positions: number[] = [];
        const colors: number[] = [];
        const linePositions: number[] = [];

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

        // Event listeners for mouse and resize
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - windowHalfX) * 0.005;
        mouseY = (event.clientY - windowHalfY) * 0.005;
    };

    const onWindowResize = () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate3DBackground = () => {
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
    };

    // --- GSAP ScrollTrigger Animations ---
    const setupScrollAnimations = () => {
        const steps = document.querySelectorAll('.step-card');
        const lines = document.querySelectorAll('.dotted-line');
        const finalMessage = finalMessageRef.current;

        // Clear existing ScrollTriggers to prevent duplicates on re-render
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

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
                            // Use window.scrollY for accurate absolute positioning
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
        if (finalMessage) {
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


        // Animate slogans into view
        const slogans = document.querySelectorAll('.slogan-section h3, .slogan-section p');
        slogans.forEach(slogan => {
            gsap.fromTo(slogan,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: slogan,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse",
                        // markers: true
                    }
                }
            );
        });
    };

    useEffect(() => {
        // Initialize Three.js and animations on component mount
        init3DBackground();
        animate3DBackground(); // Start animation loop

        // Setup scroll animations after DOM is rendered
        // A small timeout ensures all elements are fully laid out
        const timeoutId = setTimeout(() => {
            setupScrollAnimations();
        }, 100); // Give it a little time for layout calculations

        // Cleanup function for Three.js and event listeners
        return () => {
            if (renderer && webglBackgroundRef.current) {
                webglBackgroundRef.current.removeChild(renderer.domElement);
                renderer.dispose();
                scene.clear();
            }
            document.removeEventListener('mousemove', onDocumentMouseMove);
            window.removeEventListener('resize', onWindowResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
            clearTimeout(timeoutId);
        };
    }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

    return (
        <div className="how-it-works-page-container">
            {/* Three.js Background Canvas */}
            <div id="webgl-background" ref={webglBackgroundRef}></div>

            <div className="content-container min-h-screen flex flex-col justify-center items-center" ref={contentContainerRef}>
                <h1 className="mt-16">How It Works</h1>

                <div className="how-it-works-steps w-full flex flex-col items-center">
                    {/* Step 1 */}
                    <div className="step-wrapper" id="step-1-wrapper">
                        <div className="step-card" id="step-1">
                            <div className="step-number-circle">1</div>
                            <div className="step-content">
                                <h2><i className="fas fa-user-plus"></i> Sign Up & Define Campaign</h2>
                                <p>Establish your advertiser profile, specify your desired ad format (e.g., wallscapes in Koramangala, transit ads on metro lines), and set precise campaign parameters such as location targeting within Bengaluru, budget allocation, and duration.</p>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Dotted Line 1-2 */}
                    <div className="dotted-line line-vertical" id="line-1-2"></div>

                    {/* Step 2 */}
                    <div className="step-wrapper" id="step-2-wrapper">
                        <div className="step-card" id="step-2">
                            <div className="step-number-circle">2</div>
                            <div className="step-content">
                                <h2><i className="fas fa-map-marked-alt"></i> Discover & Select Ad Spaces</h2>
                                <p>Navigate an intuitive digital map showcasing available advertising locations across Bengaluru and beyond. Filter options by specific areas, estimated footfall, user ratings, and gain realistic previews through Augmented Reality or 360° views before finalizing your booking.</p>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Dotted Line 2-3 */}
                    <div className="dotted-line line-vertical" id="line-2-3"></div>

                    {/* Step 3 */}
                    <div className="step-wrapper" id="step-3-wrapper">
                        <div className="step-card" id="step-3">
                            <div className="step-number-circle">3</div>
                            <div className="step-content">
                                <h2><i className="fas fa-upload"></i> Upload Creative Assets & Preview</h2>
                                <p>Seamlessly upload your image or video advertisements. Utilize our advanced Ad Preview Tool to visualize how your creatives will appear in various real-world formats, including building facades, hoardings along Outer Ring Road, and vehicle wraps.</p>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Dotted Line 3-4 */}
                    <div className="dotted-line line-vertical" id="line-3-4"></div>

                    {/* Step 4 */}
                    <div className="step-wrapper" id="step-4-wrapper">
                        <div className="step-card" id="step-4">
                            <div className="step-number-circle">4</div>
                            <div className="step-content">
                                <h2><i className="fas fa-check-circle"></i> Review & Secure Payment</h2>
                                <p>Receive a comprehensive campaign summary detailing projected reach within your target demographics in Bengaluru and transparent pricing. Complete your secure payment process and instantly access your invoice and dedicated campaign management dashboard.</p>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Dotted Line 4-5 */}
                    <div className="dotted-line line-vertical" id="line-4-5"></div>

                    {/* Step 5 */}
                    <div className="step-wrapper" id="step-5-wrapper">
                        <div className="step-card" id="step-5">
                            <div className="step-number-circle">5</div>
                            <div className="step-content">
                                <h2><i className="fas fa-chart-line"></i> Monitor, Analyze & Optimize Performance</h2>
                                <p>Leverage interactive heatmaps and AI-powered analytics to track your campaign's effectiveness in real-time. Gain insights into audience engagement, make data-driven adjustments, download detailed performance reports, and benefit from AI-driven recommendations to maximize your ROI.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New "YOUR AD IS READY" section */}
                <div className="final-message" ref={finalMessageRef}>
                    YOUR AD IS READY
                </div>

                {/* Slogan Section */}
                <div className="slogan-section">
                    <h3>Reach Your Audience, Effortlessly.</h3>
                    <p>Connect with your target market across India and beyond through impactful out-of-home advertising.</p>
                    <h3>Data-Driven Campaigns, Real-World Impact.</h3>
                    <p>Optimize your advertising spend and achieve measurable results with our advanced analytics and intuitive platform.</p>
                    <h3>Innovate Your Outreach.</h3>
                    <p>From dynamic digital displays to captivating drone advertising, explore cutting-edge advertising solutions.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
