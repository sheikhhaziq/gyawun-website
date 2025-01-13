// app/api/logAction.js
import { db } from '../../../lib/firebase'; // Import Firebase connection
import * as admin from 'firebase-admin';

export async function GET(req: Request) {
  const url = new URL(req.url);
  var action = url.searchParams.get('action');   // Action: 'download' or 'update'
  const redirectUrl = url.searchParams.get('url'); // URL for redirection
  var platform = url.searchParams.get('platform'); // Platform: 'windows' or 'android'
  action ??= 'download';
  action = action.toLowerCase();
  platform ??= 'unknown';
  platform = platform.toLowerCase();
  if (!action || !redirectUrl || !platform) {
    return new Response(JSON.stringify({ message: 'Missing required parameters' }), { status: 400 });
  }

  try {
    // Fetch the action log from Firestore
    const docRef = db.collection('logs').doc(action);  // Action like 'download' or 'update'
    const docSnap = await docRef.get();

    // Check if document exists
    if (docSnap.exists) {
      const data = docSnap.data();

      // If data is undefined or doesn't contain the platform, initialize it
      if (!data || !data[platform]) {
        const newData = {
          [platform]: {
            download: 0,
            update: 0
          }
        };

        // Set the new structure if missing
        await docRef.set(newData, { merge: true });

        // Initialize the specific action count

        await docRef.update({
          [`${platform}.${action}`]: admin.firestore.FieldValue.increment(1),
        });

        return Response.redirect(redirectUrl, 302);
      }

      // Data exists for this platform, so increment the respective action
      const platformData = data[platform];

      // Ensure the action field exists (either 'download' or 'update')
      if (!platformData[action]) {
        platformData[action] = 0;
      }

      // Increment the specific action count
      await docRef.update({
        [`${platform}.${action}`]: admin.firestore.FieldValue.increment(1),
      });

      // If no redirect, return the updated data
      return Response.redirect(redirectUrl, 302);
    } else {
      // If document doesn't exist, create a new document with the correct structure
      const newData = {
        [platform]: {
          download: action == 'download' ? 1 : 0,  // Initialize download count
          update: action == 'update' ? 1 : 0     // Initialize update count
        }
      };

      await docRef.set(newData);
      return Response.redirect(redirectUrl, 302);
    }
  } catch (error) {
    console.error("Error processing log action:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
}
