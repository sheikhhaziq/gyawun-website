// File: /pages/api/logDownload.js

import fs from 'fs';
import path from 'path';
import writeFileAtomic from 'write-file-atomic';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { platform } = req.body;

    if (!platform) {
      return res.status(400).json({ message: 'Platform is required' });
    }

    // Path to the JSON file
    const filePath = path.join(process.cwd(), 'downloads.json');

    // Read the current data
    let data = {};
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileContents);
    }

    // Increment the download count for the specified platform
    if (!data[platform]) {
      data[platform] = 0; // Initialize if not present
    }
    data[platform] += 1;

    // Write updated data back to the JSON file safely
    try {
      writeFileAtomic.sync(filePath, JSON.stringify(data, null, 2));
      return res.status(200).json({ message: 'Download logged successfully!', data });
    } catch (error) {
      console.error('Error writing to file:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
