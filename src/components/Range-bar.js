import "../styles/RangeBar.css";

const RangeBar = ({range, change, R2high, R2low}) => {

    const y = R2high - R2low;
    const x = range?.high - range?.low;
    const tinhtoanphamvichiemgiu = (y/x) *100;
    const tinhtoanphamvicachlow = ((R2low - range?.low) / (range?.high - range?.low)) * 100 ;

    let location;    
    let textalign;
    if (change > 0) {
        location = "0 -5px 0 0";
        textalign = "right";
    }
    else{
        location =  "0 0 0 -5px";
        textalign = "left";
    }

    return(
        <>
        <div id="RangeBar">
            <div style={{width: tinhtoanphamvichiemgiu + '%' , marginLeft: tinhtoanphamvicachlow + '%', textAlign: textalign}}>            
                <i class='bx bxs-location-plus text-blue-600' style={{margin: location}}></i>
            </div>
            <div className="h-0.5 bg-stone-500 mb-px rounded" style={{overflow: "hidden"}}>
                <div className="w-3/12 h-full bg-blue-700" style={{width: tinhtoanphamvichiemgiu + '%', marginLeft: tinhtoanphamvicachlow + '%'}}></div>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-10px font-normal">{range?.low}</div>
                <div className="text-10px font-normal">{range?.high}</div>
            </div>
        </div>

        </>
    )
}

export default RangeBar;