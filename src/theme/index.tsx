//@mui
import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material/styles';
//hook
import { useMemo } from "react";
//theme
import { palette } from "./palette";
import { shadows } from "./shadow";
import { typography } from "./typography";
//merge
import merge from "lodash.merge";


type Props = {
  children: React.ReactNode;
}

export default function ThemeProvider({children}: Props) {
  const baseOption = useMemo(
    () => ({
      palette: palette('light'),
      shadows: shadows('light'),
      typography,
    }),
    []
  );

  const memoizedValue = useMemo(() => merge(baseOption), [baseOption]);
  const theme = createTheme(memoizedValue as ThemeOptions);
  const themeWithLocale = useMemo(() => createTheme(theme), [theme]);

  return (
    <MuiThemeProvider theme={themeWithLocale}>
      {children}
    </MuiThemeProvider>
  )
}
  
