import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../preview/preview-collection.component';
import {selectCollections} from '../../redux/shop/shop.selector';
import {CollectionOverviewContainer} from './collection-overview.styles';

const CollectionOverview = ({collections}) => {
    const collectionsArray = Object.values(collections);
    return (
        <CollectionOverviewContainer>
            {collectionsArray.map(({
                id,
                ...otherCollectionProps
            }) => (<PreviewCollection key={id} {...otherCollectionProps}/>))
}

        </CollectionOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({collections: selectCollections});

export default connect(mapStateToProps)(CollectionOverview);