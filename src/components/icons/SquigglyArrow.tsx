"use client"
import React, { useRef, useEffect, useState } from "react";

export default function SquigglyArrow() {
    const [phase, setPhase] = useState(0);
    const width = 150;
    const height = 100;
    const amplitude = 10;
    const frequency = 0.1;
    const arrowLength = 20;
    const arrowWidth = 10;

    useEffect(() => {
        const id = requestAnimationFrame(function animate() {
            setPhase(prev => prev + 0.07);
            requestAnimationFrame(animate);
        });
        return () => cancelAnimationFrame(id);
    }, []);

    // calculate wave path
    const points: string[] = [];
    for (let x = 0; x <= width - (arrowLength - 15); x++) {
        const y = amplitude * Math.sin(frequency * x + phase) + height / 2;
        points.push(`${x},${y}`);
    }
    const pathData = "M" + points.join(" L"); // M: move to, L: line to

    // calculate position of arrowhead
    const tipX = width;
    const tipY = amplitude * Math.sin(frequency * tipX + phase) + height / 2;
    const prevX = tipX - 1;
    const prevY = amplitude * Math.sin(frequency * prevX + phase) + height / 2;
    const angle = Math.atan2(tipY - prevY, tipX - prevX);
    const baseX = tipX - arrowLength * Math.cos(angle);
    const baseY = tipY - arrowLength * Math.sin(angle);
    
    const arrowPoints = [
        [tipX, tipY],
        [baseX + arrowWidth * Math.sin(angle), baseY - arrowWidth * Math.cos(angle)],
        [baseX - arrowWidth * Math.sin(angle), baseY + arrowWidth * Math.cos(angle)],
    ]
        .map(p => p.join(","))
        .join(" ");

    return (
        <svg width={width} height={height}>
            <path d={pathData} stroke="#FFFFFF" strokeWidth={5} />
            <polygon points={arrowPoints} fill="#FFFFFF" />
        </svg>
    );
}