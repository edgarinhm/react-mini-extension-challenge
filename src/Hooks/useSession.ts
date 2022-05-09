import { useState } from "react";
const useSession = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return { authenticated };
};

export default useSession;
