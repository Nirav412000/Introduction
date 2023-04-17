import React from "react";
import "./SocialMediaIcon.css";
import { SocialIcon } from 'react-social-icons';
import _ from "lodash";

const styles = {
    iconStyle: {
        width: "40px",
        height: "40px",
    }
}

function SocialMediaIcon(props) {
    const { icon } = props;
    return (
        <div className="socialMediaContainer">
            <SocialIcon style={styles.iconStyle} url={_.get(icon,"url","")} bgColor="black" fgColor="red" target="_blank" />
       </div>
    )
}

export default SocialMediaIcon;