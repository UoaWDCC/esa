import React from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

const titleVariants = cva(
    "bg-primary-red font-reservoir-grunge rounded-2xl text-white px-4.5 py-2 w-fit",
    {
        variants: {
            size: {
                md: "",
                lg: "text-2xl",
            },
        },
        defaultVariants: {
            size: "lg",
        },
    }
);

type TitleProps = {
    children: React.ReactNode;
    className?: string;
} & VariantProps<typeof titleVariants>

const Title: React.FC<TitleProps> = ({
                                         children,
                                         className,
                                         size,
                                     }) => {
    return (
        <div className={cn(titleVariants({ size }), className)}>
            {children}
        </div>
    );
};

export default Title;