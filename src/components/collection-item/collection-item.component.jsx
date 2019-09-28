import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import {
    CollectionItemContainer,
    CollectionButton,
    CollectionImage,
    CollectionFooter,
    NameStyle,
    PriceStyle
} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <CollectionImage imageUrl={imageUrl}/>
            <CollectionFooter>
                <NameStyle>{name}</NameStyle>
                <PriceStyle>${price}</PriceStyle>
            </CollectionFooter>
            <CollectionButton inverted onClick={() => addItem(item)}>Add to Cart</CollectionButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);