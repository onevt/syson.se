import type { APIRoute } from "astro";
const { INSTAGRAM_ACCESS_TOKEN } = import.meta.env;

export const get: APIRoute = async () => {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${INSTAGRAM_ACCESS_TOKEN}}`
  );
  const data = await response.json();
  return new Response(JSON.stringify(data.data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
