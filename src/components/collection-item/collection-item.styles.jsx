import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div `
    width: 20vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom: 30px;
    &:hover {
        .image {
            opacity: .8;
        }
        button {
            display: flex;
            opacity: .87;
        }
    }
`;

export const CollectionButton = styled(CustomButton)`
        width: 80%;
        opacity: .7;
        position: absolute;
        top: 255px;
        display: none;
`;

export const CollectionImage = styled.div `
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${ ({
    imageUrl}) => ` url(${imageUrl})`};
`;

    export const CollectionFooter = styled.div `
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

    export const NameStyle = styled.span `
    width: 90%;
    margin-bottom: 15px;
`;

    export const PriceStyle = styled.span `
    width: 10%;
`;