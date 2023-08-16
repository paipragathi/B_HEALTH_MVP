
// import React, { useState } from "react";
// // import axios from "axios";
// import "./FileUpload.css"; // Make sure to have the necessary CSS for styling
// import Sidebar from "../elements/sidebar";

// const FileUpload = ({ contract, account, provider }) => {



//   const [account,setAccount] = useState("");
//   const [ehrContract ,setEhrContract] = useState(null);
//   const [rewardContract ,setRewardContract] = useState(null);
//   const [provider ,setProvider] = useState(null);
//   const [email ,setEmail] = useState("");

//   useEffect(()=>{
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const loadProvider = async()=>{
//       if(provider){
//         window.ethereum.on("chainChanged", () => {
//           window.location.reload();
//         });

//         window.ethereum.on("accountsChanged", () => {
//           window.location.reload();
//         });
//         await provider.send("eth_requestAccounts",[]);
//         const signer = provider.getSigner();
//         const address = await signer.getAddress();
//         setAccount(address);

//         let ehrContractAddress = '0x897F6B5f3a44096AE8DE19f7f413b94370868A8a';
//         let rewardContractAddress = '0x8824b9479f9C217f7BB28FBEaC728A1118e2B48C';

//         const ehrContract = new ethers.Contract(
//           ehrContractAddress, EHR.abi , signer
//         );

//         console.log(ehrContract);
//         setEhrContract(ehrContract);
        
//         const rewardContract = new ethers.Contract(
//           ehrContractAddress, EHR.abi,signer
//         );
//         console.log(rewardContract);
//         setRewardContract(rewardContract);

//         setProvider(provider);

//       }else{
//         console.error("Metamask not installed")
//       }
//     }
//     provider && loadProvider();

//   },[])
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("No document selected");
//   const [uploadedDocuments, setUploadedDocuments] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (file) {
//       try {
//         const formData = new FormData();
//         formData.append("file", file);

//         const resFile = await axios({
//           method: "post",
//           url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
//           data: formData,
//           headers: {
//             pinata_api_key: `dda545afa8af79578eec`,
//             pinata_secret_api_key: `df3a4744d81ff8016f3d4b038547a22a451d11df448d7fd6add935d11619f3b0`,
//             "Content-Type": "multipart/form-data",
// },
//         });
//         const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
//       //  await contract.add(account,ImgHash);
//         alert("Successfully Image Uploaded");
//         setFileName("No image selected");
//         setFile(null);
//       } catch (e) {
//         alert("Unable to upload image to Pinata");
//       }
//     }
//     alert("Successfully Image Uploaded");
//     setFileName("No image selected");
//     setFile(null);
//   };
//   const retrieveFile = (e) => {
//     const data = e.target.files[0]; //files array of files object
//     // console.log(data);
//     const reader = new window.FileReader();
//     reader.readAsArrayBuffer(data);
//     reader.onloadend = () => {
//       setFile(e.target.files[0]);
//     };
//     setFileName(e.target.files[0].name);
//     e.preventDefault();

//   };
//         alert("Document uploaded successfully");
//         setFileName("No document selected");
//         setFile(null);

//         const uploadedFileName = file.name;
//         const newDocument = {
//           name: uploadedFileName,
//           time: new Date().toLocaleString(),
//         };
//         setUploadedDocuments([...uploadedDocuments, newDocument]);
//       } catch (e) {
//         alert("Unable to upload document");
//       }
//     } else {
//       alert("No document selected");
//     }
  
//   };

//   const retrieveFile = (e) => {
//     const data = e.target.files[0];
//     const reader = new window.FileReader();
//     reader.readAsArrayBuffer(data);
//     reader.onloadend = () => {
//       setFile(e.target.files[0]);
//     };
//     setFileName(e.target.files[0].name);
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className="blue">
//         <div className="hospital-banner">
//           <img
//             src="https://www.thestatesman.com/wp-content/uploads/2018/07/Doctors.jpg"
//             alt="Hospital Banner"
//             className="hospital-banner-image"
//           />
//           <div className="hospital-banner-overlay">
//             <h1 className="hospital-banner-heading">Document Upload</h1>
//             <p className="hospital-banner-subtitle">
//               Upload important documents securely for your medical records.
//             </p>
//           </div>
//         </div>
//         <div className="top">
//           <form className="form" onSubmit={handleSubmit}>
//             <label htmlFor="file-upload" className="choose">
//               Choose a Document to Upload
//             </label>
//             <input
//               // disabled={!account}
//               type="file"
//               id="file-upload"
//               name="data"
//               onChange={retrieveFile}
//             />
//             <span className="textArea">Selected Document: {fileName}</span>
//             <button type="submit" className="upload" disabled={!file}>
//               Upload Document
//             </button>
//           </form>
//         </div>
//         <div className="uploaded-documents">
//           <h2>Uploaded Documents</h2>
//           <ul>
//             {uploadedDocuments.map((doc, index) => (
//               <li key={index}>
//                 <span className="doc-name">{doc.name}</span>
//                 <span className="doc-time">{doc.time}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FileUpload;

import React, { useState } from "react";
// import axios from "axios";
import "./FileUpload.css"; // Make sure to have the necessary CSS for styling
import Sidebar from "../elements/sidebar";

const FileUpload = ({ contract, account, provider }) => {


  const [account,setAccount] = useState("");
  const [ehrContract ,setEhrContract] = useState(null);
  const [rewardContract ,setRewardContract] = useState(null);
  const [provider ,setProvider] = useState(null);
  const [email ,setEmail] = useState("");

  useEffect(()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async()=>{
      if(provider){
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts",[]);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        let ehrContractAddress = '0x897F6B5f3a44096AE8DE19f7f413b94370868A8a';
        let rewardContractAddress = '0x8824b9479f9C217f7BB28FBEaC728A1118e2B48C';

        const ehrContract = new ethers.Contract(
          ehrContractAddress, EHR.abi , signer
        );

        console.log(ehrContract);
        setEhrContract(ehrContract);
        
        const rewardContract = new ethers.Contract(
          ehrContractAddress, EHR.abi,signer
        );
        console.log(rewardContract);
        setRewardContract(rewardContract);

        setProvider(provider);

      }else{
        console.error("Metamask not installed")
      }
    }
    provider && loadProvider();

  },[])
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No document selected");
  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `dda545afa8af79578eec`,
            pinata_secret_api_key: `df3a4744d81ff8016f3d4b038547a22a451d11df448d7fd6add935d11619f3b0`,
            "Content-Type": "multipart/form-data",
},
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
      //  await contract.add(account,ImgHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }else {
        alert("No document selected");
      }
    
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();

  };
       

  return (
    <>
      <Sidebar />
      <div className="blue">
        <div className="hospital-banner">
          <img
            src="https://www.thestatesman.com/wp-content/uploads/2018/07/Doctors.jpg"
            alt="Hospital Banner"
            className="hospital-banner-image"
          />
          <div className="hospital-banner-overlay">
            <h1 className="hospital-banner-heading">Document Upload</h1>
            <p className="hospital-banner-subtitle">
              Upload important documents securely for your medical records.
            </p>
          </div>
        </div>
        <div className="top">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="file-upload" className="choose">
              Choose a Document to Upload
            </label>
            <input
              // disabled={!account}
              type="file"
              id="file-upload"
              name="data"
              onChange={retrieveFile}
            />
            <span className="textArea">Selected Document: {fileName}</span>
            <button type="submit" className="upload" disabled={!file}>
              Upload Document
            </button>
          </form>
        </div>
        <div className="uploaded-documents">
          <h2>Uploaded Documents</h2>
          <ul>
            {uploadedDocuments.map((doc, index) => (
              <li key={index}>
                <span className="doc-name">{doc.name}</span>
                <span className="doc-time">{doc.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FileUpload;