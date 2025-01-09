import fs from 'fs';
import path from 'path';
import writeFileAtomic from 'write-file-atomic';

export async function GET(req) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const downloadUrl = searchParams.get('url');
    let platform = searchParams.get('platform');
    let type = searchParams.get('type');

    platform ??= 'unknown';
    type ??= 'download';


    if (!downloadUrl) {
      return new Response(JSON.stringify({ message: 'Missing required parameters' }), { status: 400 });
    }

    // Path to the JSON file
    const filePath = path.join(process.cwd(), 'downloads.json');

    // Read the current data
    let data = {};
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileContents);
    }

    // Initialize platform if not present
    if (!data[platform]) {
      data[platform] = { download: 0, update: 0 };
    }

    // Increment the count for the specified type
    data[platform][type] += 1;

    // Write updated data back to the JSON file safely
    writeFileAtomic.sync(filePath, JSON.stringify(data, null, 2));

    // Redirect to the provided download URL
    return Response.redirect(downloadUrl, 302);
  } catch (error) {
    console.error('Error logging and redirecting:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
