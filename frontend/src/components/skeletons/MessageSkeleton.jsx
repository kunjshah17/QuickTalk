import "./MessageSkeleton.css";

const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="message-skeleton-container">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`message-skeleton ${idx % 2 === 0 ? "align-start" : "align-end"}`}
        >
          <div className="avatar-skeleton" />
          <div className="timestamp-skeleton" />
          <div className="bubble-skeleton" />
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
