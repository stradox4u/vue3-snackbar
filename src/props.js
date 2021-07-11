export const propsModel = {
	/* ******************************************
	 * LOCATION PROPS
	 ****************************************** */
	/**
	 * Render the snackbar at the top of the screen
	 */
	top: {
		type: Boolean,
		default: false,
	},
	/**
	 * Render the snackbar at the bottom of the screen
	 */
	bottom: {
		type: Boolean,
		default: true,
	},
	/**
	 * Render the snackbar on the left of the screen
	 */
	left: {
		type: Boolean,
		default: false,
	},
	/**
	 * Render the snackbar on the right of the screen
	 */
	right: {
		type: Boolean,
		default: true,
	},
	/* ******************************************
	 * COLOUR PROPS
	 ****************************************** */
	success: {
		type: String,
		default: "#4caf50",
	},
	error: {
		type: String,
		default: "#ff5252",
	},
	warning: {
		type: String,
		default: "#fb8c00",
	},
	info: {
		type: String,
		default: "#2196f3",
	},
	/* ******************************************
	 * OTHER PROPS
	 ****************************************** */
	/**
	 * The default time in ms for messages to stay on the screen
	 */
	duration: {
		type: Number,
		default: 4000,
	},
	/**
	 * Class string to add to each message
	 */
	messageClass: {
		type: String,
	},
	/**
	 * The z-index value of the snackbar container
	 */
	zindex: {
		type: Number,
		default: 10000,
	},
	/**
	 * Reduce padding on the y-axis for snackbar messages
	 */
	dense: {
		type: Boolean,
		default: false,
	},
};