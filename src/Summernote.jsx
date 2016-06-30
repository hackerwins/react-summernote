/* global $ */

import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "summernote-webpack-fix/dist/summernote";
import "summernote-webpack-fix/dist/summernote.css";
import "codemirror/lib/codemirror.css";
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

		this.uid = `react-summernote-${Date.now()}`;
		this.editor = {};

		ReactSummernote.insertImage = ReactSummernote.insertImage.bind(this);
		ReactSummernote.insertNode = ReactSummernote.insertNode.bind(this);
		ReactSummernote.insertText = ReactSummernote.insertText.bind(this);
	}

	componentDidMount() {
		const options = this.props.options;
		options.callbacks = this.callbacks;

		this.editor = $(`#${this.uid}`);
		this.editor.summernote(options);
		this.manageModalScroll(true);
	}

	shouldComponentUpdate() {
		return false;
	}

	componentWillUnmount() {
		if (this.editor) this.editor.summernote("destroy");
		this.manageModalScroll(false);
	}

	manageModalScroll(mount) {
		const $body = $("body");
		let hasClassName = false;
		if (mount) {
			$(".note-editor .modal").on("show.bs.modal", () => (hasClassName = $body.hasClass("modal-open")));
			$(".note-editor .modal").on("hidden.bs.modal", () => $body.toggleClass("modal-open", hasClassName));
		} else {
			$(".note-editor .modal").off("show.bs.modal");
			$(".note-editor .modal").off("hidden.bs.modal");
		}
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
	options: React.PropTypes.object,
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
