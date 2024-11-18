import React, { useState } from "react";
import { GoReply } from "react-icons/go";

interface CommentBoxProps {
  customClass?: string;
  commentData?: any;
  isReply?: boolean;
}

const CommentBox: React.FC<CommentBoxProps> = ({
  customClass,
  commentData,
  isReply = false,
}) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState(commentData.reply || []);

  const toggleReplyBox = () => setShowReplyBox(!showReplyBox);

  const handleReplyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
  };

  const handleAddReply = () => {
    if (replyText.trim() !== "") {
      const newReply = {
        name: "You",
        time: new Date().toLocaleString(),
        comment: replyText,
        reply: [],
      };
      setReplies([...replies, newReply]);
      setReplyText("");
      setShowReplyBox(false);
    }
  };

  return (
    <div className={`comment ${customClass}`}>
      <div className="flex items-center gap-2">
        <img
          src="https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg"
          className="w-7 md:w-9 aspect-square bg-center bg-fixed bg-cover rounded-full"
          alt="profile"
        />
        <p className="font-semibold text-gray-900">{commentData.name}</p>
        <p className="text-sm text-gray-400">{commentData.time}</p>
      </div>
      <div className="px-12 py-2 text-left">{commentData.comment}</div>

      {!isReply && (
        <>
          {!showReplyBox && (
            <div className="px-12 py-2 mb-2">
              <button
                onClick={toggleReplyBox}
                className="flex gap-2 items-center text-nowrap rounded-md text-gray-400 hover:text-gray-700 transition-all"
              >
                <GoReply />
                Reply
              </button>
            </div>
          )}

          {/* Show reply box when the reply button is clicked */}
          {showReplyBox && (
            <div className="replyBox flex flex-col gap-3 mb-8 pl-12">
              <div className="flex gap-3 w-full">
                <img
                  src="https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg"
                  className="h-10 aspect-square bg-center bg-fixed bg-cover rounded-full"
                  alt="profile"
                />
                <input
                  type="text"
                  className="bg-white border rounded-md px-2 w-full"
                  placeholder="Enter Comment"
                  value={replyText}
                  onChange={handleReplyInputChange}
                />
              </div>
              <div className="flex gap-3 justify-end w-full">
                <button
                  onClick={handleAddReply}
                  className={`text-nowrap px-4 py-1 rounded-md font-semibold transition-all ${
                    replyText.trim() === ""
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-amber-200 border border-yellow-400 cursor-pointer"
                  }`}
                  disabled={replyText.trim() === ""}
                >
                  Reply
                </button>
                <button
                  onClick={toggleReplyBox}
                  className="bg-gray-200 text-nowrap px-4 py-1 rounded-md font-semibold transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {replies.length > 0 &&
        replies.map((reply: any, index: any) => (
          <CommentBox
            key={index}
            customClass="pl-12 pb-4"
            commentData={reply}
            isReply={true}
          />
        ))}
    </div>
  );
};

export default CommentBox;
