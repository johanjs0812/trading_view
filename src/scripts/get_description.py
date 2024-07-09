import sys
import json
import yfinance as yf

def get_stock_info(ticker):
    stock = yf.Ticker(ticker)
    info = stock.info
    
    # Chuyển đổi thông tin thành định dạng JSON
    info_json = json.dumps(info, indent=4)
    
    return info_json

if __name__ == "__main__":
    ticker = sys.argv[1]
    data = get_stock_info(ticker)
    print(data)
