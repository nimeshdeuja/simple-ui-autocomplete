import React from 'react'

import { AutoComplete } from 'simple-ui-autocomplete'

const App = () => {
  return (
    <AutoComplete
      list={[
        { id: 1, name: 'Nimesh' },
        { id: 2, name: 'Abhisekh' }
      ]} // Array should have id, name and logo if waht to display icon
      changed={(item) => {
        console.log(item)
      }} // *function* change event
      label='Select Option' // *String*
      multiple={true} // *Boolean*
      value={[]} // if multiple default value shuild be [] otherwise value should be ''
      marginBottom={true} // *Boolean*
      marginTop={false} // *Boolean*
      clearable={true} // *Boolean*
      noOptionsText='List is empty' // *String*
      size='medium' // *String* options 'small', 'medium', 'large'
      variant='outlined' // *String* options 'outlined'
      autoComplete='never-on' // *String*
      error={false} // *Boolean*
      className='myClass' // *String*
    />
  )
}

export default App
