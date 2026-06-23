# 🗺️ Google Maps API Setup Guide

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on **Select a Project** (top left)
3. Click **NEW PROJECT**
4. Enter project name: `TreatYou`
5. Click **CREATE**

## Step 2: Enable Required APIs

1. In the Cloud Console, go to **APIs & Services** > **Library**
2. Search for and enable these APIs:
   - **Maps JavaScript API**
   - **Places API**
   - **Geometry Library**
   - **Distance Matrix API** (optional)

Click **ENABLE** for each one.

## Step 3: Create API Key

1. Go to **APIs & Services** > **Credentials**
2. Click **+ CREATE CREDENTIALS** > **API Key**
3. Copy your API Key (you'll use this next)

### Restrict Your Key (Important for Security)

1. Click on your newly created API Key
2. Under **Key restrictions**:
   - **Application restrictions**: Select **HTTP referrers (web sites)**
   - Add your domain: `localhost:5173` (for development)
   - Add your production domain later
3. **API restrictions**: Select **Restrict key**
4. Check only:
   - Maps JavaScript API
   - Places API
   - Geometry Library
5. Click **SAVE**

## Step 4: Configure TreatYou

### For Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your API Key to `.env`:
   ```
   VITE_REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
   ```

3. Start dev server:
   ```bash
   npm run dev
   ```

### For Production

1. Update your `.env` in production environment
2. Update API Key restrictions to include your production domain
3. Run build:
   ```bash
   npm run build
   ```

## Enabling Required Libraries

The app uses the following Google Maps libraries:

```javascript
// From HospitalMap.jsx
<script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=places,geometry"></script>
```

**Libraries used:**
- `places` - For location search and autocomplete
- `geometry` - For distance calculations

## Troubleshooting

### "Google is not defined"
- Check API Key is set correctly
- Verify script loaded in HTML header
- Check browser console for errors

### Map not showing
- Confirm API Key has correct restrictions
- Check Network tab for 403 errors
- Verify Maps JavaScript API is enabled

### Places/Geometry not working
- Ensure libraries parameter includes both: `libraries=places,geometry`
- Verify APIs are enabled in Cloud Console

## Testing the Map

1. Navigate to `/hospitals` page
2. You should see a map with hospital markers
3. Click markers to view details
4. Toggle between map and list view

## Cost Optimization

By default, the first $200 in API calls are free each month. Tips to minimize costs:

1. ✅ Restrict API key to your domains
2. ✅ Limit API calls with debouncing
3. ✅ Cache results when possible
4. ✅ Use specific libraries only

## Production Best Practices

1. **Never commit API keys** to git (use `.env` files)
2. **Rotate keys regularly** (at least yearly)
3. **Monitor usage** in Cloud Console
4. **Set up billing alerts**
5. **Use environment-specific keys** for dev/prod

## Need Help?

- [Google Maps Documentation](https://developers.google.com/maps/documentation/javascript)
- [Places API Docs](https://developers.google.com/maps/documentation/places/web-service)
- [Geometry Library](https://developers.google.com/maps/documentation/javascript/geometry)
