import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import { useTheme } from "@emotion/react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { getFeedbackJson } from "../../service.js";
import LinearProgressBar from "../commonStyles/LinearProgressBar.js";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CircularProgressbarStyle = {
  rotation: 0.25,

  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
  strokeLinecap: "butt",

  // Text size
  textSize: "16px",

  // How long animation takes to go from one percentage to another, in seconds
  pathTransitionDuration: 0.5,

  // Can specify path transition in more detail, or remove it entirely
  // pathTransition: 'none',

  // Colors
  pathColor: `rgba(62, 152, 199, ${80 / 100})`,
  textColor: "red",
  trailColor: "red",
  backgroundColor: "#3e98c7",
};
const PdfReader = () => {
  const [loader, setLoader] = useState(true);
  const [pdfFile, setPdfFile] = useState(null);
  const [textContent, setTextContent] = useState("");
  const [error, setError] = useState(false);
  const theme = useTheme();
  const [result, setResult] = useState({
    marks: 0,
    shortcomings: [],
  });
  const [serverError, setServerError] = React.useState(false);
  const info = ["Checking your resume...", "Calculating the score..."];

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
    setTextContent("");

    if (file) {
      // Read the PDF file
      const reader = new FileReader();
      reader.onloadend = () => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
        extractTextContent(reader.result); // Extract text content after file is loaded
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const extractTextContent = async (data) => {
    try {
      const pdf = await pdfjs.getDocument({ data }).promise;
      const numPages = pdf.numPages;
      let textContent = "";

      for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const textContentForPage = await page.getTextContent();
        const pageText = textContentForPage.items
          .map((item) => item.str)
          .join(" ");
        textContent += pageText + "\n";
      }
      let feedBack;
      setLoader(true);
      try {
        setTextContent(textContent);
        feedBack = await getFeedbackJson(textContent);
        console.log(feedBack.shortcomings);
        let res = {
          marks: feedBack.response,
          shortcomings: feedBack.shortcomings,
        };
        setLoader(false);
        setResult(res);
      } catch {
        setLoader(false);
        console.log("internal server error");
      }
    } catch (error) {
      console.error("Error extracting text content:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Check your resume</Typography>

      {serverError && <Alert severity="error">Internal server error ! </Alert>}

      <div
        style={{
          backgroundColor: "white",
          minWidth: "600px",
          minHeight: "200px",
          maxWidth: "750px",
          borderRadius: "15px",
          marginTop: "10px",
          padding: "50px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {!pdfFile && (
          <label
            htmlFor="file-upload"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CloudUploadIcon
              sx={{
                fontSize: 100,
                // color: "#0bdbb6",
                // "&:hover": {
                //   color: "#0ABE9E",
                //   transition: "0.3s",
                //   cursor: "pointer",
                // },
              }}
            />
            <input
              type="file"
              id="file-upload"
              onChange={onFileChange}
              accept=".pdf"
              style={{ display: "none" }}
            />
            <Typography variant="h5">Drop your Resume here! </Typography>
          </label>
        )}
        {pdfFile &&
          (loader ? (
            <LinearProgressBar info={info} speed={200} loader={loader} />
          ) : (
            <div>
              <div style={{ width: 120, height: 100 }}>
                {/* Resume Score :{!loader ? result.marks : null} */}
                {!loader && (
                  <CircularProgressbar
                    value={result.marks}
                    text={`${result.marks}%`}
                    styles={{
                      path: {
                        stroke: "#333",
                      },
                      text: {
                        fill: "#333",
                      },
                    }}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PdfReader;
//DONT DELETE THE ABOVE CODE
//---------------------------------

// import React, { useState } from "react";
// import { Document, pdfjs } from "react-pdf";

// const PdfUploader = () => {
//   const [pdfFile, setPdfFile] = useState(null);
//   const [textContent, setTextContent] = useState("");

//   const onFileChange = (event) => {
//     const file = event.target.files[0];
//     setPdfFile(file);
//     setTextContent(""); // Reset text content when a new file is selected

//     if (file) {
//       // Read the PDF file
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//         extractTextContent(reader.result); // Extract text content after file is loaded
//       };
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const extractTextContent = async (data) => {
//     try {
//       const pdf = await pdfjs.getDocument({ data }).promise;
//       const numPages = pdf.numPages;
//       let textContent = '';

//       for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
//         const page = await pdf.getPage(pageNumber);
//         const textContentForPage = await page.getTextContent();
//         const pageText = textContentForPage.items.map((item) => item.str).join(" ");
//         textContent += pageText + "\n";
//       }

//       setTextContent(textContent); // Set the accumulated text content
//     } catch (error) {
//       console.error('Error extracting text content:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={onFileChange} style={{ margin: "300pt" }} />
//       {pdfFile && (
//         <div style={{ border: "2px solid black" }}>
//           <div>
//             <h3>Text Content:</h3>
//             <pre>{textContent}</pre>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PdfUploader;


//typing effect prototype , misbeahaving
// import React, { useState, useEffect } from "react";
// import { pdfjs } from "react-pdf";
// import { useTheme } from "@emotion/react";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { getFeedbackJson } from "../../service.js";
// import LinearProgressBar from "../commonStyles/LinearProgressBar.js";
// import Alert from "@mui/material/Alert";
// import { Typography } from "@mui/material";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import Typist from "react-typist"; // Import react-typist

// const PdfReader = () => {
//   const [loader, setLoader] = useState(true);
//   const [pdfFile, setPdfFile] = useState(null);
//   const [textContent, setTextContent] = useState("");
//   const [error, setError] = useState(false);
//   const theme = useTheme();
//   const [result, setResult] = useState({
//     marks: 0,
//     shortcomings: [],
//   });
//   const [serverError, setServerError] = React.useState(false);
//   const info = ["Checking your resume...", "Calculating the score..."];

//   const onFileChange = (event) => {
//     const file = event.target.files[0];
//     setPdfFile(file);
//     setTextContent("");

//     if (file) {
//       // Read the PDF file
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//         extractTextContent(reader.result); // Extract text content after file is loaded
//       };
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const extractTextContent = async (data) => {
//     try {
//       const pdf = await pdfjs.getDocument({ data }).promise;
//       const numPages = pdf.numPages;
//       let textContent = "";

//       for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
//         const page = await pdf.getPage(pageNumber);
//         const textContentForPage = await page.getTextContent();
//         const pageText = textContentForPage.items
//           .map((item) => item.str)
//           .join(" ");
//         textContent += pageText + "\n";
//       }
//       let feedBack;
//       setLoader(true);
//       try {
//         setTextContent(textContent);
//         feedBack = await getFeedbackJson(textContent);
//         console.log(feedBack.shortcomings);
//         let res = {
//           marks: feedBack.response,
//           shortcomings: feedBack.shortcomings,
//         };
//         setLoader(false);
//         setResult(res);
//       } catch {
//         setLoader(false);
//         console.log("internal server error");
//       }
//     } catch (error) {
//       console.error("Error extracting text content:", error);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         height: "100vh",
//         flexDirection: "column",
//       }}
//     >
//       <Typography variant="h4">Check your resume</Typography>

//       {serverError && <Alert severity="error">Internal server error ! </Alert>}

//       <div
//         style={{
//           backgroundColor: "white",
//           minWidth: "600px",
//           minHeight: "200px",
//           maxWidth: "750px",
//           borderRadius: "15px",
//           marginTop: "10px",
//           padding: "50px",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
//         }}
//       >
//         {!pdfFile && (
//           <label
//             htmlFor="file-upload"
//             style={{
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexDirection: "column",
//             }}
//           >
//             <CloudUploadIcon
//               sx={{
//                 fontSize: 100,
//                 // color: "#0bdbb6",
//                 // "&:hover": {
//                 //   color: "#0ABE9E",
//                 //   transition: "0.3s",
//                 //   cursor: "pointer",
//                 // },
//               }}
//             />
//             <input
//               type="file"
//               id="file-upload"
//               onChange={onFileChange}
//               accept=".pdf"
//               style={{ display: "none" }}
//             />
//             <Typography variant="h5">Drop your Resume here! </Typography>
//           </label>
//         )}
//         {pdfFile &&
//           (loader ? (
//             <LinearProgressBar info={info} speed={200} loader={loader} />
//           ) : (
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <div style={{ width: 120, height: 100 }}>
//                 {!loader && (
//                   <CircularProgressbar
//                     value={result.marks}
//                     text={`${result.marks}%`}
//                     styles={{
//                       path: {
//                         stroke: "#333",
//                       },
//                       text: {
//                         fill: "#333",
//                       },
//                     }}
//                   />
//                 )}
//               </div>
//               {/* Typist component for typing effect */}
//               <div style={{ marginLeft: 20 }}>
//                 <Typist>
//                   {result.shortcomings.map((shortcoming, index) => (
//                     <div key={index}>
//                       {shortcoming}
//                       <Typist.Backspace count={shortcoming.length} delay={2000} />
//                       <Typist.Delay ms={500} />
//                     </div>
//                   ))}
//                 </Typist>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default PdfReader;
