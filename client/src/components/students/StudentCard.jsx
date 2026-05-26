import "../../styles/components/students/StudentCard.css";

function StudentCard({ title, value }) {
  return (
    <article className="student-summary-card">
      <span>{title}</span>
      <strong>{value}</strong>
    </article>
  );
}

export default StudentCard;