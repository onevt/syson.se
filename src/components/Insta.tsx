import { createResource, ResourceReturn } from "solid-js";
import Masonry from "./Masonry";
import styles from "./Insta.module.css";

type IntaResponse = Array<InstaData>;

type InstaData = {
  caption: string;
  id: string;
  media_type: "VIDEO" | "IMAGE" | "CAROUSEL_ALBUM";
  media_url: string | undefined;
  permalink: string;
  thumbnail_url: string | undefined;
};

const fetchPosts = async () => {
  const response = await fetch(
    "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=IGQVJVVlVKaklYRDNtWUI5MzJBZATUwVGhDUFNad0pBRmo0MG9UTHNCY3VNUEZAxODV4MUNtTHdaNkZA1dGVqUXVJUldnT1NrQndhUURNQk5oa2Y5dzVOYlh1MUZAMZA1hwVjlldmJmUHZAR",
    { headers: { Accept: "application/json" } }
  );
  const json = await response.json();
  return json?.data || [];
};

const getImageUrl = (post: InstaData) =>
  post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;

const Insta = () => {
  const [posts]: ResourceReturn<IntaResponse> = createResource(fetchPosts);

  return (
    <>
      <div class={styles.wrapper}>
        {posts() && (
          <Masonry
            breakpointCols={{ small: 3, medium: 4, large: 5 }}
            class={styles.masonry}
            columnClassName={styles.masonryColumn}
          >
            {posts()?.map((post: InstaData) => (
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <picture>
                  <img
                    class={styles.image}
                    src={getImageUrl(post)}
                    alt={post.caption}
                  />
                </picture>
              </a>
            ))}
          </Masonry>
        )}
      </div>
    </>
  );
};

export default Insta;
