import disconnect from "../services/disconnect";

export default function getCurrentUser() {
  let currentUser = localStorage.currentUser || null;
  if (!currentUser) {
    disconnect();
  }
  return (currentUser && JSON.parse(currentUser)) || null;
}
