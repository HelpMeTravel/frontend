import HeaderBrand from './components/HeaderBrand';
import HeaderNavigation from './components/HeaderNavigation';
import { HeaderActions, HeaderAppBar, HeaderToolbar } from './styles';

export const Header = () => (
  <HeaderAppBar position="static" elevation={0}>
    <HeaderToolbar>
      <HeaderBrand />
      <HeaderActions>
        {/* Out of MVP scope */}
        {/* <LanguageSwitcher /> */}
        <HeaderNavigation />
      </HeaderActions>
    </HeaderToolbar>
  </HeaderAppBar>
);
