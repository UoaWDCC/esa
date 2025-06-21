import {ButtonHTMLAttributes, forwardRef} from "react";
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import Link from "next/link";

const buttonVariants = cva(
    "bg-accent text-black rounded-3xl hover:cursor-pointer transition",
    {
        variants: {
            variant: {
                default: "font-roboto-mono hover:bg-accent-light",
                // add more variants here, such as dark, disabled, destructive etc etc
            },
            size: {
                // change size of buttons here
                default: "px-6 py-2",
                sm: "",
                lg: "px-8 py-2 text-2xl"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, href, variant, size, ...props }, ref) => {
        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, size, className }))}
                >
                    {children}
                </Link>
            )
        }
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }