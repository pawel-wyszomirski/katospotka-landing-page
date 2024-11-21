interface ScrollButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  targetId: string;
  children: React.ReactNode;
}

export const ScrollButton = ({ targetId, children, className, ...props }: ScrollButtonProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};