import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";
import {cn} from "@/lib/utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder: string;
    error?: FieldError;
    className?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, placeholder, error, className, ...rest }, ref) => {
        return (
            <div className="mb-4">
                <label className="block mb-1 font-medium px-3">
                    {label}
                </label>
                <input
                    ref={ref}
                    placeholder={placeholder}
                    className={cn(`border border-white rounded-2xl p-1 px-3 placeholder:text-white`, className)}
                    {...rest}
                />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>
        );
    }
);

FormInput.displayName = "FormInput";
export default FormInput;