import './MenuResto.css';

const MenuResto = () => {
  const isMakanan = true;

  return (
    <div className="menu-item ">
      <div>
        <b>Nama Menu:</b> <em>Nasi Bakar 🍙</em>
      </div>
      {/* {isMakanan === true ? <div>Tipe: Makanan</div> : <div>Tipe: Minuman</div>} */}
      {isMakanan === true && <div>Tipe: Makanan</div>}
    </div>
  );
};

export default MenuResto;
