import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import TripsClient from "../components/TripsClient";



export default async function TripsPage() {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return (
                    <EmptyState title="Unauthorized" subtitle="Please login" />
       
      );
    }
  
    const reservations = await getReservation({
      userId: currentUser.id,
    });
  
    if (reservations.length === 0) {
      return (
            <EmptyState
            title="No trips found"
            subtitle="Looks like you havent reserved any trips."/>
      );
    }
  
    return (
          <TripsClient reservations={reservations} currentUser={currentUser} /> 
    );
  };
  