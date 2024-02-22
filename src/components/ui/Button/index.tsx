import { twMerge } from 'tailwind-merge'
import { Spinner } from '../Spinner'

interface ButtonVariantProps {
    variant?: 'primary' | 'secondary' | 'black' | 'default',
}

interface ButtonClassProps
    extends ButtonVariantProps {
        className?: string,
        isLoading?: boolean,
}

export function buttonClass({
    variant,
    className,
    isLoading,
}: ButtonClassProps = { variant: 'default' }) {
    let defaultClassName = 'inline-flex h-11 px-4 items-center justify-center rounded-[6px] font-semibold border border-transparent'

    switch (variant) {
        case 'primary':
            defaultClassName = twMerge(defaultClassName, 'bg-primary text-white', className)
            break
        case 'secondary':
            defaultClassName = twMerge(defaultClassName, 'bg-secondary text-white', className)
            break
        case 'black':
            defaultClassName = twMerge(defaultClassName, 'bg-black text-white', className)
            break
        case 'default':
            defaultClassName = twMerge(defaultClassName, 'border-black', className)
            break
        default:
            defaultClassName = twMerge(defaultClassName, className)
    }

    if (isLoading) {
        defaultClassName = twMerge(defaultClassName, 'relative text-transparent', className)
    }

    return defaultClassName
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        isLoading?: boolean,
    }

export function Button({
    children,
    className,
    variant,
    isLoading,
    ...rest
}: ButtonProps & ButtonVariantProps) {
    return (
        <button className={buttonClass({ className, variant, isLoading })} {...rest}>
            {children}
            {isLoading && (
                <span className="flex absolute inset-0 z-10 items-center justify-center">
                    <Spinner width={24} fillColor="#CB2228" />
                </span>
            )}
        </button>
    )
}