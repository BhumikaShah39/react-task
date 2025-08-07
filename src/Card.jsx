function Card({ image, title, country, description }) {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden max-w-full border hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full sm:w-32 md:w-40 h-48 sm:h-auto object-cover"
      />
      <div className="p-3 sm:p-4 flex flex-col justify-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 uppercase">{title}</h2>
        <h3 className="text-xs sm:text-sm text-gray-500">{country}</h3>
        <p className="mt-2 text-xs sm:text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default Card;