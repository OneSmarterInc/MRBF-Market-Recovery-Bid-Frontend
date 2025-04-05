import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  // const api = "http://170.249.90.216:7890";
  // const api = "http://localhost:8000";
  const api = "http://170.249.90.216:7010";

 
  return (
    <MyContext.Provider
      value={{
        api,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
