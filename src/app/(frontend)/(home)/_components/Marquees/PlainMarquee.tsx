import Marquee from "react-fast-marquee";

export default function PlainMarquee() {

    const text = ["JOIN ESA FOR SOMETHING FUN!", "JOIN ESA FOR SOMETHING NEW!", "JOIN ESA FOR SOMETHING SOCIAL!"];

    return (
        <Marquee speed={150}>
            {text.map((text, index) => (
                <div key={index} className="text-white mx-5">
                    <h1>{text}</h1>
                </div>
            ))}
        </Marquee>
    );
}