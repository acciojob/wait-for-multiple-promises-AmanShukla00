//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");
  
  // Add loading row
  output.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';

  function createPromise(index) {
    const time = (Math.random() * 2 + 1).toFixed(3);
    return new Promise(resolve => setTimeout(() => resolve({ index, time }), time * 1000));
  }

  const promises = [createPromise(1), createPromise(2), createPromise(3)];

  Promise.all(promises).then(results => {
    // Remove loading row
    output.innerHTML = "";
    
    let maxTime = 0;
    
    results.forEach(({ index, time }) => {
      maxTime = Math.max(maxTime, parseFloat(time));
      const row = `<tr><td>Promise ${index}</td><td>${time}</td></tr>`;
      output.innerHTML += row;
    });
    
    // Add total row
    output.innerHTML += `<tr><td>Total</td><td>${maxTime.toFixed(3)}</td></tr>`;
  });
});
