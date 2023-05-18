import React from "react";

const DesktopIconV2 = props => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
        <g>
	        <rect x="30" y="33.999" fill={props.fill} width="4" height="8"/>
	        <rect x="30" y="19.999" fill={props.fill} width="4" height="12"/>
	        <rect x="18" y="27.999" fill={props.fill} width="4" height="6"/>
	        <rect x="18" y="35.999" fill={props.fill} width="4" height="6"/>
	        <rect x="42" y="11.999" fill={props.fill} width="4" height="18"/>
	        <path fill={props.fill} d="M60,3.999H35v-1c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4c-2.211,0-4,1.789-4,4v38c0,2.211,1.789,4,4,4h19.888
		        l-5.485,9.5c-0.829,1.435-0.338,3.27,1.098,4.098s3.27,0.337,4.098-1.098l7.217-12.5h2.37l7.217,12.5
		        c0.829,1.436,2.663,1.927,4.099,1.098c1.436-0.828,1.926-2.662,1.098-4.098l-5.485-9.5H60c2.211,0,4-1.789,4-4v-38
		        C64,5.788,62.211,3.999,60,3.999z M31,2.999c0-0.553,0.447-1,1-1s1,0.447,1,1v1h-2V2.999z M28,18.999c0-0.553,0.447-1,1-1h6
		        c0.553,0,1,0.447,1,1v25h-8V18.999z M16,26.999c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1v17h-8V26.999z M21.866,61.499
		        c-0.276,0.479-0.888,0.643-1.366,0.365c-0.479-0.275-0.643-0.887-0.365-1.365l6.062-10.5h2.309L21.866,61.499z M43.865,60.499
		        c0.277,0.479,0.113,1.09-0.365,1.366s-1.09,0.112-1.366-0.366l-6.64-11.5h2.309L43.865,60.499z M48,43.999h-8v-33
		        c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V43.999z"/>
	        <rect x="42" y="31.999" fill={props.fill} width="4" height="10"/>
        </g>
        </svg>
    )
}

DesktopIconV2.defaultProps = {
    fill: "#231F20",
    width: 30,
    height: 30
}

export default DesktopIconV2;

