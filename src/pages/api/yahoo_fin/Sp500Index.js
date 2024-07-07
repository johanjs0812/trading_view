import yahooFinance from 'yahoo-finance2';
import { sp500Symbols } from '@/lib/sp500_symbols';

const SP500INDEX = async (req, res) => {
  try {
    const responses = await Promise.all(
      sp500Symbols.map(async symbol => {
        try {
          const quote = await yahooFinance.quote(symbol);
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
}

export default SP500INDEX;