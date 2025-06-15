import './App.css';
import { useState } from 'react';

function App() {
  console.log(12555)
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
    // document.body.classList.add('submitted-blur');
    setTimeout(() => {
      const tributeSection = document.querySelector('.tribute-display');
      tributeSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // slight delay to ensure element is rendered
  };

  const handleStartAgain = () => {
    setPreviewUrl(null);
    setTributeText('');
    setName('');
    setSubmitted(false);
    // document.body.classList.remove('submitted-blur');
  };

  const handleSave = () => {
    if (previewUrl) {
      const link = document.createElement('a');
      link.href = previewUrl;
      link.download = `${name || 'tribute'}.jpg`; // Customize filename
      link.click();
    }
  };

  return (
    <div className="app-wrapper">
      <h1>In Memory Of</h1>
      <h2 className="subtitle">
        {submitted && name.trim()
          ? `${name.trim()}`
          : 'Upload a photo of your loved one, write a tribute, and share memories.'}
      </h2>

      <div className="form-card">
        {!submitted && (
          <>
            <label htmlFor="file-upload" className="file-button">Upload Photo</label>
            <input id="file-upload" type="file" onChange={handleFileChange} />
          </>
        )}

        {/* {previewUrl && (
          <div className="image-preview fade-in">
            <img src={previewUrl} alt="Preview" />
          </div>
        )} */}
        {previewUrl && (
          <div className={`image-preview fade-in ${submitted ? 'blurred-image' : ''}`}>
            <img src={previewUrl} alt="Preview" />
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
            <button className="primary-button" onClick={handleSubmit}>Submit</button>
          </div>
        )}

        {submitted && (
          <div className="tribute-display fade-in">
            <h4>{tributeText.trim()}</h4>
          </div>
        )}

        {submitted && (
          <div className="action-buttons">
            <button className="secondary-button" onClick={handleStartAgain}>Start Again</button>
            <button className="secondary-button" onClick={handleSave}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
