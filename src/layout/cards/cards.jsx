import React from "react";
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

const data = [
    {
        title: "Quoten/Daten",
        chips: [
            "20 Sportarten",
            "80.000 pre match",
            "40.000 live events",
            "Über 500 bet markets",
            "Live Tracker",
            "Statistiken",
        ],
        description:
            "Alle Quoten können gleichzeitig oder einzeln erhöht, reduziert, manipuliert oder gesperrt werden.",
        img: label1,
    },
    {
        title: "Cashout",
        chips: ["Cashout Profit einstellbar", "Teil Cashout", "Auto. Cashout"],
        description: "",
        img: label2,
    },
    {
        title: "Interface",
        description:
            "Das Design und die Farben sind frei nach Ihrem Wünsch wählbar. Ebenso sind Top-Ligen und Top-Events vom Backoffice einstellbar.",
        img: label3,
    },
    {
        title: "Bonus System",
        description:
            "Wir haben eine Vielzahl an automatisierten Bonus Möglichkeiten. Individuelle Boni können im Backoffice mit den jeweiligen Bonus Bestimmungen selber konfiguriert werden. Zum Beispiel: Freebet Bonus, Backup Bet Bonus, Welcome Bonus, Verlust Bonus, Einzahlungsbonus usw.",
        img: label4,
    },
    {
        title: "Bonus System",
        description:
            "Wir haben eine Vielzahl an automatisierten Bonus Möglichkeiten. Individuelle Boni können im Backoffice mit den jeweiligen Bonus Bestimmungen selber konfiguriert werden. Zum Beispiel: Freebet Bonus, Backup Bet Bonus, Welcome Bonus, Verlust Bonus, Einzahlungsbonus usw.",
        img: label5,
    },
    {
        title: "Bonus System",
        description:
            "Wir haben eine Vielzahl an automatisierten Bonus Möglichkeiten. Individuelle Boni können im Backoffice mit den jeweiligen Bonus Bestimmungen selber konfiguriert werden. Zum Beispiel: Freebet Bonus, Backup Bet Bonus, Welcome Bonus, Verlust Bonus, Einzahlungsbonus usw.",
        img: label6,
    },
    {
        title: "Bonus System",
        description:
            "Wir haben eine Vielzahl an automatisierten Bonus Möglichkeiten. Individuelle Boni können im Backoffice mit den jeweiligen Bonus Bestimmungen selber konfiguriert werden. Zum Beispiel: Freebet Bonus, Backup Bet Bonus, Welcome Bonus, Verlust Bonus, Einzahlungsbonus usw.",
        img: label7,
    },
    {
        title: "Bonus System",
        description:
            "Wir haben eine Vielzahl an automatisierten Bonus Möglichkeiten. Individuelle Boni können im Backoffice mit den jeweiligen Bonus Bestimmungen selber konfiguriert werden. Zum Beispiel: Freebet Bonus, Backup Bet Bonus, Welcome Bonus, Verlust Bonus, Einzahlungsbonus usw.",
        img: label8,
    },
];
export default function Cards() {
    return (
        <section className="cards">
            <Container>
                <div className="labels">
                    <Labels data={data} />
                </div>
            </Container>
        </section>
    );
}
