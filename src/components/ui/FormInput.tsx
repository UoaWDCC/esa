import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    error?: FieldError;
    className?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ placeholder, error, className, ...rest }, ref) => {
        return (
            <div className="mb-4">
                <input
                    ref={ref}
                    placeholder={placeholder}
                    className={clsx(`border border-white rounded-2xl p-1 px-3 placeholder:text-white`, className)}
                    {...rest}
                />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>
        );
    }
);

FormInput.displayName = "FormInput";
export default FormInput;