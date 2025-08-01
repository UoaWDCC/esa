import {ButtonHTMLAttributes, forwardRef} from "react";
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import Link from "next/link";

const buttonVariants = cva(
    "rounded-3xl hover:cursor-pointer transition",
    {
        variants: {
            variant: {
                default: "bg-accent text-black font-roboto-mono hover:bg-accent-light",
                clear: "text-primary-white border border-primary-white hover:bg-primary-white hover:text-black"
                // add more variants here, such as dark, disabled, destructive etc etc
            },
            size: {
                // change size of buttons here
                default: "px-6 py-2",
                sm: "px-3 py-1",
                lg: "px-8 py-2 text-2xl"
            },
            disabled: {
                true: "opacity-50 cursor-default pointer-events-none hover:bg-none hover:text-primary-white",
                false: ""
            }
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
    href?: string;
    disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, href, variant, size, disabled = false, ...props }, ref) => {
        const classes = cn(buttonVariants({ variant, size, disabled, className }));
        
        if (href) {
            if (disabled) {
                return (
                    <button
                        className={classes}
                        disabled
                        ref={ref}
                        {...props}
                        type={props.type || "button"}
                    >
                        {children}
                    </button>
                );
            }
            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, size, disabled, className }))} // <-- add disabled here
                    onClick={disabled ? (e) => e.preventDefault() : undefined}  // prevent clicking if disabled
                    aria-disabled={disabled}  // for accessibility
                    tabIndex={disabled ? -1 : 0} // prevent focus if disabled
                >
                    {children}
                </Link>
            )
        }
        return (
            <button
                className={cn(buttonVariants({ variant, size, disabled, className }))}
                disabled={disabled}
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