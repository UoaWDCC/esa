"use client"
import React, { useEffect, useState } from "react";

interface SquigglyArrowProps {
    width?: number;
    height?: number;
    amplitude?: number;
    frequency?: number;
    arrowLength?: number;
    arrowWidth?: number;
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
}

export default function SquigglyArrow({
    width = 85,
    height = 100,
    amplitude = 10,
    frequency = 0.1,
    arrowLength = 20,
    arrowWidth = 10,
    strokeColor = "#FFFFFF",
    strokeWidth = 5,
    fillColor = "#FFFFFF",
}: SquigglyArrowProps) {
    const [phase, setPhase] = useState(0);

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
            <path d={pathData} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
            <polygon points={arrowPoints} fill={fillColor} />
        </svg>
    );
}