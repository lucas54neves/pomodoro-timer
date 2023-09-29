import { ThemeProvider } from 'styled-components';

import { Button } from './components/Button';
import { defaultTheme } from './styles/themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant={'primary'} />
      <Button variant={'secondary'} />
      <Button variant={'danger'} />
      <Button variant={'success'} />
      <Button />
    </ThemeProvider>
  );
};
