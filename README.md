# react-summernote
[Summernote](https://github.com/summernote/summernote) adaptation for react (Headache free)

[![npm version](https://badge.fury.io/js/react-summernote.svg)](https://www.npmjs.com/package/react-summernote)


### Getting Started

#### Install

```
npm install react-summernote
```

#### Configure Webpack

Add ProvidePlugin to your webpack config

```javascript
new webpack.ProvidePlugin({
	$: "jquery",
	jQuery: "jquery"
})
```

### Example

```javascript
import React, { Component } from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

class RichTextEditor extends Component {
  onChange(content) {
    console.log('onChange', content);
  }

  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          lang: 'ru-RU',
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview']]
          ]
        }}
        onChange={this.onChange}
      />
    );
  }
}

export default RichTextEditor;
```

### PropTypes

|  Property  |  Type  |  Description  |
|------------|--------|---------------|
| value | `String` | Default value |
| codeview | `Boolean` | Option to render in codeview mode |
| options | `Object` | Options object. More info about options http://summernote.org/deep-dive |
| onInit | `Function` | Being invoked when summernote is launched |
| onEnter | `Function` | Enter/Return button pressed |
| onFocus | `Function` | Editable area receives the focus |
| onBlur | `Function` | Editable area loses the focus |
| onKeyDown | `Function` | `e.keyCode` is pressed |
| onKeyUp | `Function` | `e.keyCode` is released |
| onPaste | `Function` | Triggers when event paste's been called |
| onChange | `Function` | handler: `function(contents, $editable) {}`, invoked, when content's been changed |
| onImageUpload | `Function` | handler: `function(files) {}` |

### Static methods

```javascript
reset() // Clear contents and remove all stored history
insertImage(url, filenameOrCallback) // Insert a image
insertNode(node) // Insert a element or textnode
insertText(text) // Insert a text
```

##### Example

```javascript
ReactSummernote.insertImage(`/resources/getImage?imageGuid=${image.imageGuid}`, $image => {
	$image.css("width", Math.floor($image.width() / 2));
	$image.attr("alt", image.name);
});
```
