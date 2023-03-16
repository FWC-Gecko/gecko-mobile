import React, {createContext} from 'react';

type ThemeContextType = {colors: any};

const ThemeContext = createContext<ThemeContextType>({colors: {}});

export default ThemeContext;
