import { SelectHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface FormSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
    className?: string;
    label?: string;
    name: string;
    error?: FieldError;
    options: Array<{ value: string; label: string }>;
    placeholder?: string;
    showTooltip?: boolean;
    tooltip?: string;
    required?: boolean;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
    (
        { className, label, error, options, placeholder, showTooltip, tooltip, required, ...rest },
        ref,
    ) => {
        const [isHovered, setIsHovered] = useState(false);
        return (
            <div className="mb-2">
                {/* Parent flex row for Label and Tooltip */}
                <div className="flex items-center pl-3 mb-1">
                    {/* Label Element with Error Asterisk */}
                    <div className="flex">
                        <label className="block font-medium">{label}</label>
                        <p
                            className={cn(
                                'inline-block transition-all duration-50 h-5',
                                error ? 'text-red-500 visible' : required ? 'visible' : 'invisible',
                            )}
                        >
                            *
                        </p>
                    </div>

                    {/* Tooltip Element and logic */}
                    {showTooltip && (
                        <div
                            className="ml-auto relative text-xs"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="bg-slate-800 rounded-full w-4 h-4 flex justify-center cursor-pointer ">
                                ?
                            </div>
                            {isHovered && tooltip && (
                                <div className="absolute right-0 bottom-5 inline-block max-w-[40vw] w-max bg-black px-2 py-1 rounded z-10">
                                    {tooltip}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {/* Select Field Element */}
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
                <p
                    className={cn(
                        'px-3 transition-all duration-200 h-5',
                        error ? 'text-red-500 visible' : 'invisible',
                    )}
                >
                    {error?.message}
                </p>
            </div>
        );
    },
);

FormSelect.displayName = 'FormSelect';
export default FormSelect;
