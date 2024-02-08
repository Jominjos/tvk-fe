import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Carousel from "../components/Carousel";
import { API_BASE_URL } from "../config";
import Cookies from "js-cookie";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const slides = [
    //"https://live.staticflickr.com/65535/52982630415_6af366993c_h.jpg",
    "https://firebasestorage.googleapis.com/v0/b/tvkblog-4b39f.appspot.com/o/speech.jpg?alt=media&token=d54453e6-e2ec-4038-aafd-103b3ff4c50c",
    "https://firebasestorage.googleapis.com/v0/b/tvkblog-4b39f.appspot.com/o/patti.jpg?alt=media&token=3c54c481-7674-41f8-9457-013bd9052925",
    "https://firebasestorage.googleapis.com/v0/b/tvkblog-4b39f.appspot.com/o/tholar.jpg?alt=media&token=b95ddeb5-0125-4f42-860d-0446839d36e6",
    // "https://live.staticflickr.com/65535/52982259731_5c36b72b09_b.jpg",
    //"https://live.staticflickr.com/65535/52980540197_be36a66b41_b.jpg",
  ];
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${API_BASE_URL}/api/post/getPosts`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          jwt_token: ` ${Cookies.get("token")}`,
          // Other headers if needed
        },
      });
      const data = await res.json();
      //

      //
      console.log("getting posts");

      setPosts(data.posts);
      // setPosts([
      //   {
      //     title: "Blog name",
      //     category: "article category",
      //     image:
      //       "https://live.staticflickr.com/65535/52982259731_5c36b72b09_b.jpg",
      //     slug: "as",
      //   },
      // ]);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      {/* <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div> */}
      {/* <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div> */}
      <div>
        <Carousel>
          {slides.map((s) => (
            <img src={s} key={s} />
          ))}
        </Carousel>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
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
