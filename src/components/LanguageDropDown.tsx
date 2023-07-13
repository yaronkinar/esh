import {Button, MenuItem, useTheme} from "@mui/material";
import Menu from "@mui/material/Menu";
import React, {useContext} from "react";
import LanguageIcon from '@mui/icons-material/Language';
import {LanguageContext} from "../LanguageContext.tsx";

export default function LanguageDropDown() {
    const theme = useTheme();
    const { currentLanguage, setLanguage } = useContext(LanguageContext);

    //document.body.dir = i18n.dir();



    const changeLanguage = async (lng:string) => {
        setLanguage(lng);
        theme.direction = lng === 'heb' ? 'rtl' : 'ltr';


    }
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {currentLanguage}
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <LanguageIcon/>
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}

            >
                <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                <MenuItem onClick={() => changeLanguage('heb')}>עברית</MenuItem>
            </Menu>
        </div>
    );
}
