import React, { useEffect, useRef } from 'react';
import './NeonNetwork.css';

const NeonNetwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const centralNode = container.querySelector('.central-node') as HTMLElement;
    const nodes = Array.from(container.querySelectorAll('.network-node:not(.central-node)')) as HTMLElement[];

    const drawConnections = () => {
      // Clear existing connections
      const existingConnections = container.querySelectorAll('.network-connection');
      existingConnections.forEach(conn => conn.remove());

      if (!centralNode) return;

      const centralRect = centralNode.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const centralX = centralRect.left + centralRect.width/2 - containerRect.left;
      const centralY = centralRect.top + centralRect.height/2 - containerRect.top;

      nodes.forEach(node => {
        const nodeRect = node.getBoundingClientRect();
        const nodeX = nodeRect.left + nodeRect.width/2 - containerRect.left;
        const nodeY = nodeRect.top + nodeRect.height/2 - containerRect.top;

        // Calculate distance and angle
        const dx = nodeX - centralX;
        const dy = nodeY - centralY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;

        // Create connection element
        const connection = document.createElement('div');
        connection.className = 'network-connection';
        connection.style.width = `${distance}px`;
        connection.style.left = `${centralX}px`;
        connection.style.top = `${centralY}px`;
        connection.style.transform = `rotate(${angle}deg)`;

        container.appendChild(connection);
      });
    };

    // Initial draw
    drawConnections();

    // Redraw on resize
    const resizeObserver = new ResizeObserver(drawConnections);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="network-section">
      <div className="network-container" ref={containerRef}>
        {/* Central Node */}
        <div className="network-node central-node">AI Analytics<br />Dashboard</div>
        
        {/* Surrounding Nodes */}
        <div className="network-node node-1">Government<br />Bodies</div>
        <div className="network-node node-2">Ad Agencies</div>
        <div className="network-node node-3">Research<br />Orgs</div>
        <div className="network-node node-4">Media<br />Companies</div>
        <div className="network-node node-5">Research<br />Orgs</div>
        <div className="network-node node-6">CMS<br />Platform</div>
        <div className="network-node node-7">Printing<br />Press</div>
        <div className="network-node node-8">CMS<br />Platform</div>
      </div>
    </section>
  );
};

export default NeonNetwork;
