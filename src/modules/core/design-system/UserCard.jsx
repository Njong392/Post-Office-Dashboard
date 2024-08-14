/* eslint-disable react/prop-types */
const UserCard = ({user}) => {
  return (
    <div className="usercard rounded-lg p-4 bg-gray-100 h-[500px]">
      <h1 className="text-xl text-blue-700 font-semibold">
        Personal Information
      </h1>

      {user && (
        <div className="container flex items-start gap-7 mt-4">
          <div>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              alt=""
              className="rounded-lg w-36 h-36 object-cover"
            />
          </div>

          <div>
            <div className="mb-3">
              <h2 className="text-sm">Name</h2>
              {user && <p className="text-lg font-medium">{user.name}</p>}
            </div>

            <div className="mb-3">
              <h2 className="text-sm ">Email</h2>
              {user && <p className="text-lg font-medium">{user.email}</p>}
            </div>

            <div className="mb-3">
              <h2 className="text-sm">Phone number</h2>
              {user && (
                <p className="text-lg font-medium">{user.phoneNumber}</p>
              )}
            </div>

            <div className="mb-3 ">
              <h2 className="text-sm">Region</h2>
              <p className="text-lg font-medium">{user.name}</p>
            </div>

            <div className="mb-3">
              <h2 className="text-sm">Town</h2>
              <p className="text-lg font-medium">{user.town}</p>
            </div>
          </div>
        </div>
      )}

      <button className="w-full rounded-lg text-white bg-blue-700 py-2 text-lg mt-4">
        Dispatch notification to this user
      </button>
    </div>
  );
}

export default UserCard