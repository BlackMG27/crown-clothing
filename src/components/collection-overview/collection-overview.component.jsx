import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../preview/preview-collection.component';
import {selectCollections} from '../../redux/shop/shop.selector';
import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({
            id,
            ...otherCollectionProps
        }) => (<PreviewCollection key={id} {...otherCollectionProps}/>))
}

    </div>
)

const mapStateToProps = createStructuredSelector({collections: selectCollections})

export default connect(mapStateToProps)(CollectionOverview)