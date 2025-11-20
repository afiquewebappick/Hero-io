import { toast } from "react-toastify";

const getStoreItem = () => {
  const storeItemSTR = localStorage.getItem("install");
  if (storeItemSTR) {
    const storeItemData = JSON.parse(storeItemSTR);
    return storeItemData;
  } else {
    return [];
  }
};

const addToStoreToDB = (id) => {
  const storeItem = getStoreItem();
  // console.log(storeItem);
  if (storeItem.includes(id)) {
    return;
  } else {
    toast.success("Success Install!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"
    });
    storeItem.push(id);
    const data = JSON.stringify(storeItem);
    localStorage.setItem("install", data);
  }
};

const removeFromStoreDB = (id) => {
  const storeItem = getStoreItem();
  if (storeItem.includes(id)) {
    toast.warning("Success UnInstall!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"
    });
    const newData = storeItem.filter((b) => b !== id);
    const data = JSON.stringify(newData);
    localStorage.setItem("install", data);
  }
};

export { addToStoreToDB, getStoreItem, removeFromStoreDB };
