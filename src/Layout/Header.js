import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from '@northstar/core';
import { HSIcon } from '@northstar/icons';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                    <HSIcon width="30" titleAccess="HelpSystems gear icon" />
                </IconButton>
                <Typography variant="h6" style={{flexGrow: 1}}>
                    Foods
                </Typography>
            </Toolbar>
        </AppBar>
    )};

export default Header;
