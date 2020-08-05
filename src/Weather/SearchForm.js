import React, { Fragment } from 'react'
import styled from 'styled-components'

import InputError from '../Components/Layout/Inputs/InputError'
import SubmitButton from '../Components/Layout/Buttons/SubmitButton'
import TextInput from '../Components/Layout/Inputs/TextInput'

const StyledForm = styled.form`
    margin: 10px;
    display: flex;
    flex-direction: column;
`;

const SearchForm = props => {
    return (
        <Fragment>
            {props.error && 
                <InputError>{props.error || 'ss'}</InputError>
            }
            <StyledForm onSubmit={props.handleSubmit}>
                <TextInput
                    type='text'
                    placeholder='search for a location here...'
                    value={props.inputValue}
                    onChange={props.handleChange}
                />
                <SubmitButton>Search</SubmitButton>
            </StyledForm>
        </Fragment>
    )
}

export default SearchForm