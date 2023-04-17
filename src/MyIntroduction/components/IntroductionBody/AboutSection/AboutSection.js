import React from "react";
import "./AboutSection.css";
import NiravProfile from "MyIntroduction/Assets/NiravProfile.jpg";

function AboutSection() {

    const calculateAge = () => { 
        var diff_ms = Date.now() - new Date("2000-01-04").getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    } 

    return (
        <div className="aboutSectionContainer">
            <div className="photoContainer">
                <img src={NiravProfile} width={380} height={500} alt="Nirav's Profile" />
            </div>
            <div className="detailsContainer">
                <div className="titleContainer">
                    <div className="title">About me
                        <span className="nameTitle">I'm Nirav</span>
                    </div>
                </div>
                <div className="aboutMeDetails">
                    <div className="desctiptionText">
                        I'm a web designer and particularly good at frontend development with 2 years of work experiance with a product 
                        based startup company established in Bangluru, India. I'm passinate and creative programmer who can come up with
                        optimised solution of any problem using problem solving skills that I have grown from past five years. 
                    </div>
                    <div className="desctiptionTable">
                        <div className="tableColumn">
                            <div className="tableRow">
                                <div className="labelCell">
                                    Name:
                                </div>
                                <div className="normalCell">
                                    Nirav Dadhaniya
                                </div>
                            </div>
                            <div className="tableRow">
                                <div className="labelCell">
                                    Email:
                                </div>
                                <div className="normalCell">
                                    nvd8866@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="tableColumn">
                            <div className="tableRow">
                                <div className="labelCell">
                                    Age:
                                </div>
                                <div className="normalCell">
                                   {calculateAge()}
                                </div>
                            </div>
                            <div className="tableRow">
                                <div className="labelCell">
                                    Address:
                                </div>
                                <div className="normalCell" style={{cursor: "pointer"}}>
                                    <a className="normalCell" href="https://goo.gl/maps/32yKdfUGkAmPgbwbA" target="_blank">C-1004, Sidhdheswar Heights, Surat, Gujarat, India - 395006</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;