import styled from 'styled-components/macro';

export const Wrapper = styled.div`

`;
export const Items = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 5px;
`;
export const Caption = styled.div`
display: flex;
    align-items: center;
`;
export const Select = styled.div`
display: flex;
    align-items: center;
`;
export const SelectTop = styled.div`
	position: relative;
	    border-bottom: none;
    padding-right: 15px;
    padding-bottom: 0;
    font-size: 13px;
	&:after {
		content: "";
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: 0;
    width: 10px;
    height: 6px;
    background-image: url(../images/dropdown.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: translateY(-50%);
	}
`;
export const SelectDropdown = styled.div`
position: absolute;
    left: 0;
    top: calc(100% + 2px);
    z-index: 20;
    display: none;
    padding: 10px;
    width: 100%;
`;
export const CustomSelect = styled.div`

`;
export const SelectList = styled.ul`

`;