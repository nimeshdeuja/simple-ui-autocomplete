# simple-ui-autocomplete

> Simple UI autocomplete with material-UI, styled-component.

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

### Peer Dependencies

> Make sure that your project has all these packages installed.

```bash
npm i @material-ui/core@4.11.3
npm i @material-ui/lab@4.0.0-alpha.57
npm i styled-components@5.2.1
```

## Author

Nimesh Deuja
