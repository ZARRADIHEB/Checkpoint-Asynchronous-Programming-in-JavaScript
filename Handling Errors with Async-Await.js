async function handlingErrors() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const isDataAvailable = false;
        if (isDataAvailable) resolve("Data is ready!");
        reject("Fetching data failed.");
      }, 1000);
    });
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}

handlingErrors();
