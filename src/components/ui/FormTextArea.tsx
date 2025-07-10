import { TextareaHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    className?: string;
    error?: FieldError;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
    ({ label, className, error, ...rest }, ref) => {
        return (
            <div className="mb-4">
                <label className="block mb-1 font-medium px-3">{label}</label>
                <textarea
                    ref={ref}
                    className={cn(
                        `border border-white rounded-2xl p-1 px-3 placeholder:text-white`,
                        className,
                    )}
                    rows={4}
                    {...rest}
                />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>
        );
    },
);

FormTextarea.displayName = 'FormTextarea';
export default FormTextarea;
