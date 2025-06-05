import Graphique from "./Graphique.jsx";
import { useEffect, useState } from "react";

export default function Graphiques() {
    const type = ["lumiere", "temperature"];

    const [lumiere, setLumiere] = useState([]);
    const [temperature, setTemperature] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:8080/getDonnee"); // ou ton URL backend
            const data = await response.json();

            // Supposons que chaque élément a : temperature, luminosite, date
            const lumiereData = data.map(d => ({
                valeur: d.luminosite,
                date: d.date
            }));

            const temperatureData = data.map(d => ({
                valeur: d.temperature,
                date: d.date
            }));

            setLumiere(lumiereData);
            setTemperature(temperatureData);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    }

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 15000); // actualise toutes les 15 secondes

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {type.map(value => (
                <Graphique
                    key={value}
                    type={value}
                    donnee={value === "lumiere" ? lumiere : temperature}
                />
            ))}
        </>
    );
}
