import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LayersIcon from '@mui/icons-material/Layers';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BookIcon from '@mui/icons-material/Book';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
title: {
  color: "#fca311"
},
texts:{
  fontsize: 30,
  marginBottom: 30
}
})

export default function PermanentDrawerLeft() {


  const classes = useStyles()
 const drawerWidth = 240;
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Stack direction="row" spacing={2}>
     
      <Avatar sx={{ bgcolor: deepPurple[500] }}>BO</Avatar>
    </Stack>
        </Toolbar>
      </AppBar>
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#343a40',
            color: 'whitesmoke',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon  sx={{
                color:'whitesmoke',
              }}>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="About me" />
            </ListItemButton>
          </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon  sx={{
                color:'whitesmoke',
              }}>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="My Skills" />
            </ListItemButton>
          </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon  sx={{
                color:'whitesmoke',
              }}>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon  sx={{
                color:'whitesmoke',
              }}>
                <ShoppingBasketIcon  />
              </ListItemIcon>
              <ListItemText primary="Shopify" />
            </ListItemButton>
          </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon  sx={{
                color:'whitesmoke',
              }}>
                <ContactPhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon  sx={{
                color:'whitesmoke',
              }}>
                <BookIcon/>
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon  sx={{
                color:'whitesmoke',
              }}>
                <KeyboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Tutorials" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon  sx={{
                color:'whitesmoke',
              }}>
                <LocalActivityIcon/> 
              </ListItemIcon>
              <ListItemText className={classes.texts} primary="Resources" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
      
        component="main"
        sx={{ flexGrow: 3, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
         <Avatar alt="Bob Okal" src="https://codewithbob.tech/static/media/profile.62ee495e.jpeg" />
        <Typography variant="h5">
          Erick B. Okal
          </Typography>
          
         <Typography className={classes.title} variant="h5"> Senior Software Engineer</Typography>
        <Link href="https://www.linkedin.com/in/erick-bob-10381762/" target="_blank" >
    <GitHubIcon/>
</Link>
        <Link href="https://www.linkedin.com/in/erick-bob-10381762/" target="_blank" >
    <LinkedInIcon/>
</Link>

<Divider/>
<Typography>
          I'm an enthusiastic and forward-looking Software Engineer with 5 years background in creating and executing innovative software solutions to enhance business productivity. Highly experienced in all aspects of the software development lifecycle and end-end project management, from concept through to development and delivery.
        </Typography>
      </Box>
      
     
     
    
    </Box>
  );
}
