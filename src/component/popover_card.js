import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function ActionAreaCard() {
    return (
        <Card sx={{ width: 229, height: 150 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100"
                    image="images/CardMedia.png"
                    alt="green iguana"
                />
                <CardContent style={{ paddingTop: 8 }}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: 16.5, borderColor: 'black',

                            }, '&.Mui-checked': {
                                color: '#21B6A8',
                            }
                        }} />} label="Flood zone 3" />

                    </FormGroup>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
