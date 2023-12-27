
export default function Medico({ user }) {
    return (
      
      <div className="doctor-card">
        <img src={user.avatar} className="card-img-top" alt="..." />
          <h4 > {user.first_name} {user.last_name}</h4>
          <p >{user.email}</p>
      </div>
      
    );
  }
  