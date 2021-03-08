# simple-ui-autocomplete

> Simple ui autocomplete width meterial-ui, styled-component

## Install

```bash
npm i --save simple-ui-autocomplete
```

## Usage

```jsx
import { AutoComplete } from 'simple-ui-autocomplete'
<AutoComplete
  list={[]} // Array should have id, name and logo if waht to display icon
  changed={(item) =>}
  label='Simple ui autocomplete'
  multiple={true}
  value={[]} // default values [] - if multiple true, '' - if multiple false,
  clearable={false}
  noOptionsText='List is empty'
  size='medium' // options 'small', 'medium', 'large'
  variant='outlined' // options 'outlined'
  autoComplete='never-on'
  error={false}
  className='myClass'
/>
```

## Author

Nimesh Deuja
