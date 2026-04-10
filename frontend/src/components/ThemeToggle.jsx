import { useThemeToggle } from "../hooks/useThemeToggle";

function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeToggle();

  return (
    <button onClick={toggleTheme} className="cursor-pointer transition-colors">
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
