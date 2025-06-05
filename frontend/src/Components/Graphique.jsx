import {LineChart} from "@mui/x-charts";
import {useMemo} from "react";

export default function Graphique({type,donnee}){

    const { tableauX, tableauY } = useMemo(() => {
        const tableauX = donnee.map(donnee => {
            const date = new Date(donnee.date);
            return date.toLocaleTimeString();
        });

        const tableauY = donnee.map(donnee => donnee.valeur);

        return { tableauX, tableauY };
    }, [donnee]);

    return (
        <div>
            <h3>{type.toUpperCase()}</h3>
            <div style={{width: '90vw', margin: '0 auto'}}>
                <LineChart
                    xAxis={[{scaleType: 'point', data: tableauX}]}
                    series={[
                        {
                            data: tableauY,
                        },
                    ]}
                    height={300}
                />
            </div>

        </div>
    );
}