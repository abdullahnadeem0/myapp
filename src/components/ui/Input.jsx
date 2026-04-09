export function Input({ type = 'text', placeholder, value, onChange, className = '' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-300 ${className}`}
    />
  );
}