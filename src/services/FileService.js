async function checkFileExists(folderName, fileName) {
  this.sourceFile = "e:\\test.txt";
  const reader = new FileReader();
  console.log(reader);
  reader.readAsText(this.sourceFile);
  reader.addEventListener("load", (event) => {
    const result = reader.result;
    console.log(result);
  });
}

async function openAndWriteToFile(folderName, fileName, text) {
  try {
    const handle = await window.showDirectoryPicker();
    const directoryHandle = await handle.getDirectoryHandle(folderName, {
      create: true,
    });
    const fileHandle = await directoryHandle.getFileHandle(fileName, {
      create: true,
    });
    const writable = await fileHandle.createWritable();
    await writable.write(text);
    await writable.close();
    console.log("Text written to file!");
  } catch (error) {
    console.error("Error:", error);
  }
}

export default {
  checkFileExists,
  openAndWriteToFile,
};
