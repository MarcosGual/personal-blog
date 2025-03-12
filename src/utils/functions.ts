import { ref, uploadBytesResumable, getDownloadURL, FirebaseStorage } from "firebase/storage";

type MediaSetter = (url: string) => void;

export const dateTimeToDate = (str: string) => {
  return str.slice(0, 10).split("-").reverse().join("-");
};

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const shortString = (str: string, words: number): string | null => {
  const regex = new RegExp(`^.{1,${words}}.*?\\b`); 
  const match = str.match(regex); 

  if (match) {
    return match[0]; 
  }

  return null; 
};

export const uploadFile = (storage: FirebaseStorage, file: File, mediaSetter: MediaSetter) => {
  const uniqueName = new Date().getTime() + file.name;
  const storageRef = ref(storage, uniqueName);

  const uploadTask = uploadBytesResumable(storageRef, file);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error: Error) => {
      // Handle unsuccessful uploads
      console.log("Error uploading file - " + error.message);
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        mediaSetter(downloadURL);
      });
    }
  );
};
