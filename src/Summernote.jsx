/* global $ */

import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "summernote-webpack-fix";
import React from "react";

class ReactSummernote extends React.Component {
	static insertImage(url, filename, callback) {
		this.editor.summernote("insertImage", url, filename, callback);
	}

	static insertNode(node) {
		this.editor.summernote("insertNode", node);
	}

	static insertText(text) {
		this.editor.summernote("insertText", text);
	}

	constructor(props) {
		super(props);

		this.uid = `reactSummernote-${Date.now()}`;
		this.editor = {};

		ReactSummernote.insertImage = ReactSummernote.insertImage.bind(this);
		ReactSummernote.insertNode = ReactSummernote.insertNode.bind(this);
		ReactSummernote.insertText = ReactSummernote.insertText.bind(this);
	}

	componentDidMount() {
		const { height, minHeight, maxHeight, lang, focus } = this.props;

		this.editor = $(`#${this.uid}`);
		this.editor.summernote({ height, minHeight, maxHeight, focus, lang, callbacks: this.callbacks });
	}

	shouldComponentUpdate() {
		return false;
	}

	componentWillUnmount() {
		if (this.editor) this.editor.summernote("destroy");
	}

	get callbacks() {
		return {
			onInit: this.props.onInit,
			onEnter: this.props.onEnter,
			onFocus: this.props.onFocus,
			onBlur: this.props.onBlur,
			onKeyup: this.props.onKeyUp,
			onKeydown: this.props.onKeyDown,
			onPaste: this.props.onPaste,
			onChange: this.props.onChange,
			onImageUpload: this.props.onImageUpload
		};
	}

	render() {
		return <div id={this.uid} dangerouslySetInnerHTML={{ __html: this.props.value }}></div>;
	}
}

ReactSummernote.propTypes = {
	value: React.PropTypes.string,
	focus: React.PropTypes.bool,
	height: React.PropTypes.number,
	maxHeight: React.PropTypes.number,
	minHeight: React.PropTypes.number,
	lang: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	onInit: React.PropTypes.func,
	onEnter: React.PropTypes.func,
	onFocus: React.PropTypes.func,
	onBlur: React.PropTypes.func,
	onKeyUp: React.PropTypes.func,
	onKeyDown: React.PropTypes.func,
	onPaste: React.PropTypes.func,
	onChange: React.PropTypes.func,
	onImageUpload: React.PropTypes.func
};

export default ReactSummernote;
