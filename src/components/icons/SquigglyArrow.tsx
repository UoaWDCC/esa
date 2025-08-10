"use client"
import React, { useRef, useEffect } from "react";

export default function SquigglyArrow() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let phase = 0; // makes sine wave move
        const amplitude = 10;
        const frequency = 0.1;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // clear old frame

            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);

            // draw sin wave
            for (let x = 0; x <= canvas.width; x++) {
                const y =
                    amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
                ctx.lineTo(x, y);
            }

            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 5;
            ctx.stroke();

            // calculate points for arrowhead
            const endX = canvas.width;
            const endY = amplitude * Math.sin(frequency * endX + phase) + canvas.height / 2;

            const prevX = endX - 1;
            const prevY = amplitude * Math.sin(frequency * prevX + phase) + canvas.height / 2;

            // calculate angle of the line at the end (tangent)
            const angle = Math.atan2(endY - prevY, endX - prevX);

            // draw arrowhead
            const arrowLength = 20;
            const arrowWidth = 10;

            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();

            // point of arrowhead
            ctx.moveTo(endX, endY);

            // two base points of the arrowhead triangle
            ctx.lineTo(
                endX - arrowLength * Math.cos(angle - Math.PI / 6),
                endY - arrowLength * Math.sin(angle - Math.PI / 6)
            );
            ctx.lineTo(
                endX - arrowLength * Math.cos(angle + Math.PI / 6),
                endY - arrowLength * Math.sin(angle + Math.PI / 6)
            );

            ctx.closePath();
            ctx.fill();

            phase += 0.1;
            requestAnimationFrame(draw);
        };

        draw();
    }, []);

    return <canvas ref={canvasRef} width={150} height={100} />;
}

