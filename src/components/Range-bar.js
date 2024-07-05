import "../styles/RangeBar.css";

const RangeBar = () => {
    return(
        <>
        
        <div id="RangeBar">
            <i class='bx bxs-location-plus text-blue-600'></i>
            <div className="h-0.5 bg-stone-500 mb-px rounded">
                <div className="w-3/12 h-full bg-blue-700"></div>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-10px font-normal">242.45</div>
                <div className="text-10px font-normal">252.25</div>
            </div>
        </div>

        </>
    )
}

export default RangeBar;