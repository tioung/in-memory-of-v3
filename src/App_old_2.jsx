import './App.css';
import { useState } from 'react';

function App() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [tributeText, setTributeText] = useState('');
  const [submittedTribute, setSubmittedTribute] = useState('');
  const [name, setName] = useState('Upload a photo of your loved one, write a tribute, and share memories.');
  const [submittedName, setSubmittedName] = useState('');
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = () => {
    setSubmittedTribute(tributeText.trim());
    document.querySelector(".custom-file-upload").classList.add("display_none")
    document.querySelector(".tribute").classList.add("display_none")
    document.querySelector(".start-again-button").classList.add("display")
    document.querySelector(".finish-button").classList.add("display")
    setSubmittedName()
  };

  const handleName = () => {
    setSubmittedName(name.trim());
  }

  const handleStartAgain = () =>{
    setPreviewUrl(null);
    setTributeText('');
    setSubmittedTribute('');
    setName('Upload a photo of your loved one, write a tribute, and share memories.')
    setSubmittedName('')

    document.querySelector('.form-input-name').value=''
    document.querySelector(".custom-file-upload").classList.remove("display_none")
    document.querySelector(".tribute").classList.remove("display_none")
    document.querySelector(".start-again-button").classList.remove("display")
    document.querySelector(".finish-button").classList.remove("display")
  }

  const handleFinish = () =>{

  }

  return (
    <div className="app-wrapper">
      <h1>In Memory Of</h1>
      <p className="subtitle">
        {name}
      </p>

      <div className="form-card">
        <label htmlFor="file-upload" className="custom-file-upload">Upload Photo</label>
        <input id="file-upload" type="file" onChange={handleFileChange} />
        {previewUrl && (
          <div style={{ marginTop: '20px' }}>
            <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%' }} />
          </div>
        )}

        <div className="tribute">
            <h3 style={{ marginBottom: '10px' }}>Your Tribute</h3>
            <input 
                type="text" 
                placeholder="Name of loved one"
                className='form-input-name'
                // value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <textarea
                placeholder="Write something meaningful..."
                rows="5"
                className="form-textarea"
                value={tributeText}
                onChange={(e) => setTributeText(e.target.value)}
            />
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>

        {/* Display Submitted Tribute Below */}
        {submittedTribute && (
          <div style={{ marginTop: '0px', background: '#fff', padding: '0px 20px', borderRadius: '8px' }}>
            <h4 style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>{submittedTribute}</h4>
          </div>
        )}

        <div className="startFinishBtns">
            <button className="start-again-button display_none" onClick={handleStartAgain}>Start Again</button>
            <button className="finish-button display_none" onClick={handleFinish}>Finish</button>
        </div>
        
      </div>

    </div>
  );
}

export default App;


