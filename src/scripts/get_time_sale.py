import sys
import json
import yfinance as yf
import pandas as pd

def get_stock_data(ticker):
    stock = yf.Ticker(ticker)
    hist = stock.history(period="1d", interval="1m")
    
    # Convert DataFrame to dictionary
    data = hist.reset_index().to_dict(orient="records")
    
    # Filter out records where Volume is 0
    filtered_data = [record for record in data if record['Volume'] != 0]
    
    # Sort data by Volume in descending order and get top 10
    top = sorted(filtered_data, key=lambda x: x['Volume'], reverse=True)[:10]
    
    # Get the last record
    if filtered_data:
        last_record = filtered_data[-1]
    else:
        last_record = data[-1]  # Fall back to the last record of the original data
    
    result = top + [last_record]
    
    # Convert Timestamp objects to strings
    for record in result:
        if isinstance(record['Datetime'], pd.Timestamp):
            record['Datetime'] = record['Datetime'].isoformat()
    
    return result

if __name__ == "__main__":
    ticker = sys.argv[1]
    data = get_stock_data(ticker)
    print(json.dumps(data, indent=4))
