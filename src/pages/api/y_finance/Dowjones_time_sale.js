import { exec } from 'child_process';
import { promisify } from 'util';
const execAsync = promisify(exec);

export default async function time_sale(req, res) {
  const { ticker } = req.query;

  if (!ticker) {
    res.status(400).json({ error: 'Ticker is required' });
    return;
  }

  try {
    const command = `cmd /c "cd src\\scripts && venv\\Scripts\\activate && python get_time_sale.py ${ticker}"`;
    const { stdout, stderr } = await execAsync(command);
    if (stderr) {
      console.error('Error executing Python script:', stderr);
      throw new Error(stderr);
    }

    const data = JSON.parse(stdout);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Failed to fetch stock data', details: error.message });
  }
}
