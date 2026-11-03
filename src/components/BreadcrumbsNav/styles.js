export const containerStyles = {
  width: '100%',
  maxWidth: { xs: 400, sm: 440, md: 1000 },
  mx: 'auto',
  px: { xs: 2, sm: 0 },
  py: 1.5,
  boxSizing: 'border-box',
};

export const separatorStyles = {
  color: 'text.secondary',
};

export const linkStyles = {
  color: 'text.secondary',
  textDecoration: 'none',
  '&:hover': {
    color: 'text.primary',
    textDecoration: 'underline',
  },
};

export const activeTextStyles = {
  color: 'text.primary',
  fontWeight: 600,
};
