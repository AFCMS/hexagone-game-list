import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

interface Comment {
  appid: string;
  text: string;
  author: string;
  date: number;
}

interface CommentsProps {
  appid: string;
}

function getComments(appid: string): Comment[] {
  const raw = window.localStorage.getItem("comments");
  if (!raw) {
    return [];
  }
  const comments = JSON.parse(raw);
  return comments[appid] || [];
}

function setComments(appid: string, comments: Comment[]) {
  const raw = window.localStorage.getItem("comments");
  const data = raw ? JSON.parse(raw) : {};
  data[appid] = comments;
  window.localStorage.setItem("comments", JSON.stringify(data));
}

export default function Comments(props: CommentsProps) {
  const { user } = useAuth();
  const comments = getComments(props.appid);

  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      appid: props.appid,
      text: newComment,
      author: user?.email || "Anonyme",
      date: Date.now(),
    };

    setComments(props.appid, [...comments, comment]);
    setNewComment("");
  };
  return (
    <div className="w-full mx-4 justify-center items-center flex flex-col mb-6">
      <div className="flex flex-col max-w-xl gap-4 w-full m-4">
        <h2 className="font-bold text-xl mb-4">Comments</h2>
        {user ? (
          <form className="flex flex-row gap-4" onSubmit={handleSubmit}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Your comment..."
              required
              className="textarea"
            />
            <button type="submit" className="btn">
              Envoyer
            </button>
          </form>
        ) : (
          <p>Signin to post a comment</p>
        )}
        {comments.map((comment) => (
          <div
            className="flex flex-col border border-[color-mix(in_oklab,var(--color-base-content)_20%,transparent)] p-4 relative pb-8 pt-12 rounded-sm"
            key={comment.date}
          >
            <p className="font-bold absolute top-4 left-4">{comment.author}</p>
            <p>{comment.text}</p>
            <p className="absolute bottom-4 right-4">
              {new Date(comment.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
