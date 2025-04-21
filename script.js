const sheetURL = `https://docs.google.com/spreadsheets/d/1cFt2ab4Q757yySBB0CqxjYLnXGdqp0_EzXzfnScFWXs/gviz/tq?tqx=out:json`;

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    if (data && data.length > 0) {
      const info = data[0];
      const text = `👨‍⚖️ ${info.Name}\n📞 ${info.Phone}\n📧 ${info.Email}\n🏠 ${info.Address}`;
      document.querySelector('#contactInfo').setAttribute('text', {
        value: text,
        align: 'center',
        color: '#000000',
        width: 1.5
      });
    } else {
      document.querySelector('#contactInfo').setAttribute('text', {
        value: 'No data found!',
        color: '#ff0000',
        width: 1.5
      });
    }
  })
  .catch(err => {
    console.error("Failed to fetch contact data", err);
    document.querySelector('#contactInfo').setAttribute('text', {
      value: 'Error loading data',
      color: '#ff0000',
      width: 1.5
    });
  });
