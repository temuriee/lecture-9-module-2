// import { useEffect, useState } from "react";

import { useState } from "react";
import Popup from "./Popup/Popup";

// const App = () => {
//   const [title, setTitle] = useState("");

//   useEffect(
//     function () {
//       document.title = title ? title : "";
//     },
//     [title]
//   );

//   return (
//     <div>
//       <input
//         type="text "
//         placeholder="Type Something"
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//       />
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handlePopup}>
        {popup ? "Hide Fetch" : "Show Fetch"}
      </button>
      <div>{popup && <Popup />}</div>
    </div>
  );
};

export default App;
