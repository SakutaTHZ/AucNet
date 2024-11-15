import React from "react";
import { IoChatboxEllipses, IoChatboxEllipsesOutline } from "react-icons/io5";

interface ChatsProps {
  showComment?: boolean;
  withComments?: boolean;
  commentCount?: number;
  customClass?: string;
}

const Chats: React.FC<ChatsProps> = ({
  customClass,
  showComment = false,
  withComments = false,
  commentCount = 0,
}) => {
  return (
    <div className={`relative flex justify-center w-fit ${customClass}`}>
      {showComment && <span className="absolute text-xs font-bold rounded-md -top-4 -right-2 text-red-600 bg-white px-1">{commentCount>99?"+99":commentCount}</span>}
      {withComments ? <IoChatboxEllipses size={20}/> : <IoChatboxEllipsesOutline size={20} className="text-gray-500"/>}
    </div>
  );
};

export default Chats;
