import { Stack,Card, Container, Typography } from '@mui/material';
import Page from '../components/Page';



export default function Skills(){
    return(
<Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Skills
          </Typography>
        </Stack>

        <Card>
          <Page title="Register">
        <Container sx={{padding:5}}>   
        </Container>
      
        </Page>
        </Card>
      </Container>
    </Page>
    );
}