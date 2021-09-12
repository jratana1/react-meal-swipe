import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header:{
      padding: '5px'
      
    },
   caption: {
      borderRadius: '25px',
      fontWeight: 'bolder',
      width: '50%',
      maxWidth: 400,
      backgroundColor: 'rgba(52, 52, 52, 0.4)',
   },
   link: {
      color: 'white',
      fontWeight: 'bolder',
   },



  }));

export default function Caption(props) {
    const classes = useStyles();
    const { restaurant } = props


    return (
<Box className={classes.caption} component="div" borderColor="transparent">
                        <Typography component="span" >
                            <CardHeader
                                title={restaurant.name}
                                className={classes.header}
                            />
                            <Typography>{restaurant.location.address1}</Typography>
                            <Typography>{restaurant.location.city}, {restaurant.location.state} {restaurant.location.postal_code}</Typography>
                            <Link href={'tel:+'+ restaurant.phone} className={classes.link}>{restaurant.display_phone}</Link>
                        </Typography>
</Box>
    )
}