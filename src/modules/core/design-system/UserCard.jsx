/* eslint-disable react/prop-types */
const UserCard = ({user}) => {
  return (
    <div className="usercard rounded-lg p-4 bg-gray-100 h-[500px]">
      <h1 className="text-xl text-blue-700 font-semibold">
        Personal Information
      </h1>

      <div className="container flex items-start gap-7 mt-4">
        <div>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
            alt=""
            className="rounded-lg w-36 h-36 object-cover"
          />

          <div className="mt-2">
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
              collected: 10
            </div>
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-300 me-2"></div>{" "}
              not collected: 6
            </div>
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
              resent: 4
            </div>
          </div>
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
            {user && <p className="text-lg font-medium">{user.phoneNumber}</p>}
          </div>

          <div className="mb-3 ">
            <h2 className="text-sm">Region</h2>
            <p className="text-lg font-medium">North-west</p>
          </div>

          <div className="mb-3">
            <h2 className="text-sm">Location</h2>
            <p className="text-lg font-medium">Nkwen, Bamenda</p>
          </div>
        </div>
      </div>

      <button className="w-full rounded-lg text-white bg-blue-700 py-2 text-lg mt-4">
        Dispatch notification to this user
      </button>
    </div>
  );
}

export default UserCard