function Customerfeedback({ name, feedback, image }) {
  return (
    <>
      <div className="max-w-80 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Content */}
        <div className="mb-3">
          <p className="text-gray-900 text-sm leading-relaxed whitespace-pre-wrap">
            {" "}
            {feedback}{" "}
          </p>
        </div>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt=""
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />

            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-1">
                <h1>{name}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Timestamp */}
        <div className="text-gray-500 text-xs">2:30 PM · Dec 20, 2024</div>
      </div>
    </>
  );
}
export default Customerfeedback;
