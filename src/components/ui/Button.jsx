const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const colors = {
    primary: 'bg-crayon-yellow hover:bg-yellow-300',
    secondary: 'bg-crayon-cyan hover:bg-blue-300',
    danger: 'bg-crayon-red hover:bg-red-300',
    success: 'bg-crayon-blue hover:bg-green-300',
  };

  return (
    <button 
      className={`
        ${colors[variant]} 
        text-crayon-dark font-hand text-xl font-bold
        px-6 py-2 border-2 border-crayon-dark 
        shadow-hard active:shadow-hard-hover active:translate-x-[2px] active:translate-y-[2px]
        transition-all duration-150 rounded-lg cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;