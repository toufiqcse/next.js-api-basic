const Footers = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="text-center text-black bg-red-600 py-[1em]">
      <p>All right reserved @copyright {year} </p>
    </div>
  );
};

export default Footers;
