
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, CardHeader, Box} from '@mui/material';
import { getIcon } from "../GetIcon"


export default function CastingCards({weatherData}) {
  
  return (
        <Grid container
            spacing={3}
            p={3}>
            <Grid item xs={12} md={6} lg={4}>
                <Card
                    elevation={4}
                    xs={12}>
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
                    <Typography gutterBottom variant="h2" component="div">
                    34°C
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Card
                elevation={4}>
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
                <Typography gutterBottom variant="h2" component="div">
                34°C
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Card
                elevation={4}>
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
                <Typography gutterBottom variant="h2" component="div">
                34°C
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Card
                elevation={4}>
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
                <Typography gutterBottom variant="h2" component="div">
                34°C
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Card
                elevation={4}>
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
                <Typography gutterBottom variant="h2" component="div">
                34°C
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
  );
}
