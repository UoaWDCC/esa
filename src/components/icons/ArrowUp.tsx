import {FC, SVGProps} from "react";

interface ArrowUpProps extends SVGProps<SVGSVGElement> {}

const ArrowUp:FC<ArrowUpProps> = (props) => {
    return (
        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M0.46967 8.96967C0.176777 9.26256 0.176777 9.73744 0.46967 10.0303C0.762563 10.3232 1.23744 10.3232 1.53033 10.0303L0.46967 8.96967ZM9.75 1.5C9.75 1.08579 9.41421 0.75 9 0.750001L2.25 0.75C1.83579 0.75 1.5 1.08579 1.5 1.5C1.5 1.91421 1.83579 2.25 2.25 2.25H8.25V8.25C8.25 8.66421 8.58579 9 9 9C9.41421 9 9.75 8.66421 9.75 8.25L9.75 1.5ZM1 9.5L1.53033 10.0303L9.53033 2.03033L9 1.5L8.46967 0.96967L0.46967 8.96967L1 9.5Z"
                fill="currentColor"/>
        </svg>

    );
}

export default ArrowUp