import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, Grid, CardHeader, Divider } from '@mui/material';
import { getIcon } from "../GetIcon"


export default function MainCard({weatherData}) {
  
  return (
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
      <Typography gutterBottom variant="h4" component="div">
      34°C
        </Typography>
      </CardContent>
    </Card>
  );
}
