
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './redux/actions';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/product'; 
import Button from '@material-ui/core/Button';
import { products } from '../../utils/Constants';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Micromax A57",
          pricingTier: "budget",
          priceRange: "5k-8k",
          weight: 200, // In grams,
          availability: 100,
          productUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
          isEditable: true
        },
        {
          name: "OnePlus 6T",
          pricingTier: "premier",
          priceRange: "35k-45k",
          weight: 200, // In grams
          availability: 30,
          productUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
          isEditable: true
        },
        {
          name: "Redmi Ultra",
          pricingTier: "budget",
          priceRange: "8k-11k",
          weight: 150, // In grams
          availability: 50,
          productUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
          isEditable: true
        }
     ]
    }
  }

  componentDidMount() {
    const { actions ,home ={}} = this.props;
    const { loadProduct } = actions;
    const { productList =[]} = home;
    if(productList.length === 0){
      loadProduct(products);
    }


  }

  render() {
    const {classes,home ={}} = this.props;
    const { productList =[]} = home;
    console.log('products', productList);
    return (
      <div className="home-default-page">    
           <h3>{`Product List`}</h3> 
           <div className={classes.productWrapper}>
                {productList.map((data, index) => {
                   return (
                      <div className={classes.productData} key={Math.random().toString()}>
                           <div className={classes.productField}>{data.name}</div>  
                           <div className={classes.productField}>{data.weight}</div>
                           <div className={classes.productField}>{data.availability}</div>
                           <div className={classes.productButton}>
                              <Button variant="contained" color="primary" onClick={()=>{ this.props.history.push(`/edit-product/${index}`)}}>
                                      {`Edit`}
                              </Button>
                           </div>
                      </div>
                   )
                  }
                )}  
           </div> 
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withStyles(styles)(DefaultPage));
