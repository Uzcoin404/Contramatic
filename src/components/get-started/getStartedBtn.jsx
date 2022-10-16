import React from "react";
import { Button } from "@mui/material";
import rightArrow from "../../assets/img/icons/right-arrow.svg";
import "./getStartedBtn.scss";

function GetStartedBtn({ withArrow }) {
    return (
        <Button variant="contained" size="large" className="getStarted__btn">
            Get Started
            {withArrow ? (
                <img src={rightArrow} alt="" className="right__arrow" />
            ) : (
                ""
            )}
        </Button>
    );
}

export default GetStartedBtn;
