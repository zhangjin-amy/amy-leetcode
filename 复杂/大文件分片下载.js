function downloadFile(url, chunkSize) {
  const xhr = new XMLHttpRequest();
  xhr.open('HEAD', url, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const fileSize = parseInt(xhr.getResponseHeader('Content-Length'));
      const chunks = Math.ceil(fileSize / chunkSize);
      const promises = [];
      for (let i = 0; i < chunks; i++) {
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, fileSize);
        const promise = new Promise(resolve => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'blob';
          xhr.setRequestHeader('Range', `bytes=${start}-${end - 1})`;
          xhr.onload = function() {
            resolve(this.response);
          };
          xhr.send();
        })
        promises.push(promise);
      }
      Promise.all(promises).then(blobs => {
        const blob = new Blob(blobs, { type: 'application/octet-stream' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = url.split('/').pop();
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
    }
  };
  xhr.send();
}