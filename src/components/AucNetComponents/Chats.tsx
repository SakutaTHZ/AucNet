import React, { useState } from "react";
import { IoChatboxEllipses, IoChatboxEllipsesOutline } from "react-icons/io5";
import Popup from "./Popup";
import CommentBox from "./CommentBox";

interface ChatsProps {
  showComment?: boolean;
  withComments?: boolean;
  comments?: any;
  customClass?: string;
}

const Chats: React.FC<ChatsProps> = ({
  customClass,
  showComment = false,
  withComments = false,
  comments = 0,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [theComments, setComments] = useState(comments || []);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentData = {
        name: "You",
        time: new Date().toLocaleString(),
        comment: newComment,
        reply: [],
      };

      setComments([...comments, newCommentData]);
      setNewComment("");
    }
  };

  return (
    <>
      <div
        className={`relative flex justify-center w-fit cursor-pointer ${customClass}`}
        onClick={openPopup}
      >
        {showComment && (
          <span className="absolute text-xs font-bold rounded-md -top-3 -right-2 text-red-600 bg-white px-1">
            {comments.length > 99 ? "+99" : comments.length}
          </span>
        )}
        {withComments ? (
          <IoChatboxEllipses size={20} className="text-gray-800" />
        ) : (
          <IoChatboxEllipsesOutline size={20} className="text-gray-500" />
        )}
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title={`Comments (${theComments.length})`}
        customClass={`custom-scrollbar m-2 w-1/2 overflow-y-scroll ${theComments.length<3?'h-auto':'h-3/4'}`}
        content={
          <>
          <div className="commentBox flex flex-col gap-4 border p-4 mb-4 pr-1 rounded-lg">
            {theComments.length === 0 ? (
              <p className="text-gray-400">
                No comments yet.
              </p>
            ) : (
              theComments.map((comment: any, index: any) => (
                <CommentBox
                  key={index}
                  customClass="border-b border-b-gray-200"
                  commentData={comment}
                />
              ))
            )}
          </div>
          
          <div className="flex gap-3">
          <img
            src={"https://cosmo-images.azureedge.net/stock/original/our_78146_b49d9285-cc91-4b89-92a6-1e4d2a9e310b.jpg?preset=bigimage"}
            className="w-12 md:w-12 aspect-square bg-center bg-fixed bg-cover rounded-full"
            alt="profile"
          />
          <input
            type="text"
            className="h-12 bg-white border rounded-md px-2 w-full"
            placeholder="Enter Comment"
            value={newComment}
            onChange={handleInputChange}
          />
          <button
            onClick={handleAddComment}
            className={` text-nowrap px-4 py-1 rounded-md font-semibold transition-all ${
              newComment.trim() === ""
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-amber-200 border border-yellow-400 cursor-pointer"
            }`}
            disabled={newComment.trim() === ""}
          >
            Submit
          </button>
        </div>
        </>
        }
      />
    </>
  );
};

export default Chats;
