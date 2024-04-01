// Import necessary hooks and types from React for managing state and context.
import { createContext, useContext, useState, ReactNode } from 'react';

// Define an interface to specify the shape of the context's value. 
// This includes the current theme and a function to toggle the theme.
interface ThemeContextType {
  theme: string; // Represents the current theme ('light' or 'dark')
  toggleTheme: () => void; // A function that toggles the theme between light and dark
}

// Create a context with a default value of undefined.
// The context will hold our theme state and the function to toggle it.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook for using the theme context.
// This makes it easier to access the context value (theme and toggleTheme function) from any component.
export const useTheme = () => {
  // Use useContext to access the current theme context.
  const context = useContext(ThemeContext);
  // If the context is not used within a ThemeProvider, throw an error.
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  // Return the context value if available.
  return context;
};

// Define props for the ThemeProvider component.
// ThemeProvider will wrap parts of our app where we want the theme context to be accessible.
type ThemeProviderProps = { children: ReactNode }; // Accepts children to render inside the provider.

// Define the ThemeProvider component.
// This component initializes the theme state and provides it to the rest of the app.
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // State hook to manage the current theme. Default is 'light'.
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme state between 'light' and 'dark'.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // The ThemeProvider component renders a ThemeContext.Provider.
  // This makes the theme state and toggleTheme function available to any child components.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Render children components passed to ThemeProvider */}
    </ThemeContext.Provider>
  );
};
