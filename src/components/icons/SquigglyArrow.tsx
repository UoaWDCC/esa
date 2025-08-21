"use client"
import React, { useEffect, useState } from "react";

export default function SquigglyArrow() {
    const [phase, setPhase] = useState(0);
    const width = 85;
    const height = 100;
    const amplitude = 10;
    const frequency = 0.1;
    const arrowLength = 20;
    const arrowWidth = 10;

    useEffect(() => {
        const id = requestAnimationFrame(function animate() {
            setPhase(prev => prev + 0.08);
            requestAnimationFrame(animate);
        });
        return () => cancelAnimationFrame(id);
    }, []);

    // calculate wave path
    const points: string[] = [];
    for (let x = 0; x <= width - (arrowLength - 17); x++) {
        const y = amplitude * Math.sin(frequency * x + phase) + height / 2;
        points.push(`${x},${y}`);
    }
    const pathData = "M" + points.join(" L"); // M: move to, L: line to

    // calculate position of arrowhead (attach at the end of tail path)
    const endX = width - (arrowLength - 16); // end of wave path
    const endY = amplitude * Math.sin(frequency * endX + phase) + height / 2;
    const prevX = endX - 1;
    const prevY = amplitude * Math.sin(frequency * prevX + phase) + height / 2;
    const angle = Math.atan2(endY - prevY, endX - prevX);

    // tip in direction of movement
    const tipX = endX + arrowLength * Math.cos(angle);
    const tipY = endY + arrowLength * Math.sin(angle);

    const arrowPoints = [
        [tipX, tipY],
        [endX + arrowWidth * Math.sin(angle), endY - arrowWidth * Math.cos(angle)],
        [endX - arrowWidth * Math.sin(angle), endY + arrowWidth * Math.cos(angle)],
    ]
        .map(p => p.join(","))
        .join(" ");

    return (
        <svg width={width + arrowLength} height={height}>
            <path d={pathData} stroke="#FFFFFF" strokeWidth={5} fill="none" />
            <polygon points={arrowPoints} fill="#FFFFFF" />
        </svg>
    );
}