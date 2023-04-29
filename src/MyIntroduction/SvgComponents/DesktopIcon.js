import React from "react";

const DesktopIcon = props => {
    return (
        <svg version="1.0" id="Layer_1" width={props.width} height={props.height} viewBox="0 0 64 64" enable-background="new 0 0 64 64">
            <g>
	            <path fill={props.fill} d="M60,0H4C1.789,0,0,1.789,0,4v34h63.816c0.065,0,0.121,0.022,0.184,0.031V4C64,1.789,62.211,0,60,0z"/>
	            <path fill={props.fill} d="M0,40v4c0,2.211,1.789,4,4,4h24v10h-8c-2.209,0-4,1.791-4,4v1c0,0.553,0.447,1,1,1h30c0.553,0,1-0.447,1-1
		            v-1c0-2.209-1.791-4-4-4h-8V48h24c2.211,0,4-1.789,4-4v-4.031C63.938,39.978,63.882,40,63.816,40H0z M32,46c-1.104,0-2-0.896-2-2
		            s0.896-2,2-2s2,0.896,2,2S33.104,46,32,46z"/>
            </g>
        </svg>
    )
}

DesktopIcon.defaultProps = {
    fill: "#231F20",
    width: 30,
    height: 30
}

export default DesktopIcon;