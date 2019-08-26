import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ROUTES from 'constants/routes';
import Container from 'components/templates/Container';

const useStyles = makeStyles({
  card: {
    marginTop: '15px',
    maxWidth: '350px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

function Menu({ history, firebase, authUser }) {
  const classes = useStyles();
  return (
    <Container
      title="ホーム"
      history={history}
      firebase={firebase}
      authUser={authUser}
    >
      <Grid container spacing={4} alignItems="center" justify="center">
        <Grid item xs={12} sm={6}>
          <Link underline="none" component={RouterLink} to={ROUTES.Rent}>
            <Card className={classes.card} raised>
              <CardContent>
                <Typography variant="h5">家を借りる</Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image="https://1.bp.blogspot.com/-sZWA3X8pMbw/VMItlsBbM2I/AAAAAAAAqvo/gqyqv86WK4E/s800/myhome_family_kengaku.png"
                title="家を借りる"
              />
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link underline="none" component={RouterLink} to={ROUTES.Lend}>
            <Card className={classes.card} raised>
              <CardContent>
                <Typography variant="h5">家を貸す</Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image="https://4.bp.blogspot.com/-jqqIfbm7D-Q/VXOUVYCpCfI/AAAAAAAAuJs/T4-JqR-iC0Y/s400/hikkoshi_nidukuri.png"
                title="家を貸す"
              />
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Menu;
