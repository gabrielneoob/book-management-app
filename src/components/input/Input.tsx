import { InputTypes } from './types'
import { Box } from '@radix-ui/themes'
import * as S from './styles';
import React, { memo } from 'react';

const Input = ({
  id,
  onChange,
  type,
  inputStyle,
  label,
  value,
  name,
  placeholder,
}: InputTypes):JSX.Element => {
  const styles: React.CSSProperties = { ...inputStyle };

  return (
    <Box>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.InputBase
        id={id}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        style={styles}
      />
    </Box>
  )
}

export default memo(Input)