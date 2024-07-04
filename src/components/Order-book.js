import "../styles/OrderBook.css"
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
const OrderBook = () => {

    const data = {
        labels: ['20.4', '20.45', '20.5', '20.55', '20.6', '20.65', '20.7', '20.75', '20.8', '20.85', '20.9', '20.95', '21', '21.05', '21.1', '21.15', '21.2'],
        datasets: [
            {
                label: 'Mua chủ động',
                data: [49.90, 30, 17.70, 107.90, 265.80, 229.10, 504.90, 371.20, 352.30, 300, 441.10, 414.80, 1001.80, 390, 594.20, 144.50, 82.70],
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderColor: 'rgba(0, 255, 0, 1)',
                borderWidth: 1
            },
            {
                label: 'Bán chủ động',
                data: [0, 0, 0, 107.90, 265.80, 229.10, 504.90, 371.20, 352.30, 300, 441.10, 414.80, 1001.80, 390, 594.20, 144.50, 82.70],
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 1
            }
        ]
    };
    
    const options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                stacked: true,
                display: true,
                gird:{
                    display: true,
                    color: 'rgba(0,0,0,0)'
                }
            },
            y: {
                stacked: true,
                gird:{
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };


    return(
        <>     
        <div id="OrderBook">

            <div className="flex w-full header px-2.5 ">
                <div className="w-4/5 py-1.5 text-xs font-semibold cursor-pointer act-act text-center">Biểu đồ khớp lệnh theo bước giá</div>
                <div className="flex gap-x-1.5 w-1/5 justify-end">
                    <i class='bx bx-refresh text-lg cursor-pointer'></i>
                    <i class='bx bx-list-ul text-lg cursor-pointer' ></i>
                </div>
            </div>

            <div className="table-title flex px-2.5 justify-between py-1.5 bg-row-xam">
                <div className="flex gap-1 items-center">
                    <div className="bg-buy size-2.5"></div>
                    <div className="text-xs">Mua chủ động</div>
                    <i class='bx bxs-info-circle cursor-pointer'></i>
                </div>

                <div className="flex gap-1 items-center">
                    <div className="bg-sell size-2.5"></div>
                    <div className="text-xs">Bán chủ động</div>
                    <i class='bx bxs-info-circle cursor-pointer'></i>
                </div>

                <div className="flex gap-1 items-center">
                    <div className="bg-none size-2.5"></div>
                    <div className="text-xs">ATO & ATC</div>
                </div>
            </div>

            <div className="content px-2.5" >
                <Bar data={data} options={options} style={{width:"100%", height: "360px"}}/>
            </div>

            <div className="footer-ct bg-row-xam flex">
                <div className="flex gap-1 items-center py-1.5 w-2/4 justify-center">
                    <div className="bg-buy size-2.5"></div>
                    <div className="text-xs">Mua: 64%</div>
                </div>

                <div className="flex gap-1 items-center py-1.5 w-2/4 justify-center">
                    <div className="bg-sell size-2.5"></div>
                    <div className="text-xs">Bán: 38%</div>
                </div>
            </div>
        </div>      
        </>
    )

}

export default OrderBook;