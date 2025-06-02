//components/Button.tsx

type ButtonProps = {
    children: React.ReactNode;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({children, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

