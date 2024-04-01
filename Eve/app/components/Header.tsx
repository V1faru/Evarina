// Import the useTheme hook from ThemeContext to access the theme state and the function to toggle the theme.
import { useTheme } from './ThemeContext';

// Define the Header component.
const Header = () => {
  // Destructure theme and toggleTheme from the context.
  // theme will either be 'light' or 'dark', depending on the current theme.
  // toggleTheme is a function that switches the theme between light and dark.
  const { theme, toggleTheme } = useTheme();

  // Return the JSX for the header component.
  return (
    // Apply dynamic class names based on the current theme. This changes the header's class based on the theme.
    <header className={`header ${theme}`}>
      <nav>
        <ul className="flex justify-between">
          {/* Each list item represents a navigation link. Add or remove links as needed for your site. */}
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* Button to toggle the theme. The button's text changes based on the current theme. */}
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </header>
  );
};

// Export the Header component so it can be used in other parts of the application.
export default Header;
