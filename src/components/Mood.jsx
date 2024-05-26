const Mood = (props) => {
  const { hari, mood } = props;

  return (
    <div>
      Hari: {hari}, Mood: {mood}
    </div>
  );
};

export default Mood;
