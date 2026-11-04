import { Box, Paper, Stack, Typography } from '@mui/material';

export const InfoCard = ({
  icon,
  title,
  description,
  bgVariant = 'info',
  sx,
  ...props
}) => {
  const isEmpty = !icon && !title && !description;

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: { xs: 2, sm: 2.5 },
        p: { xs: 2.5, sm: 3 },
        minHeight: isEmpty ? '120px' : 'auto',
        borderRadius: (theme) => ({
          xs: `${theme.shape.cardBorderRadius.mobile}px`,
          md: `${theme.shape.cardBorderRadius.desktop}px`,
        }),
        backgroundColor: (theme) =>
          bgVariant === 'success'
            ? theme.palette.success.light
            : theme.palette.info.light,
        ...sx,
      }}
      {...props}
    >
      {!isEmpty && (
        <>
          {icon && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: 32,
                height: 32,
                color: 'text.primary',
                '& svg': { fontSize: '2rem' },
              }}
            >
              {icon}
            </Box>
          )}

          <Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
            {title && (
              <Typography variant="h3" sx={{ color: 'text.primary' }}>
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
            )}
          </Stack>
        </>
      )}
    </Paper>
  );
};