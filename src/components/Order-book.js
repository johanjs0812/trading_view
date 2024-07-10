import "../styles/OrderBook.css"
import splitTrades from "@/helpers/splitTrades";
import extractAndSortClose from "@/helpers/extractAndSortClose";
import extractAndSortVolume from "@/helpers/extractAndSortVolume";
import buyingandsellingPower from "@/helpers/buyingandsellingPower";

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
  
const OrderBook = ({SymbolResponse}) => {
    let dulieu = {};
    if (SymbolResponse) {
        dulieu = splitTrades(SymbolResponse.Infoby1p);
    }

    const data = {
        labels: extractAndSortClose(dulieu.buyTrades, dulieu.sellTrades),
        datasets: [
            {
                label: 'Mua chủ động',
                data: extractAndSortVolume(dulieu.buyTrades),
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderColor: 'rgba(0, 255, 0, 1)',
                borderWidth: 1
            },
            {
                label: 'Bán chủ động',
                data:extractAndSortVolume(dulieu.sellTrades),
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
                    <div className="text-xs">Mua: {buyingandsellingPower(extractAndSortVolume(dulieu.buyTrades),extractAndSortVolume(dulieu.sellTrades), "buy")}%</div>
                </div>

                <div className="flex gap-1 items-center py-1.5 w-2/4 justify-center">
                    <div className="bg-sell size-2.5"></div>
                    <div className="text-xs">Bán: {buyingandsellingPower(extractAndSortVolume(dulieu.buyTrades),extractAndSortVolume(dulieu.sellTrades), "sell")}%</div>
                </div>
            </div>
        </div>      
        </>
    )

}

export default OrderBook;