function NavBar() {
  return (
    <div className="w-full bg-transparent py-5">
      <ul className="flex gap-16 items-center justify-center">
        <li>
          <a href="" className="font-semibold">About</a>
        </li>
        <li>
          <a href=""><img src="../src/assets/Hamza.svg" alt="Hamza" className="w-28" /></a>
        </li>
        <li>
          <a href="" className="font-semibold">Portfolio</a>
        </li>
      </ul>
    </div>
  );
}
export default NavBar