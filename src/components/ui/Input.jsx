export default function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  placeholder,
  required = false,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-ink-soft">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2.5 bg-white border rounded-lg text-ink placeholder-ink-muted transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus:border-transparent ${
          error
            ? 'border-red-500 ring-1 ring-red-500'
            : 'border-surface-200 hover:border-surface-300'
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
