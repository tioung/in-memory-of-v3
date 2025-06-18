import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

function App() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [tributeText, setTributeText] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      const tributeSection = document.querySelector('.tribute-display');
      tributeSection?.scrollIntoView({ behavior: 'smooth' });
    }, 0); // slight delay to ensure element is rendered
  };

  const handleStartAgain = () => {
    setPreviewUrl(null);
    setTributeText('');
    setName('');
    setSubmitted(false);
  };

// Add this ref
const captureRef = useRef(null);

const handleSave = () => {
  if (captureRef.current) {
    html2canvas(captureRef.current).then(canvas => {
      const link = document.createElement('a');
      link.download = `${name || 'tribute'}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  }
};

  return (
    <div className="app-wrapper">
      <h1>In Memory Of</h1>

      {submitted && name.trim() ? (
        <>
          <h2 className="subtitle subtitle-with-line">{name.trim()}</h2>
          {/* <hr className="decorative-line" /> */}
        </>
      ) : (
        <h2 className="subtitle">
          Upload a photo of your loved one, write a tribute, and share memories.
        </h2>
      )}

      <div className="form-card">
        {!submitted && (
          <>
            <label htmlFor="file-upload" className="btn file-button">Upload Photo</label>
            <input id="file-upload" type="file" onChange={handleFileChange} />
          </>
        )}
          {previewUrl && (
            <div className={`image-preview fade-in ${submitted ? 'blurred-image' : ''}`}>
              <img src={previewUrl} alt="Preview" />
            </div>
          )}
          {submitted && (
            <div className="tribute-display fade-in">
              <h4 className="quote-style">{tributeText.trim()}</h4>
            </div>
          )}

        {!submitted && (
          <div className="tribute-form">
            <h3>Your Tribute</h3>
            <input
              type="text"
              placeholder="Name of loved one"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Write something meaningful..."
              rows="5"
              className="input-field"
              value={tributeText}
              onChange={(e) => setTributeText(e.target.value)}
            />
            <button className="btn" onClick={handleSubmit}>Submit</button>
          </div>
        )}


        {submitted && (
          <div className="action-buttons">
            <button className="btn" onClick={handleStartAgain}>Start Again</button>
            <button className="btn" onClick={handleSave}>Save</button>
          </div>
        )}
      </div>

      {/* Hidden clean version for capturing */}
      <div
        ref={captureRef}
        className="capture-version"
        style={{ 
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
          width: '400px', // or whatever fits your layout
          padding: '20px',
          backgroundColor: '#fff',
          color: '#000'
        }}
      >
        {previewUrl && (
          <div className="image-preview">
            <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%' }} />
          </div>
        )}
        {name && <h2>{name}</h2>}
        {tributeText && <p>{tributeText}</p>}
      </div>

    </div>//wrapper
    
    
  );//return

}//App component

export default App;
