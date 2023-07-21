import React from 'react'
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../store/usercontext';
import SignpostTwoToneIcon from '@mui/icons-material/SignpostTwoTone';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Sidebar = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [showClose, setShowClose] = React.useState(true)

    const navigate = useNavigate()
    const userCtx = useContext(UserContext)
  
    const handleDrawerOpen = () => {
      setOpen(true);
      setShowClose(false)
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
      setShowClose(true)
    };

    const handleItemFavorites = (text) => {
      if (text === 'Favorites') {
         navigate(`/favs/${userCtx.userId}`)
      } 
    };

    const handleItemSellBuyMessages = (text) => { 
      if(text === "I want to buy") { 
        navigate("/allCars")
      }else if(text === "I want to sell") { 
        navigate("/buyMyCar")
      } else if(text === "My Publications") { 
        navigate("/myPublications")
      } 
    }


  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      
      <Drawer variant="permanent" open={open}>
      <DrawerHeader>
                        {showClose ? 
                        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"sx={{marginRight: 0, ...(open && { display: 'none' }),}} >
                           <MenuIcon style={{color:"black"}}/>
                       </IconButton>
                                   :
                        <IconButton onClick={handleDrawerClose} >
                                 {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton> }

        </DrawerHeader>
        <Divider />
        <List>
          {['Favorites', 'Pending Visits'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton  sx={{  minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}} >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',}} >
                  {index % 2 === 0 ? <FavoriteBorderOutlinedIcon /> : <HandshakeOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} onClick={() => handleItemFavorites(text)}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['I want to sell', 'I want to buy', 'Messages', "My Publications"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton  sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}} >
                <ListItemIcon  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                  {index === 0 ?  <SellOutlinedIcon /> : index === 1 ?  <ShoppingCartOutlinedIcon /> : index === 2 ? <MailIcon/> : <SignpostTwoToneIcon/>}
                  {/*  {index === 0 ? <ShoppingBasketIcon  style={{ color: '#ee644c' }}/> : index === 1 ? <FavoriteIcon style={{ color: '#ee644c' }}/> : <SettingsIcon style={{ color: '#ee644c' }}/>}*/}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} onClick={() => handleItemSellBuyMessages(text)}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  )
}

export default Sidebar
