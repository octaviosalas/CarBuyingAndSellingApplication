import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Sell your Car',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Find your Used',
    subheader: 'Most popular',
    price: '0',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Publish your car in featured',
    price: '15',
    description: [
      'All users will see it',
      'Duration of 1 month',
      'Interested every day',
      'Phone & email support',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'contained',
  },
];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Main() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
       
      </AppBar>
    
       <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography component="h1"  variant="h2" align="center" color="text.primary" gutterBottom > Welcome!   </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p"> On this website, you can find your used car that you were looking for so easily. You can also sell yours effectively. </Typography>
       </Container>
  
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title}  xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader title={tier.title} subheader={tier.subheader}  titleTypographyProps={{ align: 'center' }}  action={tier.title === 'Pro' ? <StarIcon /> : null} subheaderTypographyProps={{ align: 'center', }}
                  sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700], }} />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2, }} >
                    <Typography component="h2" variant="h3" color="text.primary">  ${tier.price} </Typography>
                    <Typography variant="h6" color="text.secondary">  /mo </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography  component="li" variant="subtitle1"  align="center" key={line} >  {line} </Typography>  ))}
                  </ul>
                </CardContent>
                <CardActions> <Button fullWidth variant={tier.buttonVariant}>  {tier.buttonText}  </Button> </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    
    </ThemeProvider>
  );
}