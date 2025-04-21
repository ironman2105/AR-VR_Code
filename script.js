const sheetURL = `https://docs.google.com/spreadsheets/d/1cFt2ab4Q757yySBB0CqxjYLnXGdqp0_EzXzfnScFWXs/gviz/tq?tqx=out:json`;


fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    const info = data[0]; // Assuming first row
    const text = `Name: ${info.Name}\nPhone: ${info.Phone}\nEmail: ${info.Email}\nAddress: ${info.Address}`;

    document.querySelector('#contactInfo').setAttribute('text', {
      value: text,
      align: 'center',
      width: 2,
      color: '#FFFFFF'
    });
  })
  .catch(err => {
    console.error("Failed to load sheet data", err);
  });
