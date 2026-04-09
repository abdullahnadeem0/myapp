export function Button({ children, variant = 'primary', onClick, className = '' }) {
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}