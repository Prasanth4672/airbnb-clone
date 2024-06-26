
import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "../components/PropertiesClient";


const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

  
    if (!currentUser) {
      return (
        
          <EmptyState title="Unauthorized" subtitle="Please login" />
      
      );
    }
  
    const listings = await getListings({ userId: currentUser.id });
  
    if (listings.length === 0) {
      return (
  
          <EmptyState
            title="No Properties found"
            subtitle="Looks like you have not any Properties."
          />
      );
    }
  
    return (
     
      <PropertiesClient listings={listings} currentUser={currentUser} />
      
    );
  };
  
  export default PropertiesPage;