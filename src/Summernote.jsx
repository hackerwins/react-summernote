/* global $ */

import 'summernote/dist/summernote';
import 'summernote/dist/summernote.css';
import 'codemirror/lib/codemirror.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const randomUid = () => Math.floor(Math.random() * 100000);

class ReactSummernote extends Component {
  constructor(props) {
    super(props);

    this.uid = `react-summernote-${randomUid()}`;
    this.editor = {};
    this.noteEditable = null;
    this.notePlaceholder = null;

    this.onInit = this.onInit.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);

    this.focus = this.focus.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.reset = this.reset.bind(this);
    this.replace = this.replace.bind(this);
    this.disable = this.disable.bind(this);
    this.enable = this.enable.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.insertImage = this.insertImage.bind(this);
    this.insertNode = this.insertNode.bind(this);
    this.insertText = this.insertText.bind(this);

    ReactSummernote.focus = this.focus.bind(this);
    ReactSummernote.isEmpty = this.isEmpty.bind(this);
    ReactSummernote.reset = this.reset.bind(this);
    ReactSummernote.replace = this.replace.bind(this);
    ReactSummernote.disable = this.disable.bind(this);
    ReactSummernote.enable = this.enable.bind(this);
    ReactSummernote.toggleState = this.toggleState.bind(this);
    ReactSummernote.insertImage = this.insertImage.bind(this);
    ReactSummernote.insertNode = this.insertNode.bind(this);
    ReactSummernote.insertText = this.insertText.bind(this);
  }

  componentDidMount() {
    const options = this.props.options || {};
    const codeview = this.props.codeview;
    // const codeviewCommand = codeview ? 'codeview.activate' : 'codeview.deactivate';
    options.callbacks = this.callbacks;

    this.editor = $(`#${this.uid}`);
    this.editor.summernote(options);
    if (codeview) {
      this.editor.summernote('codeview.activate');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { props } = this;

    const codeview = nextProps.codeview;
    const codeviewCommand = codeview ? 'codeview.activate' : 'codeview.deactivate';


    if (typeof nextProps.value === 'string' && props.value !== nextProps.value) {
      this.replace(nextProps.value);
    }

    if (typeof nextProps.disabled === 'boolean' && props.disabled !== nextProps.disabled) {
      this.toggleState(nextProps.disabled);
    }
    if (codeview !== props.codeview) {
      this.editor.summernote(codeviewCommand);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    if (this.editor.summernote) {
      this.editor.summernote('destroy');
    }
  }

  onInit() {
    const { disabled, onInit } = this.props;

    const $container = this.editor.parent();
    this.noteEditable = $container.find('.note-editable');
    this.notePlaceholder = $container.find('.note-placeholder');

    if (typeof disabled === 'boolean') {
      this.toggleState(disabled);
    }

    if (typeof onInit === 'function') {
      onInit({
        summernote: this.editor.summernote.bind(this.editor),
        focus: this.focus,
        isEmpty: this.isEmpty,
        reset: this.reset,
        replace: this.replace,
        disable: this.disable,
        enable: this.enable,
        insertImage: this.insertImage,
        insertNode: this.insertNode,
        insertText: this.insertText
      });
    }
  }

  onImageUpload(images) {
    const { onImageUpload } = this.props;

    if (typeof onImageUpload === 'function') {
      onImageUpload(images, this.insertImage);
    }
  }

  focus() {
    this.editor.summernote('focus');
  }

  isEmpty() {
    return this.editor.summernote('isEmpty');
  }

  reset() {
    this.editor.summernote('reset');
  }

  replace(content) {
    const { noteEditable, notePlaceholder } = this;
    const prevContent = noteEditable.html();
    const contentLength = content.length;

    if (prevContent !== content) {
      if (this.isEmpty() && contentLength > 0) {
        notePlaceholder.hide();
      } else if (contentLength === 0) {
        notePlaceholder.show();
      }

      noteEditable.html(content);
    }
  }

  disable() {
    this.editor.summernote('disable');
  }

  enable() {
    this.editor.summernote('enable');
  }

  toggleState(disabled) {
    if (disabled) {
      this.disable();
    } else {
      this.enable();
    }
  }

  insertImage(url, filenameOrCallback) {
    this.editor.summernote('insertImage', url, filenameOrCallback);
  }

  insertNode(node) {
    this.editor.summernote('insertNode', node);
  }

  insertText(text) {
    this.editor.summernote('insertText', text);
  }

  get callbacks() {
    const props = this.props;

    return {
      onInit: this.onInit,
      onEnter: props.onEnter,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      onKeyup: props.onKeyUp,
      onKeydown: props.onKeyDown,
      onPaste: props.onPaste,
      onChange: props.onChange,
      onImageUpload: this.onImageUpload
    };
  }

  render() {
    const { tag: Tag, children, className } = this.props;

    return (
      <div className={className}>
        <Tag id={this.uid}>{children}</Tag>
      </div>
    );
  }
}

ReactSummernote.propTypes = {
  tag: PropTypes.string, // will determing using div or textarea field for form components like redux-form
  children: PropTypes.node, // instead of value, using children makes more sense for div and textarea blocks
  codeview: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.object,
  disabled: PropTypes.bool,
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

ReactSummernote.defaultProps = {
  tag: 'div'
};
export default ReactSummernote;
