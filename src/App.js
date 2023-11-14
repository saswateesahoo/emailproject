// import  React,{ useState } from "react";
// import "./App.css";
// import emailData from "./email.json";
// import Pagination from "./Pagination";

// function App() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [inboxSelected, setInboxSelected] = useState(false);

//   const [checkedEmails, setCheckedEmails] = useState(
//     Array(emailData.email.length).fill(false)
//   );
//   const [starredEmails, setStarredEmails] = useState(
//     Array(emailData.email.length).fill(false)
//   );

//   const [readEmails, setReadEmails] = useState(
//     Array(emailData.email.length).fill(false)
//   );

//   const itemsPerPage = 15;

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const toggleCheckbox = (index) => {
//     setCheckedEmails((prevCheckedEmails) => {
//       const newCheckedEmails = [...prevCheckedEmails];
//       newCheckedEmails[index] = !newCheckedEmails[index];
//       return newCheckedEmails;
//     });
//   };

//   const toggleStar = (index) => {
//     setStarredEmails((prevStarredEmails) => {
//       const newStarredEmails = [...prevStarredEmails];
//       newStarredEmails[index] = !newStarredEmails[index];
//       return newStarredEmails;
//     });
//   };

//   const toggleRead = (index) => {
//     setReadEmails((prevReadEmails) => {
//       const newReadEmails = [...prevReadEmails];
//       newReadEmails[index] = true;
//       return newReadEmails;
//     });
//   };

//   const filteredEmails = inboxSelected
//     ? emailData.email.filter((email) =>
//         email.User.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : [];

//   const unreadCount = readEmails.filter((read) => !read).length;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   return (
//     <div className="App">
//       {/* upper head */}

//       <div className="upper-head">
//         <div className="search-bar">
//           <div className="search-icon">
//             <i className="fa fa-search"></i>
//           </div>
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>

//       <div className="lower">
//         {/* left side */}

//         <div className="left-side">
//           <button className="btn">
//             <span className="pencil"><i class="fa-solid fa-pen-nib" style={{marginRight: '5px'}}></i></span>
//             Compose</button>

//           <div className="first-sec">
//             <div
//               className={`inbox ${inboxSelected ? "selected" : ""}`}
//               onClick={() => setInboxSelected(true)}
//             >
//               <i className="fa fa-inbox" aria-hidden="true"></i>
//               Inbox
//               <span className="unread-count" style={{ marginLeft: "120px" }}>
//                 {unreadCount}
//               </span>
//             </div>

//             <div
//               className={`inbox ${!inboxSelected ? "selected" : ""}`}
//               onClick={() => setInboxSelected(false)}
//             >
//               <i className="fa fa-star" aria-hidden="true"></i>
//               Starred
//             </div>

//             <div className="inbox">
//               <i className="fa fa-clock" aria-hidden="true"></i>
//               Snoozed
//             </div>

//             <div className="inbox">
//               <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
//               Important
//             </div>

//             <div className="inbox">
//               <i className="fa fa-paper-plane" aria-hidden="true"></i>
//               Sent
//             </div>

//             <div className="inbox">
//               <i className="fa-solid fa-tag" style={{color: '#111928'}}></i>
//               Category
//               <i
//                 className={`fa ${
//                   isDropdownOpen ? "fa-chevron-down" : "fa-chevron-up"
//                 }`}
//                 aria-hidden="true"
//                 onClick={toggleDropdown}
//                 style={{ marginLeft: "100px" }}
//               ></i>
//               {isDropdownOpen && (
//                 <div
//                   className="category-options"
//                   style={{ marginLeft: "30px", marginTop: "15px" }}
//                 >
//                   <div style={{ marginTop: "10px" }}>Social</div>
//                   <div style={{ marginTop: "10px" }}>Updates</div>
//                   <div style={{ marginTop: "10px" }}>Forums</div>
//                   <div style={{ marginTop: "10px" }}>Promotions</div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* second sec */}
//           <div className="second-sec">
//             <div
//               style={{ marginLeft: "7px", color: "#6B7280", marginTop: "20px" }}
//             >
//               Lebels
//             </div>
//             <div className="lbl-opt">
//               <i
//                 className="fa fa-square"
//                 aria-hidden="true"
//                 style={{
//                   marginLeft: "7px",
//                   marginTop: "7px",
//                   marginRight: "7px",
//                   color: "#1C64F2",
//                 }}
//               ></i>
//               Business
//             </div>
//             <div className="lbl-opt">
//               <i
//                 className="fa fa-square"
//                 aria-hidden="true"
//                 style={{
//                   marginLeft: "7px",
//                   marginTop: "7px",
//                   marginRight: "7px",
//                   color: "#16BDCA",
//                 }}
//               ></i>
//               Design
//             </div>
//             <div className="lbl-opt">
//               <i
//                 className="fa fa-square"
//                 aria-hidden="true"
//                 style={{
//                   marginLeft: "7px",
//                   marginTop: "7px",
//                   marginRight: "7px",
//                   color: "#FDBA8C",
//                 }}
//               ></i>
//               Billings
//             </div>
//             <div className="lbl-opt">
//               <i
//                 className="fa fa-square"
//                 aria-hidden="true"
//                 style={{
//                   marginLeft: "7px",
//                   marginTop: "7px",
//                   marginRight: "7px",
//                   color: "#9061F9",
//                 }}
//               ></i>
//               Leads
//             </div>
//             <div className="lbl-opt" style={{ color: "#6B7280" }}>
//               <i
//                 className="fa fa-plus"
//                 aria-hidden="true"
//                 style={{
//                   marginLeft: "7px",
//                   marginTop: "7px",
//                   marginRight: "7px",
//                 }}
//               ></i>
//               create a new lebel
//             </div>
//           </div>

//           <div className="last-sec">
//             <div>
//               <i
//                 className="fa fa-cog"
//                 aria-hidden="true"
//                 style={{ marginRight: "10px" }}
//               ></i>
//               Settings
//             </div>
//             <div>
//               <i
//                 className="fas fa-question-circle"
//                 style={{ marginRight: "10px" }}
//               ></i>
//               Help & getting started
//             </div>
//           </div>
//         </div>

//         {/* Right side */}

//         <div className="right-side">
//           <div className="upr">
//             <span className="span" style={{marginLeft: '1000px',color: '#6B7280' }}></span>
//             <Pagination
//               currentPage={currentPage}
//               totalPages={Math.ceil(filteredEmails.length / itemsPerPage)}
//               onPageChange={setCurrentPage}
//             />
//           </div>

//           {filteredEmails.slice(startIndex, endIndex).map((email, index) => (
//             <div
//               key={index}
//               className={`email-item ${readEmails[index] ? "read-email" : ""} ${
//                 checkedEmails[index] ? "gray-row" : ""
//               }`}
//             >
//               <div className="email-content">
//                 <div className="email-flex">
//                   <input
//                     type="checkbox"
//                     checked={checkedEmails[index] || false}
//                     onChange={() => toggleCheckbox(index)}
//                     style={{ marginRight: "10px" }}
//                   />

//                   <i
//                     className={`fa-star ${
//                       starredEmails[index]
//                         ? "fas fa-star yellow-star"
//                         : "far fa-star"
//                     }`}
//                     onClick={() => toggleStar(index)}
//                     style={{ marginRight: "10px" }}
//                   />
//                   <i
//                     className="fa fa-chevron-right"
//                     aria-hidden="true"
//                     style={{ marginRight: "10px" }}
//                   ></i>

//                   <div
//                     className="email-data"
//                     onClick={() => {
//                       toggleRead(index);
//                     }}
//                   >
//                     <div className="email-sender">
//                       <span>
//                         {readEmails[index] ? (
//                           <span style={{ color: "gray" }}>{email.User}</span>
//                         ) : (
//                           email.User
//                         )}
//                       </span>
//                     </div>

//                     <div className="email-subject">
//                       <span>
//                         {readEmails[index] ? (
//                           <span style={{ color: "gray" }}>{email.email}</span>
//                         ) : (
//                           email.email
//                         )}
//                       </span>
//                     </div>

//                     <div className="email-time">
//                       <span>
//                         {readEmails[index] ? (
//                           <span style={{ color: "gray" }}>{email.Time}</span>
//                         ) : (
//                           email.Time
//                         )}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";
import emailData from "./email.json";
import Pagination from "./Pagination";

function App() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [inboxSelected, setInboxSelected] = useState(true);
  const [starredSelected, setStarredSelected] = useState(false);

  const [checkedEmails, setCheckedEmails] = useState(
    Array(emailData.email.length).fill(false)
  );
  const [starredEmails, setStarredEmails] = useState(
    Array(emailData.email.length).fill(false)
  );

  const [readEmails, setReadEmails] = useState(
    Array(emailData.email.length).fill(false)
  );

  const itemsPerPage = 15;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleCheckbox = (index) => {
    setCheckedEmails((prevCheckedEmails) => {
      const newCheckedEmails = [...prevCheckedEmails];
      newCheckedEmails[index] = !newCheckedEmails[index];
      return newCheckedEmails;
    });
  };

  const toggleStar = (index) => {
    setStarredEmails((prevStarredEmails) => {
      const newStarredEmails = [...prevStarredEmails];
      newStarredEmails[index] = !newStarredEmails[index];
      return newStarredEmails;
    });
  };

  const toggleRead = (index) => {
    setReadEmails((prevReadEmails) => {
      const newReadEmails = [...prevReadEmails];
      newReadEmails[index] = true;
      return newReadEmails;
    });
  };

  const filteredEmails = inboxSelected
    ? emailData.email.filter(
        (email) =>
          email.User.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : starredSelected 
    ? emailData.email.filter(
        (email, index) => starredEmails[index] && email.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const unreadCount = readEmails.filter((read) => !read).length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="App">


      {/* upper*/}
      <div className="upper">
        <div className="search-bar">
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="lower">
        {/* left side */}
        <div className="left-side">
          <button className="btn">
            <span className="pencil">
              <i class="fa-solid fa-pen-nib" style={{ marginRight: "5px" }}></i>
            </span>
            Compose
          </button>

          <div className="first-sec">
            <div
              className={`inbox ${inboxSelected ? "selected" : ""}`}
              onClick={() => {
                setInboxSelected(true);
                setStarredSelected(false); 
              }}
            >
              <i className="fa fa-inbox" aria-hidden="true"></i>
              Inbox
              <span className="unread-count" style={{ marginLeft: "120px" }}>
                {unreadCount}
              </span>
            </div>

            <div
              className={`inbox ${starredSelected ? "selected" : ""}`}
              onClick={() => {
                setInboxSelected(false);
                setStarredSelected(true);
              }}
            >
              <i className="fa fa-star" aria-hidden="true"></i>
              Starred
            </div>

            <div className="inbox">
              <i className="fa fa-clock" aria-hidden="true"></i>
              Snoozed
            </div>

            <div className="inbox">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
              Important
            </div>

            <div className="inbox">
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
              Sent
            </div>

            <div className="inbox">
              <i className="fa-solid fa-tag" style={{ color: "#111928" }}></i>
              Category
              <i
                className={`fa ${
                  isDropdownOpen ? "fa-chevron-down" : "fa-chevron-up"
                }`}
                aria-hidden="true"
                onClick={toggleDropdown}
                style={{ marginLeft: "100px" }}
              ></i>
              {isDropdownOpen && (
                <div
                  className="category-section"
                  style={{ marginLeft: "30px", marginTop: "15px" }}
                >
                  <div style={{ marginTop: "10px" }}>Social</div>
                  <div style={{ marginTop: "10px" }}>Updates</div>
                  <div style={{ marginTop: "10px" }}>Forums</div>
                  <div style={{ marginTop: "10px" }}>Promotions</div>
                </div>
              )}
            </div>
          </div>
          {/* mid sec */}
          <div className="mid-sec">
            <div
              style={{
                marginLeft: "7px",
                color: "#6B7280",
                marginTop: "20px",
              }}
            >
              Lebels
            </div>
            <div className="lbl-opt">
              <i
                className="fa fa-square"
                aria-hidden="true"
                style={{
                  marginLeft: "7px",
                  marginTop: "7px",
                  marginRight: "7px",
                  color: "#1C64F2",
                }}
              ></i>
              Business
            </div>
            <div className="lbl-opt">
              <i
                className="fa fa-square"
                aria-hidden="true"
                style={{
                  marginLeft: "7px",
                  marginTop: "7px",
                  marginRight: "7px",
                  color: "#16BDCA",
                }}
              ></i>
              Design
            </div>
            <div className="lbl-opt">
              <i
                className="fa fa-square"
                aria-hidden="true"
                style={{
                  marginLeft: "7px",
                  marginTop: "7px",
                  marginRight: "7px",
                  color: "#FDBA8C",
                }}
              ></i>
              Billings
            </div>
            <div className="lbl-opt">
              <i
                className="fa fa-square"
                aria-hidden="true"
                style={{
                  marginLeft: "7px",
                  marginTop: "7px",
                  marginRight: "7px",
                  color: "#9061F9",
                }}
              ></i>
              Leads
            </div>
            <div className="lbl-opt" style={{ color: "#6B7280" }}>
              <i
                className="fa fa-plus"
                aria-hidden="true"
                style={{
                  marginLeft: "7px",
                  marginTop: "7px",
                  marginRight: "7px",
                }}
              ></i>
              create a new lebel
            </div>
          </div>

          <div className="last-sec">
            <div>
              <i
                className="fa fa-cog"
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
              Settings
            </div>
            <div>
              <i
                className="fas fa-question-circle"
                style={{ marginRight: "10px" }}
              ></i>
              Help & getting started
            </div>
          </div>
        </div>
        {(inboxSelected || starredSelected) && (
          <div className="right-side">
            <div className="upper-sec">
              <span
                className="span"
                style={{ marginLeft: "1000px", color: "#6B7280" }}
              ></span>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredEmails.length / itemsPerPage)}
                onPageChange={setCurrentPage}
              />
            </div>
            {filteredEmails.slice(startIndex, endIndex).map((email, index) => (
              <div
                key={index}
                className={`email-item ${
                  readEmails[index] ? "read-email" : ""
                } ${checkedEmails[index] ? "gray-row" : ""}`}
              >
                <div className="email-content">
                  <div className="email-flex">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={checkedEmails[index] || false}
                      onChange={() => toggleCheckbox(index)}
                      style={{ marginRight: "10px" }}
                      className="checkbox"
                    />
                     <span className="checkmark"></span>
                </label>

                    <i
                      className={`fa-star ${
                        starredEmails[index]
                          ? "fas fa-star yellow-star"
                          : "far fa-star"
                      }`}
                      onClick={() => toggleStar(index)}
                      style={{
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                    />
                    <i
                      className="fa fa-chevron-right"
                      aria-hidden="true"
                      style={{ marginRight: "10px" }}
                    ></i>
                      

                    <div
                      className="email-data"
                      onClick={() => {
                        toggleRead(index);
                      }}
                    >
                  <div className="email-sender">
                        <span>
                          {readEmails[index] ? (
                            <span style={{ color: "gray" }}>
                              {email.User}
                            </span>
                          ) : (
                            email.User
                          )}
                        </span>
                      </div>
                      
                      <div className="email-message">
                        <span>
                          {readEmails[index] ? (
                            <span style={{ color: "gray" }}>
                              {email.email}
                            </span>
                          ) : (
                            email.email
                          )}
                        </span>
                      </div>

                      <div className="email-time">
                        <span>
                          {readEmails[index] ? (
                            <span style={{ color: "gray" }}>
                              {email.Time}
                            </span>
                          ) : (
                            email.Time
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
