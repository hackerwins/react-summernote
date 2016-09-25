/* global $ */

import 'summernote-webpack-fix/dist/summernote';
import 'summernote-webpack-fix/dist/summernote.css';
import 'codemirror/lib/codemirror.css';
import React, { Component, PropTypes } from 'react';

class ReactSummernote extends Component {
  static reset() {
    this.editor.summernote('reset');
  }

  static insertImage(url, filenameOrCallback) {
    this.editor.summernote('insertImage', url, filenameOrCallback);
  }

  static insertNode(node) {
    this.editor.summernote('insertNode', node);
  }

  static insertText(text) {
    this.editor.summernote('insertText', text);
  }

  constructor(props) {
    super(props);

    this.uid = `react-summernote-${Date.now()}`;
    this.editor = {};

    ReactSummernote.reset = ReactSummernote.reset.bind(this);
    ReactSummernote.insertImage = ReactSummernote.insertImage.bind(this);
    ReactSummernote.insertNode = ReactSummernote.insertNode.bind(this);
    ReactSummernote.insertText = ReactSummernote.insertText.bind(this);
  }

  componentDidMount() {
    const options = this.props.options || {};
    options.callbacks = this.callbacks;

    this.editor = $(`#${this.uid}`);
    this.editor.summernote(options);
    this.manageModalScroll(true);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    if (this.editor) this.editor.summernote('destroy');
    this.manageModalScroll(false);
  }

  manageModalScroll(mount) {
    const $body = $('body');
    let hasClassName = false;
    if (mount) {
      $('.note-editor .modal').on('show.bs.modal', () => {
        hasClassName = $body.hasClass('modal-open');
      });
      $('.note-editor .modal').on('hidden.bs.modal', () => {
        $body.toggleClass('modal-open', hasClassName);
      });
    } else {
      $('.note-editor .modal').off('show.bs.modal');
      $('.note-editor .modal').off('hidden.bs.modal');
    }
  }

  get callbacks() {
    const props = this.props;

    return {
      onInit: props.onInit,
      onEnter: props.onEnter,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      onKeyup: props.onKeyUp,
      onKeydown: props.onKeyDown,
      onPaste: props.onPaste,
      onChange: props.onChange,
      onImageUpload: props.onImageUpload
    };
  }

  render() {
    return <div id={this.uid} dangerouslySetInnerHTML={{ __html: this.props.value }}></div>;
  }
}

ReactSummernote.propTypes = {
  value: PropTypes.string,
  options: PropTypes.object,
  onInit: PropTypes.func,
  onEnter: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPaste: PropTypes.func,
  onChange: PropTypes.func,
  onImageUpload: PropTypes.func
};

export default ReactSummernote;
