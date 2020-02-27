import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Appbar from './Appbar';

import Card from './Card';
import ProductStub from '../../assets/StubJson';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { productList } from '../../containers/actions/userActions';
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        this.props.productList(ProductStub)
    }

    render() {
        return (
            <div>
                <Appbar />
                <Grid item xs={12} style={{ marginTop: 80 }}>
                    <Grid container justify="center" spacing={4}>
                        {ProductStub.map((product, index) => (
                            <Grid key={1} item>
                                <Card
                                    product={product}
                                />
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    member: state.user
})

export default (connect(mapStateToProps, { productList })(withRouter(Dashboard)));

