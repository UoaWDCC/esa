import { TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    error?: FieldError;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
    ({ className, error, ...rest }, ref) => {
        return (
            <div className="mb-4">
                <textarea
                    ref={ref}
                    className={clsx(`border border-white rounded-2xl p-1 px-3 placeholder:text-white`, className)}
                    rows={4}
                    {...rest}
                />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>
        );
    }
);

FormTextarea.displayName = "FormTextarea";
export default FormTextarea;