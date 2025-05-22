"use client"
import { useState } from "react";

export default function LinkTree() {
    // hoveredButton can either be string or null
    // initial value is null
    // current state: hoveredButton
    // function that allows you to update current state: setHoveredButton
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);
    // buttonName is a string parameter 
    const getBoxShadow = (buttonName: string) => {
        return hoveredButton === buttonName
          ? "inset 2px 2px 2px #00000026, inset -2px -2px 2px #ffe7f8"  // when hovered
          : "-5px -5px 10px #ffe7f8, 5px 5px 10px #00000026";           // when not hovered
    };

    return (
        <>
        <div className="flex flex-col gap-4 items-center h-100 w-70 bg-white rounded-2xl shadow-2xl">
            
            <img 
                src="https://media-hosting.imagekit.io/5cb01a593941466f/seashell.jpg?Expires=1840069853&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KDFpp4pQbaELcjoMR93mrpyr2XqVFrSqJMcnDZmE099uxHsW69eYUj1L-ehk6pxd7PkfBX1-IZlZhW3W7KPp~2n1hC32o2E9U3E2MKPW~wpHuFUPGvZs1ehDFc6KRc4vI9f5gpbsu3fpVMQ2sfmudjc3s7I2RZs9YKJwhThMLKcRr0oezszR4waW3s~kbuFfUYQZimwY2KCZlmWqPNLkaE3zofk~2ODVnpHtcjkWsnm1QbTPhZ506pU6fuNY-Gf6bsq2B-cZ--8oPzcCZ9XlsEm1wXu507wjr1K8R8-7HOJjuYkPon-4HaO6SIRHqZq7v7Cgva92MVAjPyi1RkKuow__"
                className=" w-25 h-25 rounded-full"
            ></img>

            <div className="text-2xl text-black font-serif">Jey Cin Lam</div>
            <div className="text-pink-300 font-serif">Auckland, New Zealand</div>

            <a href="https://www.linkedin.com/in/jey-cin-lam-830851281" target="_blank">
                <button 
                    onMouseEnter={() => setHoveredButton("linkedin")}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{ boxShadow: getBoxShadow("linkedin") }}
                    className="h-8 w-60 bg-white text-black font-serif rounded-lg hover:text-pink-300"
                >
                    Linkedin
                </button>
            </a>

            <a href="https://github.com/jcinnn" target="_blank">
                <button 
                    onMouseEnter={() => setHoveredButton("github")}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{ boxShadow: getBoxShadow("github") }}
                    className="h-8 w-60 bg-white text-black font-serif rounded-lg hover:text-pink-300"
                >
                    GitHub
                </button>
            </a>

            <a href="https://www.instagram.com/jcinnnn/profilecard/?igsh=dHI3NTZjaDZ2aW1i" target="_blank">
                <button 
                    onMouseEnter={() => setHoveredButton("instagram")}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{ boxShadow: getBoxShadow("instagram") }}
                    className="h-8 w-60 bg-white text-black font-serif rounded-lg hover:text-pink-300"
                >
                    Instagram
                </button>
            </a>

            <a href="https://www.youtube.com/@jcinnn" target="_blank">
                <button 
                    onMouseEnter={() => setHoveredButton("youtube")}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{ boxShadow: getBoxShadow("youtube") }}
                    className="h-8 w-60 bg-white text-black font-serif rounded-lg hover:text-pink-300"
                >
                    Youtube
                </button>
            </a>
        
        </div>
        </>
    )
}

