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
  const response = await fetch("/insta", {
    headers: { Accept: "application/json" },
  });
  const json = await response.json();
  return json || {};
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
