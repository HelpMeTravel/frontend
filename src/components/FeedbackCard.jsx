import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const FeedbackCard = () => (
  <Card
    sx={{
      width: '100%',
      maxWidth: { xs: 400, sm: 440, md: 1000 },
      backgroundColor: '#FFFFFF',
      border: '1px solid #D6E2E8',
      borderRadius: { xs: '24px', md: '32px' },
      boxShadow: 'none',
      boxSizing: 'border-box',
    }}
  >
    <CardContent
      sx={{
        p: { xs: '24px !important', md: '32px !important' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'stretch', md: 'center' },
        justifyContent: 'space-between',
        gap: { xs: 2.5, md: 4 },
      }}
    >
      {/* Текстовий блок */}
      <Box sx={{ maxWidth: { xs: '100%', md: '640px' }, textAlign: 'left' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: '#23415C',
            fontSize: { xs: '1.35rem', sm: '1.45rem', md: '1.65rem' },
            lineHeight: 1.25,
            mb: 1.5,
          }}
        >
          Help keep the guide useful
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#58738A',
            fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
            lineHeight: 1.45,
          }}
        >
          Spotted a detail that has changed? Share a correction and, if possible, an official
          source.
        </Typography>
      </Box>

      {/* Кнопка дії */}
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon sx={{ fontSize: '1.25rem' }} />}
        sx={{
          // мобілка: 100% ширини картки; десктоп: акуратна кнопка справа
          width: { xs: '100%', md: 'auto' },
          minWidth: { md: '210px' },
          backgroundColor: '#DCEAF2',
          color: '#23415C',
          borderRadius: '14px',
          py: 1.3,
          px: 2.5,
          textTransform: 'none',
          fontSize: '0.95rem',
          fontWeight: 600,
          boxShadow: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
          '&:hover': {
            backgroundColor: '#CBDDE6',
            boxShadow: 'none',
          },
        }}
      >
        Share feedback
      </Button>
    </CardContent>
  </Card>
);
