import React from "react";
import Lists from "./Lists";
import { connect } from "react-redux";

const Library = ({ isLibrary }) => {
	return (
		<div className={`library ${isLibrary ? "active" : ""}`}>
			<h1>Library</h1>
			<Lists />
		</div>
	);
};

const mapStateToProps = (state) => {
	return { isLibrary: state.isLibrary };
};

export default connect(mapStateToProps)(Library);
