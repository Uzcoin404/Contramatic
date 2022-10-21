import React, { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { Button } from "@mui/material";
import rightArrow from "../../assets/img/icons/right-arrow.svg";
import "./getStartedBtn.scss";

function GetStartedBtn({ withArrow, isSubmit }) {
    const { data } = useContext(DataContext);
    return (
        <Button
            variant="contained"
            size="large"
            className="getStarted__btn"
            type={isSubmit ? "submit" : "button"}
        >
            <span
                dangerouslySetInnerHTML={{
                    __html: !isSubmit ? data.get_started : "Send",
                }}
            />
            {withArrow ? (
                <img src={rightArrow} alt="" className="right__arrow" />
            ) : (
                ""
            )}
        </Button>
    );
}

export default GetStartedBtn;
