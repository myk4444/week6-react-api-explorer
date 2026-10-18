
function UserCard({ name, email, company }) {
  return (
    <article className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
    </article>
  );
}

export default UserCard;
