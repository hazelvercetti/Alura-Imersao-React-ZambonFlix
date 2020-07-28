import styled from 'styled-components';
import BlurContainer from '../../../../../Blur/styles';

const DropdownContainer = styled(BlurContainer)`
    padding: 0.25em;
    border-radius: 0.7rem;
    background-color: rgba(0,0,0,0.8);
    border: 1px solid rgba(0, 0, 0, 0.95);
    border-bottom: 3px solid var(--primary);
`;

export default DropdownContainer;