
/**
 * Open Graph Image Generation Script
 * 
 * This script provides instructions on how to generate the OG image for the HyphenBox website.
 * 
 * To generate the OG image manually:
 * 1. Run your development server: npm run dev
 * 2. Navigate to /og-image route in a browser: http://localhost:8080/og-image
 * 3. Take a screenshot of the rendered component (1200x630px)
 * 4. Save the screenshot as og-image.png in the public folder
 * 
 * Important: After generating the og-image.png, make sure it's properly copied 
 * to the root of your deployed site for social media platforms to find it.
 * 
 * WhatsApp-specific considerations:
 * - WhatsApp prefers images with 1:1 aspect ratio but will crop 1.91:1
 * - Make sure text is within the center safe area (will be visible after cropping)
 * - Use PNG format with clean backgrounds for best results
 * - Test with the WhatsApp URL debugger or by sharing a link in a private chat
 */

console.log(`
=== Open Graph Image Generation ===
To generate the OG image:

1. Run your development server with: npm run dev
2. Navigate to: http://localhost:8080/og-image
3. Take a screenshot of the page at 1200x630px
4. Save as public/og-image.png
5. Verify your OG image by testing the URL with:
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
   - WhatsApp: Share your URL in a private chat to test
   
Note: 
- WhatsApp may crop images to a square format, so keep important content centered
- Social media platforms often cache OG images. If you update your OG image,
  you may need to use their debugging tools to refresh the cache.
- For WhatsApp specifically, you might need to wait 24 hours after changes or
  use the Facebook debugger to force a cache refresh.
`);
