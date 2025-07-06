import { SelectHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface FormSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
    className?: string;
    label?: string;
    name: string;
    error?: FieldError;
    options: Array<{ value: string; label: string }>;
    placeholder?: string;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
    ({ className, label, error, options, placeholder, ...rest }, ref) => {
        return (
            <div className="mb-4">
                <label className="block mb-1 font-medium px-3">{label}</label>
                <select
                    ref={ref}
                    defaultValue={placeholder ? '' : undefined}
                    className={cn(
                        'border border-white rounded-2xl py-1.5 px-3 bg-transparent',
                        className,
                    )}
                    {...rest}
                >
                    {placeholder && (
                        <option value="" disabled className="text-gray-500">
                            {placeholder}
                        </option>
                    )}

                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="text-black">
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>
        );
    },
);

FormSelect.displayName = 'FormSelect';
export default FormSelect;
