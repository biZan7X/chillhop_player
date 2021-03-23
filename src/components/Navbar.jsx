import React from "react";
import { connect } from "react-redux";
//& icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
//& actions
import { setIsLibrary } from "../actions";

const Navbar = ({ isLibrary, setIsLibrary }) => {
	return (
		<div className="navbar">
			<h2 className="nav-title">Cazz...</h2>
			<button
				onClick={() => setIsLibrary(!isLibrary)}
				className={`${isLibrary ? "nav-active" : ""}`}
			>
				Playlist
				<FontAwesomeIcon className="music" icon={faMusic} />
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { isLibrary: state.isLibrary };
};

export default connect(mapStateToProps, { setIsLibrary })(Navbar);
