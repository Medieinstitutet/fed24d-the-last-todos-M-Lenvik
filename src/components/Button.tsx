//components/Button.tsx
type ButtonProps = {
    children: React.ReactNode;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      className?: string;
};

export const Button = ({children, onClick, className ="" }: ButtonProps) => {
      // Grundstil för alla knappar
  const baseStyles = "font-caveat text-2xl px-4 py-1 border-2 mt-4 border-black rounded-md shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-150";
    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
            {children}
        </button>
    );
}