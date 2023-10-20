import HeadlineCard from "./HeadlineCard";

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <HeadlineCard
        title="Burger"
        text="Die besten Burger in der Stadt"
        imgURL="https://images.pexels.com/photos/13573663/pexels-photo-13573663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <HeadlineCard
        title="Tagesgericht"
        text="Empfehlung des Küchenchefs"
        imgURL="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <HeadlineCard
        title="Unsere Desserts"
        text="Leckere Köstlichkeiten"
        imgURL="https://images.pexels.com/photos/6605961/pexels-photo-6605961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  );
}

export default HeadlineCards;
