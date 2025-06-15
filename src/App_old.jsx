import './App.css';
import { useState } from 'react';

function App() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [tributeText, setTributeText] = useState('');
  const [submittedTribute, setSubmittedTribute] = useState('');
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    //console.log(file)
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = () => {
    setSubmittedTribute(tributeText.trim());
  };


{/* <div className="app-wrapper">
      <label htmlFor="file-upload" className="custom-file-upload">
        Upload Photo
      </label>
      <input id="file-upload" type="file" onChange={handleFileChange} />
      
      {previewUrl && (
        <div style={{ marginTop: '20px' }}>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div> */}


  return (
    <div className="app-wrapper">
      <h1>In Memory Of</h1>
      <p className="subtitle">
        Upload a photo of your loved one, write a tribute, and share memories.
      </p>

      <div className="form-card">
        <label htmlFor="file-upload" className="custom-file-upload">
          Upload Photo
        </label>
        <input id="file-upload" type="file" onChange={handleFileChange} />
        {previewUrl && (
          <div style={{ marginTop: '20px' }}>
            <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%' }} />
          </div>
        )}

        {/* Display Submitted Tribute Below */}
        {submittedTribute && (
          <div style={{ marginTop: '30px', background: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '10px' }}>Your Tribute</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{submittedTribute}</p>
          </div>
        )}


        <label className="form-label">
          Tribute:
          <textarea
            placeholder="Write something meaningful..."
            rows="5"
            className="form-textarea"
            value={tributeText}
            onChange={(e) => setTributeText(e.target.value)}
          />
        </label>

        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>

    </div>
  );
}

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import './App.css';

// function App() {
//   return (
//     <div className="app-container">
//       <h1>In Memory Of</h1>
//       <p>Upload a photo of your loved one, write a short tribute, and share memories.</p>

//       <div className="upload-section">
//         <input type="file" accept="image/*" />
//       </div>

//       <div className="text-section">
//         <textarea placeholder="Write something in memory..." rows="4" cols="50" />
//       </div>

//       <button>Submit</button>
//     </div>
//   );
// }

// export default App;

