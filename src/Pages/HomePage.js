import { Paper, Grid } from '@mui/material';
import MainCard from '../components/CityCard';

export default function MainPage({weatherData}) {
    return (
        <main>
        <Grid 
          container
          p={2}
          spacing={2}
        >
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MainCard weatherData = {weatherData}/>
            </Grid>
        </Grid>
        </main>
    );
  }
  