function fetchWithRetry(url, maxRetries) {
  return new Promise((resolve, reject) => {

    const fetchOnce = function() {
      fetch(url)
        .then(res => {
          if (res.ok) {
            resolve(res);
          } else {
            throw new Error('res is error')
          }
        })
        .catch(err => {
          if (maxRetries > 0) {
            maxRetries--;
            fetchOnce();
          } else {
            reject(err);
          }
        })
    }
    fetchOnce();

  })
}