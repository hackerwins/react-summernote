/* global $ */

import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "summernote-webpack-fix";
import React from "react";

class ReactSummernote extends React.Component {
	constructor(props) {
		super(props);

		this.uid = `reactSummernote-${Date.now()}`;

		this.onImageUpload = this.onImageUpload.bind(this);
	}

	componentDidMount() {
		const { height, minHeight, maxHeight, lang, focus } = this.props;

		$(`#${this.uid}`).summernote({
			height, minHeight, maxHeight, focus, lang, callbacks: this.callbacks
		});
	}

	shouldComponentUpdate() {
		return false;
	}

	componentWillUnmount() {
		$(`#${this.uid}`).summernote("destroy");
	}

	onImageUpload() {
		this.props.onImageUpload(url => {

		});
	}

	get callbacks() {
		return {
			onChange: this.props.onChange,
			onImageUpload: this.onImageUpload
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
	onChange: React.PropTypes.func,
	onImageUpload: React.PropTypes.func
};

export default ReactSummernote;
