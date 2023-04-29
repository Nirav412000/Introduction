import React from "react";

const MobileIcon = props => {
    return (
        <svg version="1.0" id="Layer_1"  width={props.width} height={props.height} viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
            <g>
	            <rect x="12" y="10" fill={props.fill} width={40} height={40}/>
	            <path fill={props.fill} d="M48,0H16c-2.211,0-4,1.789-4,4v4h40V4C52,1.789,50.211,0,48,0z M33,5.998h-6c-0.553,0-1-0.447-1-1
		            s0.447-1,1-1h6c0.553,0,1,0.447,1,1S33.553,5.998,33,5.998z M37,5.998c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1
		            S37.553,5.998,37,5.998z"/>
	        <g>
		    <circle fill={props.fill} cx="32" cy="56.998" r="1"/>
		    <path fill={props.fill} d="M12,52v8c0,2.211,1.789,4,4,4h32c2.211,0,4-1.789,4-4v-8H12z M32,59.998c-1.658,0-3-1.342-3-3s1.342-3,3-3
			s3,1.342,3,3S33.658,59.998,32,59.998z"/>
	        </g>
            </g>
        </svg>
    )
}

MobileIcon.defaultProps = {
    fill: "#231F20",
    width: 30,
    height: 30
}

export default MobileIcon;