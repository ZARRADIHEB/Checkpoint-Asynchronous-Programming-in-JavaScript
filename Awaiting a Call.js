async function awaitCall() {
  const data = await new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Start Fetching Data");
      resolve("Data Fetched!");
    }, 1000)
  );
  console.log(data);
}

awaitCall();
