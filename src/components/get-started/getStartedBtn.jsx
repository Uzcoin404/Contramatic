import React, { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { Button } from "@mui/material";
import rightArrow from "../../assets/img/icons/right-arrow.svg";
import "./getStartedBtn.scss";

function GetStartedBtn({ withArrow, isSubmit, onClick, link }) {
    const { data } = useContext(DataContext);
    return (
        <Button
            variant="contained"
            size="large"
            className="getStarted__btn"
            type={isSubmit ? "submit" : "button"}
            onClick={onClick}
            href={!link ? '' : link}
        >
            <span
                dangerouslySetInnerHTML={{
                    __html: !isSubmit ? data.get_started.title : data.contact_form_btn,
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
