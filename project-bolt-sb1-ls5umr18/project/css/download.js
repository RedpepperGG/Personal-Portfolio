// Script to download the portfolio as a ZIP file

document.addEventListener('DOMContentLoaded', function() {
  // Create download button
  const downloadButton = document.createElement('button');
  downloadButton.textContent = 'Download Portfolio';
  downloadButton.classList.add('download-button');
  downloadButton.style.position = 'fixed';
  downloadButton.style.bottom = '20px';
  downloadButton.style.left = '20px';
  downloadButton.style.zIndex = '1000';
  downloadButton.style.padding = '10px 15px';
  downloadButton.style.backgroundColor = '#10b981';
  downloadButton.style.color = 'white';
  downloadButton.style.border = 'none';
  downloadButton.style.borderRadius = '5px';
  downloadButton.style.cursor = 'pointer';
  downloadButton.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  
  document.body.appendChild(downloadButton);
  
  downloadButton.addEventListener('click', function() {
    // In a real application, you would implement a proper ZIP download
    // For this demo, we'll just show instructions
    const instructions = document.createElement('div');
    instructions.style.position = 'fixed';
    instructions.style.top = '50%';
    instructions.style.left = '50%';
    instructions.style.transform = 'translate(-50%, -50%)';
    instructions.style.backgroundColor = 'white';
    instructions.style.padding = '20px';
    instructions.style.borderRadius = '10px';
    instructions.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    instructions.style.zIndex = '2000';
    instructions.style.maxWidth = '500px';
    
    instructions.innerHTML = `
      <h3 style="margin-bottom: 15px; color: #0f172a;">Download Instructions</h3>
      <p style="margin-bottom: 10px;">To download this portfolio:</p>
      <ol style="margin-left: 20px; margin-bottom: 15px;">
        <li style="margin-bottom: 5px;">Right-click on the page and select "Save As..."</li>
        <li style="margin-bottom: 5px;">Save the HTML file</li>
        <li style="margin-bottom: 5px;">Create the following folder structure:</li>
      </ol>
      <pre style="background: #f1f5f9; padding: 10px; border-radius: 5px; overflow-x: auto; margin-bottom: 15px;">
portfolio/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   ├── animations.css
│   └── responsive.css
└── js/
    └── main.js</pre>
      <p style="margin-bottom: 15px;">Copy each CSS and JS file into their respective folders.</p>
      <button id="close-instructions" style="background: #2563eb; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Close</button>
    `;
    
    document.body.appendChild(instructions);
    
    document.getElementById('close-instructions').addEventListener('click', function() {
      instructions.remove();
    });
  });
});