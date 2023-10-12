import React from "react";

const UserCard = ({ user, expanded, onToggleExpand }) => (
  <div className="bg-white border rounded-lg shadow-2xl my-4 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <div className="w-full sm:w-1/4 pr-0 sm:pr-4">
        <p>{user.company.name}</p>
      </div>
      <div className="w-full sm:w-1/4 pr-0 sm:pr-4">
        <h2 className="font-bold">Contact</h2>
        <p>{user.name}</p>
      </div>
      <div className="w-full sm:w-1/4">
        <h2 className="font-bold">City</h2>
        <p>{user.address.city}</p>
      </div>
      <div className="w-full sm:w-1/4 mt-4 sm:mt-0">
        <button
          className={`bg-red-400 text-white rounded-3xl px-4 py-2 w-full sm:w-32 ${
            expanded ? "sm:w-40" : "sm:w-32"
          } md:w-40 lg:w-44 xl:w-48`}
          onClick={() => onToggleExpand(user.id)}
        >
          {expanded ? "Hide Detail" : "View Detail"}
        </button>
      </div>
    </div>

    {expanded && (
      <div className="p-4 border rounded-lg shadow-md mx-5 my-5">
        <h1 className="font-bold text-2xl px-2 py-4">Description</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <InfoRow title="Company Name" content={user.company.name} />
            <InfoRow title="Catch Phrase" content={user.company.catchPhrase} />
            <InfoRow title="Business Strategy" content={user.company.bs} />
          </div>
          <div>
            <InfoRow title="Contact Person" content={user.name} />
            <InfoRow title="Email" content={user.email} />
            <InfoRow title="Phone" content={user.phone} />
            <InfoRow title="Website" content={user.website} />
            <InfoRow
              title="Address"
              content={`${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}`}
            />
          </div>
        </div>
      </div>
    )}
  </div>
);

const InfoRow = ({ title, content }) => (
  <div className="flex flex-col">
    <h2 className="font-bold">{title}</h2>
    <p>{content}</p>
  </div>
);

export default UserCard;
