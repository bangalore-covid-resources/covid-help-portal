import APPLICATION_URL from "../../constants/application-routes";

import { Hidden, IconButton, AppBar, Box } from '@material-ui/core';


const Header = props => {
    return (
        <>
            <AppBar
                color="secondary"
                className="app-header"
                position={'fixed'}
                elevation={11}>
                <Box className="app-header-toolbar">
                        <Box
                            className="app-logo-wrapper"
                            title="Home">
                                <a href={APPLICATION_URL.HOME}>
                                    <IconButton
                                        color="primary"
                                        size="medium"
                                        className="app-logo-btn">
                                        <img
                                            className="app-logo-img"
                                            alt=""
                                            src="/images/logo.png"
                                        />
                                    </IconButton>
                                </a>
                        </Box>
                </Box>
            </AppBar>
        </>
    );
};

export default Header;
