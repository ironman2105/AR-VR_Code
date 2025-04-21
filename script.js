async function fetchData() {
    const sheetID = "1cFt2ab4Q757yySBB0CqxjYLnXGdqp0_EzXzfnScFWXs"; 
    const url = `https://docs.google.com/spreadsheets/d/1cFt2ab4Q757yySBB0CqxjYLnXGdqp0_EzXzfnScFWXs/gviz/tq?tqx=out:json`;

    try {
        let response = await fetch(url);
        let text = await response.text();
        
        let jsonData = JSON.parse(text.substring(47, text.length - 2)); // Clean JSON format
        let rows = jsonData.table.rows[0].c; // Get first row data

        document.getElementById("name").innerText = rows[0].v;
        document.getElementById("address").innerText = rows[1].v;
        document.getElementById("email").innerText = rows[2].v;
        document.getElementById("contact").innerText = rows[3].v;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();