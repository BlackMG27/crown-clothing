import React from 'react';
import {CollectionContainer, TitleStyle, PreviewContainer} from './preview-collection.styles';
import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = ({title, items}) => (
    <CollectionContainer>
        <TitleStyle>{title.toUpperCase()}</TitleStyle>
        <PreviewContainer>
            {items.filter((item, idx) => idx < 4).map(item => (<CollectionItem key={item.id} item={item}/>))
}
        </PreviewContainer>
    </CollectionContainer>
)

export default PreviewCollection;