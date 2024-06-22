import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Carousel from "../components/Carousel";
import { API_BASE_URL } from "../config";
import Cookies from "js-cookie";
import Carouselpc from "../components/CarouselPc";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Determine if the screen is mobile on component mount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Example breakpoint for mobile
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile
    ? [
        "https://firebasestorage.googleapis.com/v0/b/tvkblog-4b39f.appspot.com/o/speech.jpg?alt=media&token=d54453e6-e2ec-4038-aafd-103b3ff4c50c",
        "https://firebasestorage.googleapis.com/v0/b/tvkblog-4b39f.appspot.com/o/patti.jpg?alt=media&token=3c54c481-7674-41f8-9457-013bd9052925",
        "https://firebasestorage.googleapis.com/v0/b/tvkblog-4b39f.appspot.com/o/tholar.jpg?alt=media&token=b95ddeb5-0125-4f42-860d-0446839d36e6",
      ]
    : [
        "https://firebasestorage.googleapis.com/v0/b/tvkblog-4b39f.appspot.com/o/pattiPc.jpg?alt=media&token=3c0db5ae-2e52-4b30-a764-c9b5ee0d3c1e",
        // "https://live.staticflickr.com/65535/52980540197_be36a66b41_b.jpg",
        // "https://live.staticflickr.com/65535/52982630415_6af366993c_h.jpg",
        // Additional desktop slides if needed
      ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/post/getPosts`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            jwt_token: ` ${Cookies.get("token")}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setPosts(data.posts);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        {isMobile ? (
          <Carousel>
            {slides.map((s) => (
              <img src={s} key={s} />
            ))}
          </Carousel>
        ) : (
          <Carouselpc>
            {slides.map((s) => (
              <img src={s} key={s} />
            ))}
          </Carouselpc>
        )}
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 justify-around">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
