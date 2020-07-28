import styled from 'styled-components';

const ActionsContainer = styled.div`
flex-grow: 3;
flex-flow: row nowrap;

@media (max-width: 992px) {
    margin-top: 0.5em;
}

@media (max-width: 370px) {
    flex-wrap: wrap;

    & > *:not(:first-child) {
        margin-top: 0.5em;
        margin-left: 0 !important;
    }
}
`;

export default ActionsContainer;