import "./card-items.css";

interface CardItemsProps {
  course: string;
  students: string;
}

const CardItems = ({ course, students }: CardItemsProps) => {
  return (
    <div className="card_items_wrap">
      <label htmlFor="Course">Name</label>
      <p>{course}</p>
      <label htmlFor="Students">Students</label>
      <p>{students}</p>
      <p></p>
    </div>
  );
};

export default CardItems;
