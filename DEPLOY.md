# Deploying to Vercel

This project is configured for easy deployment on [Vercel](https://vercel.com).

## Prerequisites

- A [Vercel Account](https://vercel.com/signup)
- The [Vercel CLI](https://vercel.com/docs/cli) (Optional, for manual deployment)

## Setup for Live Preview (Automatic)

The easiest way to get "Live Previews" for every commit is to connect your Git repository to Vercel.

1.  **Push your code** to GitHub, GitLab, or Bitbucket (you've already done this!).
2.  Go to your **Vercel Dashboard** and click **"Add New..."** -> **"Project"**.
3.  **Import** the repository `udroid-ui`.
4.  **Framework Preset:** Vercel should automatically detect `Vite`.
    *   If not manually select **Vite**.
5.  **Build Settings:** Default settings should work:
    *   Build Command: `npm run build`
    *   Output Directory: `dist`
    *   Install Command: `npm install`
6.  Click **Deploy**.

## What I Configured

I have added a `vercel.json` file to the root of your project:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration ensures that **Routing works correctly**. Without this, refreshing a page like `/docs/installation` would result in a 404 error because Vercel wouldn't know to serve the `index.html` file for that route.

## Live Previews

Once connected:
- Every **Push** to `main` will update your live production site.
- Every **Pull Request** will create a unique **Preview URL** for you to test changes live before merging.
