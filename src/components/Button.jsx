const Button = () => {
  const handleClick = (nama) => {
    if (nama) {
      console.log(`Saya diklik oleh ${nama}`);
      alert(`Saya di dklik oleh ${nama}`);
    } else {
      console.log(`Saya diklik`);
      alert(`Saya di dklik`);
    }
  };

  return (
    <div>
      <button onClick={() => handleClick('Budi')}>Klik saya dengan Parameter 🎋</button>
      <br />
      <button onClick={() => handleClick()}>Klik saya 🎋</button>;
    </div>
  );
};

export default Button;
