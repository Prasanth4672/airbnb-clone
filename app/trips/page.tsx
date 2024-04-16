import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import TripsClient from "../components/TripsClient";
import { Suspense } from "react";

export default async function TripsPage() {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return (
        
        <Suspense fallback={<div>Loding..</div>}>
                    <EmptyState title="Unauthorized" subtitle="Please login" />
        </Suspense>
      
      );
    }
  
    const reservations = await getReservation({
      userId: currentUser.id,
    });
  
    if (reservations.length === 0) {
      return (
  
          <Suspense fallback={<div>Looding..</div>}>
            <EmptyState
            title="No trips found"
            subtitle="Looks like you havent reserved any trips."/>
          </Suspense>
      );
    }
  
    return (
      
        <Suspense fallback={<div>Looding..</div>}>
          <TripsClient reservations={reservations} currentUser={currentUser} />
        </Suspense>
    );
  };
  