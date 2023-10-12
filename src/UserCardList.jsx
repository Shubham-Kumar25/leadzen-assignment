import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

const UserCardList = () => {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleToggleExpand = (userId) => {
    setExpandedUserId(userId === expandedUserId ? null : userId);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const visibleUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      {error ? (
        <p className="text-red-600 font-bold">{error}</p>
      ) : visibleUsers.length > 0 ? (
        visibleUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            expanded={user.id === expandedUserId}
            onToggleExpand={handleToggleExpand}
          />
        ))
      ) : (
        <p>No users found.</p>
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UserCardList;
