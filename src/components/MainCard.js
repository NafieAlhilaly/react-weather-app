
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader, Box, Grid} from '@mui/material';
import { getIcon } from "../GetIcon"
import CardMedia from '@mui/material/CardMedia';
import {getImage} from "../GetImage" 

export default function CastingCards({weatherData}) {
  
  return (
    <Box
    display="flex"
    justifyContent="center"
    p={2}
  >
    <Card
        elevation={4}
        lg={{ minWidth: 700 }}
    >
    <CardMedia
        component="img"
        height="350"
        image={getImage(weatherData.weather[0].main)}
        alt="green iguana"
    />
    <CardHeader
        title={<Typography 
        variant="h3"
        color="textSecondary"
        align={"left"}
        >
        {getIcon(weatherData.weather[0].main)} {weatherData.name}
        </Typography>}
    />
    <CardContent>
    <Grid container>
        <Grid item>
            <Typography gutterBottom variant="h2" component="div">
                {weatherData.main.temp} 
            </Typography>
        </Grid>
        <Grid item>
            <Typography gutterBottom variant="p" color="textSecondary">
             °C
            </Typography>
        </Grid>
    </Grid>
    </CardContent>
    </Card>     
  </Box>
        
  );
}
