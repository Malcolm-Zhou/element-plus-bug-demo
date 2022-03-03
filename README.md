How to reprodeuce:

```bash
yarn run build
```

I think the error exists in theme-chalk/src/input.scss

SCSS varaibles in calc() function shoud be inside "#{}"

```scss
$input-padding-size-with-extra-icon: calc(
  5px + map.get($input-font-size, $size) + map.get($input-padding-horizontal, $size)
);
```

This should be

```scss
$input-padding-size-with-extra-icon: calc(
  5px + #{map.get($input-font-size, $size)} + #{map.get(
      $input-padding-horizontal,
      $size
    )}
);
```
