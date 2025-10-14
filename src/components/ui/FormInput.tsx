import { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder: string;
    error?: FieldError;
    className?: string;
    tooltip?: string;
    showTooltip?: boolean;
    required?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, placeholder, error, className, tooltip, showTooltip, required, ...rest }, ref) => {
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
                {/* Input Field Element*/}
                <input
                    ref={ref}
                    placeholder={placeholder}
                    className={cn(
                        `border border-white rounded-2xl p-1 px-3 placeholder:text-white bg-primary-grey/80`,
                        className,
                    )}
                    {...rest}
                />

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

FormInput.displayName = 'FormInput';
export default FormInput;
