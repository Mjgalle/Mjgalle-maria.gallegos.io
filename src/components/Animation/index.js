import styled, { keyframes } from "styled-components";

const fall = keyframes`
 from {
      transform: translateX(-50%) translateY(-100%);
  }
  to {
    transform: translateX(-50%) translateY(120px);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 120px;
  font-size: 2rem;
  overflow: hidden;
  position: relative;
  .kick-off-animation {
    animation: ${fall} var(--duration) var(--delay, 0ms) linear backwards
      infinite;
  }
  .emoji {
    top: 0;
  }
`;

function sample(collection) {
  if (!collection) {
    return undefined; // Handle null or undefined input
  }

  // If it's an array
  if (Array.isArray(collection)) {
    const randomIndex = Math.floor(Math.random() * collection.length);
    return collection[randomIndex];
  }
  // If it's an object (treat as a collection of values)
  else if (typeof collection === "object") {
    const values = Object.values(collection);
    if (values.length === 0) {
      return undefined; // Handle empty object
    }
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  }

  return undefined; // Handle other types
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Animation = () => {
  return (
    <div>
      hello :)
      <h2>So I recently started taking an animation course</h2>
      <p>so will be adding what i learn in here!</p>
      <p>... ok ready..... click the following button:</p>
      <br />
      <br></br>
      <StyledDiv>
        <div
          className="emoji"
          aria-hidden="true"
          style={{
            "--duration": "1200ms",
            "--delay": "30ms",
          }}
        >
          🎉
        </div>
        <div
          className="emoji"
          aria-hidden="true"
          style={{
            "--duration": "1200ms",
            "--delay": "30ms",
          }}
        >
          ✨
        </div>
        <div
          className="emoji"
          aria-hidden="true"
          style={{
            "--duration": "1200ms",
            "--delay": "30ms",
          }}
        >
          💫
        </div>
        <div
          className="emoji"
          aria-hidden="true"
          style={{
            "--duration": "1200ms",
            "--delay": "30ms",
          }}
        >
          🚀
        </div>
        <div
          className="emoji"
          aria-hidden="true"
          style={{
            "--duration": "1200ms",
            "--delay": "30ms",
          }}
        >
          🌟
        </div>
        <div
          className="emoji"
          aria-hidden="true"
          style={{
            "--duration": "1200ms",
            "--delay": "30ms",
          }}
        >
          🎊
        </div>
      </StyledDiv>
      <button
        onClick={() => {
          const emojis = document.querySelectorAll(".emoji");
          emojis.forEach((emoji) => {
            emoji.classList.add("kick-off-animation");
          });
          setTimeout(() => {
            emojis.forEach((emoji) => {
              emoji.classList.remove("kick-off-animation");
            });
          }, 5000);
        }}
      >
        click me!!
      </button>
    </div>
  );
};

export default Animation;
