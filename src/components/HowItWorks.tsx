// src/components/HowItWorks/HowItWorks.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import './howitworks.css';

const HowItWorks: React.FC = () => {
  const webglBackgroundRef = useRef<HTMLDivElement>(null);
  const finalMessageRef = useRef<HTMLDivElement>(null);

  // Declare Three.js variables outside init to access in handlers
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let points: THREE.Points;
  let lines: THREE.LineSegments;
  let mouseX = 0;
  let mouseY = 0;

  // Helper to get container size or fallback
  const getContainerSize = () => {
    if (webglBackgroundRef.current) {
      return {
        width: webglBackgroundRef.current.clientWidth,
        height: webglBackgroundRef.current.clientHeight,
      };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const init3DBackground = () => {
    if (!webglBackgroundRef.current) return;

    const { width, height } = getContainerSize();

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1f2937);

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x1f2937, 1); // match background

    // Clear existing canvas if any (important for React hot reload)
    if (webglBackgroundRef.current.firstChild) {
      webglBackgroundRef.current.removeChild(webglBackgroundRef.current.firstChild);
    }
    webglBackgroundRef.current.appendChild(renderer.domElement);

    // Points and lines setup (unchanged)
    const numPoints = 200;
    const pointGeometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    const linePositions: number[] = [];

    const color1 = new THREE.Color(0x8a2be2);
    const color2 = new THREE.Color(0x00ffff);

    for (let i = 0; i < numPoints; i++) {
      const x = (Math.random() - 0.5) * 100; // reduced size range to 100 (was 200) for better fit
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      positions.push(x, y, z);
      colors.push(color1.r, color1.g, color1.b);
    }

    pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const pointMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    points = new THREE.Points(pointGeometry, pointMaterial);
    scene.add(points);

    const maxDistance = 20;
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
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3,
      linewidth: 1,
    });

    lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Events
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
  };

  const onDocumentMouseMove = (event: MouseEvent) => {
    const { width, height } = getContainerSize();
    mouseX = (event.clientX - width / 2) * 0.005;
    mouseY = (event.clientY - height / 2) * 0.005;
  };

  const onWindowResize = () => {
    if (!webglBackgroundRef.current) return;

    const { width, height } = getContainerSize();

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  };

  const animate3DBackground = () => {
    requestAnimationFrame(animate3DBackground);

    if (points) {
      points.rotation.x += 0.0005;
      points.rotation.y += 0.0008;
    }
    if (lines) {
      lines.rotation.x += 0.0005;
      lines.rotation.y += 0.0008;
    }

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  };

 // --- GSAP ScrollTrigger Animations ---
    const setupScrollAnimations = () => {
        // Select all step cards and dotted lines within this component
        const steps = document.querySelectorAll('.step-card');
        const lines = document.querySelectorAll('.dotted-line');
        const finalMessage = finalMessageRef.current; // Get the ref'd DOM element
        const slogans = document.querySelectorAll('.slogan-section h3, .slogan-section p');

        // IMPORTANT: Clear existing ScrollTriggers to prevent duplicates on re-render.
        // This is good practice in React's useEffect cleanup or when re-running animations.
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Iterate over each step to apply animations
        steps.forEach((step, index) => {
            // Animate steps (cards) into view when they enter the viewport
            gsap.fromTo(step,
                { opacity: 0, y: 50, scale: 0.95 }, // Starting state (hidden, slightly below, slightly smaller)
                {
                    opacity: 1, // End state (fully visible)
                    y: 0,       // End state (original vertical position)
                    scale: 1,   // End state (original size)
                    duration: 1, // Animation duration
                    ease: "power3.out", // Easing function for smooth animation
                    scrollTrigger: {
                        trigger: step, // Element that triggers the animation
                        start: "top 80%", // When the top of the step is 80% down from the top of the viewport
                        end: "bottom 20%", // When the bottom of the step is 20% down from the top of the viewport
                        toggleActions: "play reverse play reverse", // Play on enter, reverse on leave, play on re-enter, reverse on re-leave
                        // markers: true // Uncomment this line during development to see ScrollTrigger markers on the page
                    }
                }
            );

            // Animate dotted lines connecting the steps
            // Only animate if there's a next step to connect to
            if (index < lines.length) {
                const line = lines[index]; // Get the current line element
                ScrollTrigger.create({
                    trigger: step, // The current step card triggers its connecting line
                    start: "bottom center", // When the bottom of the current step hits the center of the viewport
                    onEnter: () => {
                        // Dynamically calculate line position and height based on element positions
                        const currentStepRect = step.getBoundingClientRect();
                        const nextStepRect = steps[index + 1] ? steps[index + 1].getBoundingClientRect() : null;

                        if (nextStepRect) {
                            // Calculate absolute top position (current scroll + element's top relative to viewport)
                            const lineTop = currentStepRect.bottom + window.scrollY - 10; // 10px buffer from bottom of current card
                            // Calculate height needed to reach the top of the next card
                            const lineHeight = (nextStepRect.top + window.scrollY) - lineTop + 20; // 20px buffer into next card

                            // Set initial state of the line before animation
                            gsap.set(line, {
                                position: 'absolute', // Ensure absolute positioning for top/height calculation
                                top: lineTop,
                                height: 0, // Start with zero height to animate drawing effect
                                opacity: 1 // Make the line visible as it starts drawing
                            });

                            // Animate the line's height
                            gsap.to(line, {
                                height: lineHeight, // Animate to calculated height
                                duration: 1.5, // Animation duration
                                ease: "power2.out", // Easing function
                                delay: 0.2 // Small delay after the step card itself appears
                            });
                        }
                    },
                    onLeaveBack: () => {
                        // Reverse the line animation when scrolling back up
                        gsap.to(line, {
                            height: 0, // Shrink line back to zero
                            duration: 0.8, // Faster reverse animation
                            ease: "power2.in" // Different easing for reverse
                        });
                    },
                    // markers: true // Uncomment for debugging
                });
            }
        });

        // Animate the "YOUR AD IS READY" final message into view
        if (finalMessage) {
            gsap.fromTo(finalMessage,
                { opacity: 0, y: 50 }, // Start hidden and slightly below
                {
                    opacity: 1, // End visible
                    y: 0,       // End at original position
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
        slogans.forEach(slogan => {
            gsap.fromTo(slogan,
                { opacity: 0, y: 30 }, // Start hidden and slightly below
                {
                    opacity: 1, // End visible
                    y: 0,       // End at original position
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: slogan,
                        start: "top 90%", // When top of slogan is 90% from top of viewport
                        toggleActions: "play reverse play reverse",
                        // markers: true
                    }
                }
            );
        });
    };

    // useEffect hook to manage component lifecycle (mount and unmount)
    useEffect(() => {
        init3DBackground(); // Initialize Three.js scene on component mount
        animate3DBackground(); // Start the animation loop

        // Set up scroll animations after the DOM has rendered.
        // A small timeout ensures all elements are fully laid out and measured correctly by the browser.
        const timeoutId = setTimeout(() => {
            setupScrollAnimations();
        }, 100); // 100ms delay

        // Cleanup function: runs when the component unmounts
        return () => {
            if (renderer && webglBackgroundRef.current) {
                // Remove the canvas element from the DOM
                webglBackgroundRef.current.removeChild(renderer.domElement);
                // Dispose of Three.js resources
                renderer.dispose();
                scene.clear();
            }
            // Remove event listeners
            document.removeEventListener('mousemove', onDocumentMouseMove);
            window.removeEventListener('resize', onWindowResize);
            // Kill all ScrollTriggers created by this component to prevent memory leaks and conflicts
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            clearTimeout(timeoutId); // Clear the timeout if component unmounts early
        };
    }, []); // Empty dependency array means this effect runs only once on mount and once on unmount

    return (
        // The main container for the "How It Works" section, including its integrated 3D background
        <div className="how-it-works-page-container">
            {/* The 3D background canvas container */}
            <div id="webgl-background" ref={webglBackgroundRef}></div>

            {/* The main content container for the steps, messages, and slogans */}
            <div className="content-container min-h-screen flex flex-col justify-center items-center">
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
