import Marquee from "react-fast-marquee";
import {clsx} from "clsx";

interface TextMarqueeProps {
    text: string;
    bgColor: string;
    textBg: string;
    textColor?: string;
    wrapperClassName?: string;
}

export default function TextMarquee({ text, bgColor, textBg, textColor, wrapperClassName }: TextMarqueeProps) {
    const repeatedText = Array(10).fill(text);

    return (
        <div className={clsx("w-full z-20", bgColor, wrapperClassName)}>
            <Marquee speed={90} pauseOnHover gradient={false}>
                {repeatedText.map((text, index) => (
                    <div
                        key={index}
                        className={clsx("my-1 px-3 py-3", textBg, textColor)}
                    >
                        <h3>{text}</h3>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}