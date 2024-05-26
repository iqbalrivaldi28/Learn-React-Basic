import './MenuResto.css';

const MenuResto = () => {
  const isMakanan = true;
  const menu = ['nasi bakar 🍘', 'mie ayam 🍜', 'pisang goreng 🍌', 'donat 🍩'];
  const minuman = [
    {
      nama: 'susu 🥛',
      harga: 'Rp. 5.000',
    },
    {
      nama: 'teh 🍵',
      harga: 'Rp. 3.000',
    },
    {
      nama: 'kopi ☕️',
      harga: 'Rp. 4.000',
    },
  ];

  return (
    <>
      {menu.map((item, index) => {
        return (
          <div className="menu-item " key={index}>
            <div>
              <b>Nama Menu:</b> <em>{item}</em>
            </div>
            {isMakanan === true && <div>Tipe: Makanan</div>}
          </div>
        );
      })}

      {minuman.map((item, index) => {
        return (
          <div className="menu-item" key={index}>
            <div>
              <b>
                Nama Minuman: <em>{item.nama}</em>
              </b> 
              <br />
              <b>Harga:</b> <em>{item.harga}</em>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuResto;
