import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addtoCart } from '../../containers/actions/userActions';

//  import ProductImg from '../../assets/products/';
const useStyles = makeStyles({
    root: {
        width: 250,
        height: 550,
    },
    CardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    media: {
        height: 400,
    },
});

function MediaCard(props) {
    const classes = useStyles();
    
    function _addCartClick() {
            // gets cart list from redux and updates the cart
        let temp = props.user.user_cart
        temp.push(props.product)
        props.addtoCart(temp)
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={require("../../assets" + props.product.src_1)}
                />
                <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant="body2" >
                        {props.product.title}
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography variant="body1"  >
                            $ {(props.product.price.toString().split("."))[0]}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            .{(props.product.price.toString().split("."))[1]
                                ?
                                (props.product.price.toString().split("."))[1]
                                : '00'}
                        </Typography>
                    </div>

                </CardContent>
            </CardActionArea>
            <CardActions>

                <Button variant="contained"
                    style={{
                        color: '#FFFFFF', backgroundColor: 'black',
                        borderRadius: 0, width: 250,
                    }}
                    onClick={() => _addCartClick()}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}


const mapStateToProps = state => ({
    user: state.user
});

//export default withStyles(styles)(IOTAppBar);


export default (
    connect(
        mapStateToProps,
        { addtoCart }
    )(withRouter(MediaCard))
);
