import "@/styles/profile.css";

export default function Profile() {
  return (
    <main className="page-container">
      <h1 className="page-title">My Profile</h1>

      <div className="profile-box">
        <div className="profile-field">
          <span className="profile-label">Name:</span> aBc
        </div>
        <div className="profile-field">
          <span className="profile-label">Email:</span> aBc@example.com
        </div>
        <div className="profile-field">
          <span className="profile-label">Location:</span> India
        </div>
        <div className="profile-field">
          <span className="profile-label">About Me:</span> I’m currently learning Next.js and exploring APIs, themes, and wireframing with external CSS.
        </div>
      </div>
    </main>
  );
}
