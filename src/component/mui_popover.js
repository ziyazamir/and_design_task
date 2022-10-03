import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ActionAreaCard from '../component/popover_card';
export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button sx={{ marginBottom: 5 }} aria-describedby={id} variant="contained"
                onClick={handleClick}>
                Open Popover
            </Button>
            <Popover
                // style={{ borderRadius: 10 }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <ActionAreaCard />
                {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
            </Popover>
        </div >
    );
}
