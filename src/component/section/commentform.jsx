import { useState } from "react";

const title = "Leave a Comment";

function CommentForm(props) {
  const [respondName, setRespondName] = useState("");
  const [respondEmail, setRespondEmail] = useState("");
  const [respondSubject, setRespondSubject] = useState("");
  const [respondMassage, setRespondMassage] = useState("");

  return (
    <div id="respond" className="comment-respond">
      <h6 className="h7">{title}</h6>
      <div className="add-comment">
        <form
          action="#"
          method="post"
          id="commentform"
          className="comment-form"
        >
          <input
            type="text"
            name="name"
            id="item01"
            value={respondName}
            onChange={(e) => {
              setRespondName(e.target.value);
            }}
            placeholder="Your Name *"
          />
          <input
            type="text"
            name="email"
            id="item02"
            value={respondEmail}
            onChange={(e) => {
              setRespondEmail(e.target.value);
            }}
            placeholder="Your email *"
          />
          <input
            type="text"
            name="subject"
            id="item03"
            className="w-100"
            value={respondSubject}
            onChange={(e) => {
              setRespondSubject(e.target.value);
            }}
            placeholder="Write a Subject"
          />
          <textarea
            rows="7"
            type="text"
            id="item04"
            name="message"
            value={respondMassage}
            onChange={(e) => {
              setRespondMassage(e.target.value);
            }}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="default-button">
            <span>Send Comment</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
