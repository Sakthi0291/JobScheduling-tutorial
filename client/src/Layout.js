import UserProfile from "./UserProfile";
import LoginPage from "./LoginPage.js";
import { useEffect, useState } from "react";

function Layout() {
  const [isFetching, setIsFetching] = useState(true);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    mailid: "",
    timeZone: "",
    createdTime: "",
  });

  useEffect(() => {
    window.catalyst.auth.isUserAuthenticated().then((result) => {
        setUserDetails({
          firstName: result.content.first_name,
          lastName: result.content.last_name,
          mailid: result.content.email_id,
          timeZone: result.content.time_zone,
          createdTime: result.content.created_time,
        });
        setIsUserAuthenticated(true);
      })
      .catch((err) => {
        console.log("Error handling:  ",err);
      })
      .finally(() => {
        
        setIsFetching(false);
      });
  }, []);

  return (
    <>
      {isFetching ? (
        <p>Loading ….</p>
      ) : isUserAuthenticated ? (
        <UserProfile userDetails={userDetails} />
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default Layout;
