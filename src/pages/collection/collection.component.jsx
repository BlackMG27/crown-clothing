import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selector';
import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <Fragment>
            <main className="collection-page">
                <section>
                    <h2 className="title">{title}</h2>
                </section>
                <section className="items">
                    {items.map(item => (<CollectionItem key={item.id} item={item}/>))
}
                </section>
            </main>
        </Fragment>

    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)

})

export default connect(mapStateToProps)(CollectionPage);