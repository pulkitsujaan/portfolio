const SectionTitle = ({ children, color = 'bg-crayon-red' }) => (
  <div className="flex justify-center mb-12">
    <h2 className={`
      text-4xl md:text-5xl font-sans font-bold text-crayon-dark
      ${color} px-6 py-2 border-2 border-crayon-dark shadow-hard -rotate-2
    `}>
      {children}
    </h2>
  </div>
);
export default SectionTitle;