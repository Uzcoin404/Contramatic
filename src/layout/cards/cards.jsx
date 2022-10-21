import React, { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { Container } from "@mui/material";
import Labels from "../../components/labels/labels";
import label1 from "../../assets/img/label1.png";
import label2 from "../../assets/img/label2.png";
import label3 from "../../assets/img/label3.png";
import label4 from "../../assets/img/label4.png";
import label5 from "../../assets/img/label5.png";
import label6 from "../../assets/img/label6.png";
import label7 from "../../assets/img/label7.png";
import label8 from "../../assets/img/label8.png";

export default function Cards() {
    const { data } = useContext(DataContext);
    const labelData = [
        {
            title: data.label1_title,
            chips: [
                data.label1_chip1,
                data.label1_chip2,
                data.label1_chip3,
                data.label1_chip4,
                data.label1_chip5,
                data.label1_chip6,
            ],
            description: data.label1_text,
            img: label1,
        },
        {
            title: data.label2_title,
            chips: [
                data.label2_chip1,
                data.label2_chip2,
                data.label2_chip3,
            ],
            description: "",
            img: label2,
        },
        {
            title: data.label3_title,
            description: data.label3_text,
            img: label3,
        },
        {
            title: data.label4_title,
            description: data.label4_text,
            img: label4,
        },
        {
            title: data.label5_title,
            description: data.label5_text,
            img: label5,
        },
        {
            title: data.label6_title,
            description: data.label6_text,
            img: label6,
        },
        {
            title: data.label7_title,
            description: data.label7_text,
            img: label7,
        },
        {
            title: data.label8_title,
            description: data.label8_text,
            img: label8,
        },
    ];
    return (
        <section className="cards">
            <Container>
                <div className="labels">
                    <Labels data={labelData} />
                </div>
            </Container>
        </section>
    );
}
