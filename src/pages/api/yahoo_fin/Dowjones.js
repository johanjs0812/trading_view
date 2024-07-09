import yahooFinance from 'yahoo-finance2';
import { dowJonesSymbols } from '@/lib/dowJones_symbols';
import { Y_FIN, PORT, API, DOWJONES_DETAIL_EPOINT } from '@/constants/Api';

const DOWJONESINDEX = async (req, res) => {
  try {
    const responses = await Promise.all(
      dowJonesSymbols.map(async symbol => {
        try {
          const response = await fetch(`${PORT}/${API}/${Y_FIN}/${DOWJONES_DETAIL_EPOINT}?ticker=${symbol}`);    
          const responseData = await response.json();
          const quote = await yahooFinance.quote(symbol);

          quote.Infoby1p = responseData; 
          return quote;

        } catch (error) {
          console.error(`Error fetching quote for ${symbol}:`, error);
          return null;
        }
      })
    );

    res.status(200).json(responses.filter(quote => quote !== null));
  } catch (error) {
    console.error('Error fetching stock quotes:', error);
    res.status(500).json({ error: 'Failed to fetch stock quotes' });
  }
};

export default DOWJONESINDEX;

