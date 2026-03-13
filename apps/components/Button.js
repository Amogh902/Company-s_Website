export default function Button({ children, variant = "primary" }) {

  const base =
    "px-8 py-3 rounded-lg font-semibold transition";

  const styles = {
    primary: "bg-white text-blue-700 hover:bg-gray-100",
    outline: "border border-white hover:bg-white hover:text-blue-700"
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}