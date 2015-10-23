#Wallpaper-groups

Create pattern based on [wallpaper groups](https://en.wikipedia.org/wiki/Wallpaper_group).

##Install

```
$ npm install --save wallpaper-groups
```

##Usage

```
import wallpaper from 'wallpaper-groups'

const pattern = wallpaper({
  type: 'p2',
  width: 100,
  height: 100,
  columns: 1,
  rows: 1,
  lines: [[{x: 0, y: 10}, {x: 0, y: 20}], [{x: 10, y: 10}, {x: 1, y: 20}]]
})

console.log(pattern)

[[[{
  "x": 0,
  "y": 10
}, {
  "x": 0,
  "y": 20
}], [{
  "x": 10,
  "y": 10
}, {
  "x": 1,
  "y": 20
}], [{
  "x": 100.00000000000001,
  "y": 190
}, {
  "x": 100,
  "y": 180
}], [{
  "x": 90.00000000000001,
  "y": 190
}, {
  "x": 99,
  "y": 180
}]]]
```

##API

```
wallpaper({type, width, height, columns, rows, lines})
```

### type
Type of the pattern one of `"p2"`, `"pm"`, `"pg"`, `"cm"`, `"p2mm"`, `"p2mg"`, `"p2gg"`, `"c2mm"`, `"p4"`, `"p4mm"`, `"p4mg"`, `"p3"`, `"p3m1"`, `"p31m"`, `"p6"`, 

### width
Width of a single tile

### height
Height of a single tile. Note that patterns based on triangle tiles only use the width.

### columns
Number columns in the pattern

### rows
Number rows in the pattern

### lines
Array of lines to be user to generate the pattern. Lines are a arrays of point objects: `{x,y}`

```
wallpaper.patternTypes()
```
Returns a list of all possible pattern types.
 
```
wallpaper.getTile({type, width, height})
```

Returns the outline of tile for this wallpaper group type. 
 