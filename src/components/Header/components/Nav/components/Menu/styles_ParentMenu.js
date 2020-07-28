import styled from 'styled-components';
import Button from '../../../../../Button';

const ParentMenu = styled(Button)`

&.dropdown-toggle::after {
    margin-top: 0.25em;
    margin-left: .6em;
    content: "\f078" !important;
    font: normal normal normal 14px/1 FontAwesome;
    border: none;
}

@media (max-width: 800px) {
    font-size: 0.8em;

    &:hover,
    &:focus {
        border-color: transparent;
    }
}
`;

export default ParentMenu;