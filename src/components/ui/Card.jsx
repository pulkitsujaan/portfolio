const Card = ({ children, className = '' }) => (
  <div className={`
    bg-white border-2 border-crayon-dark shadow-hard rounded-xl p-6
    ${className}
  `}>
    {children}
  </div>
);
export default Card;