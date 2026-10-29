import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { containerStyles, separatorStyles, linkStyles, activeTextStyles } from './styles';

const breadcrumbNameMap = {
  '/': 'Home',
  '/about': 'About Us',
};

export const BreadcrumbsNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <Box sx={containerStyles}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={separatorStyles} />}
        aria-label="breadcrumb"
      >
        <Link component={RouterLink} to="/" variant="subtitle1" sx={linkStyles}>
          Home
        </Link>

        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const title = breadcrumbNameMap[to] || decodeURIComponent(value);

          return isLast ? (
            <Typography key={to} variant="subtitle1" sx={activeTextStyles}>
              {title}
            </Typography>
          ) : (
            <Link key={to} component={RouterLink} to={to} variant="subtitle1" sx={linkStyles}>
              {title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};
