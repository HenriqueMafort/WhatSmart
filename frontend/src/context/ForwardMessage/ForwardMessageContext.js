import React, { createContext, useState } from 'react';


const ForwardMessageContext = createContext();




const ForwardMessageProvider = ({ children }) => {
  const [forwardingMessage, setForwardingMessage ] = useState(null);


  return (
// 		<ForwardMessageContext.Provider
//   value={{ forwardingMessage, setForwardingMessage  }}
// >
//   {children}
// </ForwardMessageContext.Provider>
console.log("teste app")
	);
};

export { ForwardMessageContext, ForwardMessageProvider };