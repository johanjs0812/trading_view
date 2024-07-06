import "../styles/MatchedPrice.css"
import useApi from '@/hooks/ApiUse';
import ListStockInfor from './List-stock-infor';
import Loaders from './Loaders';

const MatchedPrice = () => {
    const { data, loading, error } = useApi('http://localhost:3000/api/v1/Sp500Index');

    const StockItems = ({ Component }) => {
        return (
            <>
                {Component}
            </>
        );
    };

    if (loading) {
        return <StockItems Component={<Loaders />} />;
    } else {
        return (
            <>
                <div id="giancach"></div>
                <table id="MatchedPrice" className="proboard banggia-full">
                    
                    <colgroup>
                        <col className="show-on-mobile col-symbol" />
                        <col className="show-on-mobile col-price" />
                        <col className="show-on-mobile col-price" />
                        <col className="show-on-mobile col-price" />
                        <col className="col-vol col-vol-lg" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol col-vol-sm" />
                        <col className="col-diff" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-vol" />
                        <col className="col-price" />
                        <col className="col-price" />
                        <col className="col-price" />
                        <col className="col-vol col-vol-lg" />
                        <col className="col-vol" />
                        <col className="col-vol" />
                    </colgroup>

                    <StockItems Component={<ListStockInfor data={data} />} />
                </table>
            </>
        );
    }
};


export default MatchedPrice;
