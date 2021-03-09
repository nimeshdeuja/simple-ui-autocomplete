import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AutoComplete = (props) => {
  const {
    list,
    multiple,
    value,
    changed,
    label,
    clearable,
    error,
    secondaryText,
    secondaryTextLable,
    noOptionsText,
    size,
    variant,
    autoComplete,
    className
  } = props
  return (
    <InputStyled>
      <Autocomplete
        disableClearable={clearable}
        fullWidth
        multiple={multiple}
        options={list}
        className={`${className} ${error && 'error'}`}
        value={value !== '' ? value : null}
        getOptionLabel={(option) => (option ? option.name : null)}
        noOptionsText={noOptionsText}
        getOptionSelected={(option, innerValue) => option.id === innerValue.id}
        onChange={(event, el) => changed(el)}
        size={size}
        renderOption={(option) => {
          if (option.logo) {
            return (
              <RenderOptionStyled withLogo={true}>
                {option.logo && (
                  <div>
                    <img src={option.logo} alt={option.name} />
                  </div>
                )}
                <span>
                  {option.name}
                  {secondaryText && (
                    <span>
                      {secondaryTextLable && `${secondaryTextLable}: `}
                      {option[secondaryText]}
                    </span>
                  )}
                </span>
              </RenderOptionStyled>
            )
          } else {
            return option.name
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant={variant}
            size={size}
            autoComplete={autoComplete}
          />
        )}
      />
    </InputStyled>
  )
}

AutoComplete.propTypes = {
  list: PropTypes.array.isRequired,
  changed: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  value: PropTypes.any,
  marginBottom: PropTypes.bool,
  marginTop: PropTypes.bool,
  clearable: PropTypes.bool,
  noOptionsText: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  autoComplete: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string
}

export default AutoComplete

const InputStyled = styled.div`
  ${(props) => {
    let theme = props.theme
    let margin = theme.gLG
    if (props.noMargin) margin = '0'
    return `
            display:flex;
            margin-bottom:${margin};
            width:100%;
            .MuiInputBase-root:focus,
            .MuiFormControl-root:focus,
            input{
              border: none;
              -webkit-appearance: none;
              -ms-accelerator: none;
              -moz-appearance: none;
              appearance: none;
              resize: none;
              outline: none;
            }
        `
  }}
`

const RenderOptionStyled = styled.div`
  ${(props) => {
    return `
    display:flex;
    justify-content: center;
    align-items: center;

    >span{
      flex-grow:1;
      display:flex;
      flex-direction:column;
      >span{
        font-size: 12px;
        color:rgba(0,0,0, 0.54);
      }
    }
    
    >div{
      margin-right:10px;
      border-radius:4px;
      padding:2px;
      display:flex;
      width:30px;
      justify-content: center;
      align-items: center;

      >img{
        width:30px;
        height:30px;
      } 
    }     
  `
  }}
`
